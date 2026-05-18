import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { fullName, email } = body;

    if (!fullName || !email) {
      return NextResponse.json(
        { error: 'Missing fields' },
        { status: 400 }
      );
    }

    const { error } = await supabase.from('registrations').insert([
      {
        full_name: fullName,
        email,
      },
    ]);

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    );
  }
}