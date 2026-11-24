"use client";

import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { apiClient } from "@/lib/api/client";
import { ApiResponse } from "@/lib/api/types";

type DriveFile = { id: string; name: string; createdTime: string; capabilities?: { canDownload?: boolean } };
type Lesson = { _id: string; title: string; course?: { title: string }; module?: { title: string } };
type Job = { _id: string; organizer: string; fileId: string; fileName: string; status: string; error?: string };

export default function RecordingsPage() {
  const client = useQueryClient();
  const [organizer, setOrganizer] = useState("");
  const [lesson, setLesson] = useState("");
  const [pageToken, setPageToken] = useState("");
  const organizers = useQuery({ queryKey: ["recording-organizers"], queryFn: () => apiClient<ApiResponse<string[]>>("/api/v1/recordings/organizers", { requireAuth: true }) });
  const lessons = useQuery({ queryKey: ["recording-lessons"], queryFn: () => apiClient<ApiResponse<Lesson[]>>("/api/v1/recordings/lessons", { requireAuth: true }) });
  const files = useQuery({ queryKey: ["recording-files", organizer, pageToken], enabled: !!organizer, queryFn: () => apiClient<ApiResponse<{ files: DriveFile[]; nextPageToken?: string }>>(`/api/v1/recordings/drive?${new URLSearchParams({ organizer, ...(pageToken ? { pageToken } : {}) })}`, { requireAuth: true }) });
  const jobs = useQuery({ queryKey: ["recording-jobs"], queryFn: () => apiClient<ApiResponse<Job[]>>("/api/v1/recordings/jobs", { requireAuth: true }), refetchInterval: 15000 });
  const publish = useMutation({ mutationFn: (fileId: string) => apiClient("/api/v1/recordings/jobs", { method: "POST", requireAuth: true, body: JSON.stringify({ organizer, fileId, lessonId: lesson }) }), onSuccess: () => client.invalidateQueries({ queryKey: ["recording-jobs"] }) });
  const retry = useMutation({ mutationFn: (id: string) => apiClient(`/api/v1/recordings/jobs/${id}/retry`, { method: "POST", requireAuth: true }), onSuccess: () => client.invalidateQueries({ queryKey: ["recording-jobs"] }) });
  const items = jobs.data?.data ?? [];
  return <div className="space-y-6 pb-8"><DashboardHeader title="Class recordings" subTitle="Choose an organizer and lesson, then publish a recording." />
    <div className="space-y-4 rounded-xl bg-white p-5">
      <p className="text-sm text-gray-600">This list contains MP4 videos accessible in the organizer’s Drive. Check the name and date before publishing.</p>
      <p className="text-sm text-gray-600">The selected lesson must be published and unlocked before students can view its recording.</p>
      <label className="block text-sm font-medium">Organizer<select className="mt-1 block w-full rounded border p-2" value={organizer} onChange={(event) => { setOrganizer(event.target.value); setPageToken(""); }}><option value="">Select an organizer</option>{organizers.data?.data?.map((email) => <option key={email}>{email}</option>)}</select></label>
      {!organizers.isLoading && !organizers.data?.data?.length && <p className="text-sm text-gray-600">No organizers configured. Contact your administrator.</p>}
      <label className="block text-sm font-medium">Lesson<select className="mt-1 block w-full rounded border p-2" value={lesson} onChange={(event) => setLesson(event.target.value)}><option value="">Select a lesson</option>{lessons.data?.data?.map((item) => <option key={item._id} value={item._id}>{item.course?.title ?? "Course"} / {item.module?.title ?? "Module"} / {item.title}</option>)}</select></label>
      {(organizers.isError || lessons.isError || files.isError) && <p role="alert" className="text-sm text-red-600">Could not load recording information. Check the integration settings and try again.</p>}
      {files.isFetching && <p className="text-sm">Loading recordings…</p>}
      {organizer && !files.isFetching && files.data?.data?.files.length === 0 && <p className="text-sm">No MP4 recordings found.</p>}
      <ul className="divide-y">{files.data?.data?.files.map((file) => { const job = items.find((item) => item.organizer === organizer && item.fileId === file.id); return <li key={file.id} className="flex flex-wrap items-center justify-between gap-3 py-3"><div><p className="font-medium">{file.name}</p><p className="text-xs text-gray-500">{new Date(file.createdTime).toLocaleString()}{job ? ` · ${job.status}` : ""}</p></div><button disabled={!lesson || !!job || file.capabilities?.canDownload === false || publish.isPending} onClick={() => publish.mutate(file.id)} className="rounded bg-primary px-3 py-2 text-sm text-white disabled:opacity-50">Publish recording</button></li>; })}</ul>
      {files.data?.data?.nextPageToken && <button className="text-sm text-primary underline" onClick={() => setPageToken(files.data!.data!.nextPageToken!)}>Next page</button>}{pageToken && <button className="ml-4 text-sm text-primary underline" onClick={() => setPageToken("")}>First page</button>}
      {publish.isError && <p role="alert" className="text-sm text-red-600">{publish.error instanceof Error ? publish.error.message : "Could not start publishing."}</p>}
    </div>
    <section className="rounded-xl bg-white p-5"><h2 className="font-semibold">Publishing activity</h2>{jobs.isError && <p role="alert">Could not load publishing activity.</p>}<ul className="divide-y">{items.map((job) => <li key={job._id} className="flex items-center justify-between gap-4 py-3 text-sm"><div><p className="font-medium">{job.fileName}</p><p className="text-gray-500">{job.organizer} · {job.status}</p>{job.error && <p className="text-red-600">{job.error}</p>}</div>{job.status === "failed" && <button onClick={() => retry.mutate(job._id)} disabled={retry.isPending} className="text-primary underline">Retry</button>}</li>)}</ul>{retry.isError && <p role="alert" className="text-red-600">Could not retry the recording.</p>}</section>
  </div>;
}
