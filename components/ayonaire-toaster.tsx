"use client";

import { Toaster } from "sonner";
import { Check, Info, TriangleAlert, X } from "lucide-react";

export function AyonaireToaster() {
  return <Toaster position="bottom-right" closeButton visibleToasts={4} duration={4500} className="ayonaire-toaster" toastOptions={{ classNames: { toast: "ayonaire-toast", title: "ayonaire-toast-title", description: "ayonaire-toast-description", closeButton: "ayonaire-toast-close", actionButton: "ayonaire-toast-action", cancelButton: "ayonaire-toast-cancel" } }} icons={{
    success: <Check size={17} strokeWidth={2.5} />,
    error: <X size={17} strokeWidth={2.5} />,
    warning: <TriangleAlert size={17} strokeWidth={2} />,
    info: <Info size={17} strokeWidth={2} />,
    loading: <span className="flex gap-0.5" aria-hidden="true"><span className="size-1 animate-pulse rounded-full bg-current motion-reduce:animate-none" /><span className="size-1 animate-pulse rounded-full bg-current motion-reduce:animate-none" /><span className="size-1 animate-pulse rounded-full bg-current motion-reduce:animate-none" /></span>,
  }} />;
}
