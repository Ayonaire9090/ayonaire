"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Toaster } from "sonner";
import { Check, Info, TriangleAlert, X, LoaderCircle } from "lucide-react";
import type { ReactNode } from "react";

function ToastIcon({ children, loading = false }: { children: ReactNode; loading?: boolean }) {
  const reduceMotion = useReducedMotion();
  return <motion.span className="ayonaire-toast-symbol" initial={reduceMotion ? false : { scale: 0.65, rotate: -12, opacity: 0 }} animate={{ scale: 1, rotate: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 400, damping: 22 }}>
    <span className={loading ? "ayonaire-toast-spinner" : undefined}>{children}</span>
  </motion.span>;
}

export function AyonaireToaster() {
  return <Toaster position="bottom-right" closeButton expand visibleToasts={4} duration={4500} className="ayonaire-toaster" toastOptions={{ classNames: { toast: "ayonaire-toast", title: "ayonaire-toast-title", description: "ayonaire-toast-description", closeButton: "ayonaire-toast-close", actionButton: "ayonaire-toast-action", cancelButton: "ayonaire-toast-cancel" } }} icons={{
    success: <ToastIcon><Check size={18} strokeWidth={2.5} /></ToastIcon>,
    error: <ToastIcon><X size={18} strokeWidth={2.5} /></ToastIcon>,
    warning: <ToastIcon><TriangleAlert size={18} strokeWidth={2} /></ToastIcon>,
    info: <ToastIcon><Info size={18} strokeWidth={2} /></ToastIcon>,
    loading: <ToastIcon loading><LoaderCircle size={18} strokeWidth={2} /></ToastIcon>,
  }} />;
}
