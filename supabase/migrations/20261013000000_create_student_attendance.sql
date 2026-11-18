create extension if not exists pgcrypto with schema extensions;

create table if not exists public.student_attendance (
  id uuid primary key default gen_random_uuid(),
  student_identifier text not null,
  session_identifier text not null,
  access_token_hash text not null,
  attended_at timestamptz not null default now(),
  constraint student_attendance_identifier_not_empty
    check (student_identifier <> ''),
  constraint student_attendance_session_not_empty
    check (session_identifier <> ''),
  constraint student_attendance_access_token_hash_length
    check (char_length(access_token_hash) = 64),
  constraint student_attendance_student_session_unique
    unique (student_identifier, session_identifier)
);

alter table public.student_attendance enable row level security;
revoke all on table public.student_attendance from anon, authenticated;

create or replace function public.record_student_attendance(
  p_student_identifier text,
  p_session_identifier text,
  p_access_token text
)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_student_identifier text;
  v_session_identifier text;
  v_inserted_count integer;
begin
  v_student_identifier := pg_catalog.lower(pg_catalog.btrim(p_student_identifier));
  v_session_identifier := pg_catalog.btrim(p_session_identifier);

  if pg_catalog.char_length(v_student_identifier) < 3
    or pg_catalog.char_length(v_student_identifier) > 254
    or pg_catalog.char_length(v_session_identifier) < 1
    or pg_catalog.char_length(v_session_identifier) > 120
    or p_access_token !~ '^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$'
  then
    raise exception using
      errcode = '22023',
      message = 'A valid student identifier, session code, and browser key are required.';
  end if;

  insert into public.student_attendance (
    student_identifier,
    session_identifier,
    access_token_hash
  )
  values (
    v_student_identifier,
    v_session_identifier,
    pg_catalog.encode(
      extensions.digest(pg_catalog.convert_to(p_access_token, 'UTF8'), 'sha256'),
      'hex'
    )
  )
  on conflict (student_identifier, session_identifier) do nothing;

  get diagnostics v_inserted_count = row_count;

  return pg_catalog.jsonb_build_object('recorded', v_inserted_count = 1);
end;
$$;

create or replace function public.get_student_attendance_summary(
  p_student_identifier text,
  p_access_token text
)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_student_identifier text;
  v_access_token_hash text;
  v_summary jsonb;
begin
  v_student_identifier := pg_catalog.lower(pg_catalog.btrim(p_student_identifier));

  if pg_catalog.char_length(v_student_identifier) < 3
    or pg_catalog.char_length(v_student_identifier) > 254
    or p_access_token !~ '^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$'
  then
    raise exception using
      errcode = '22023',
      message = 'A valid student identifier and browser key are required.';
  end if;

  v_access_token_hash := pg_catalog.encode(
    extensions.digest(pg_catalog.convert_to(p_access_token, 'UTF8'), 'sha256'),
    'hex'
  );

  select pg_catalog.jsonb_build_object(
    'total',
    (
      select pg_catalog.count(*)
      from public.student_attendance as attendance
      where attendance.student_identifier = v_student_identifier
        and attendance.access_token_hash = v_access_token_hash
    ),
    'recent',
    coalesce(
      (
        select pg_catalog.jsonb_agg(
          pg_catalog.jsonb_build_object(
            'sessionIdentifier', recent.session_identifier,
            'attendedAt', recent.attended_at
          )
          order by recent.attended_at desc
        )
        from (
          select attendance.session_identifier, attendance.attended_at
          from public.student_attendance as attendance
          where attendance.student_identifier = v_student_identifier
            and attendance.access_token_hash = v_access_token_hash
          order by attendance.attended_at desc
          limit 5
        ) as recent
      ),
      '[]'::jsonb
    )
  )
  into v_summary;

  return v_summary;
end;
$$;

revoke all on function public.record_student_attendance(text, text, text) from public, authenticated;
revoke all on function public.get_student_attendance_summary(text, text) from public, authenticated;
grant execute on function public.record_student_attendance(text, text, text) to anon;
grant execute on function public.get_student_attendance_summary(text, text) to anon;
