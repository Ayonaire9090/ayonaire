"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  CheckCircle2,
  Clock3,
  GraduationCap,
  LoaderCircle,
  LockKeyhole,
} from "lucide-react";
import { FormEvent, useState } from "react";
import { exo, melodrama } from "@/app/fonts";
import { getSupabaseBrowserClient } from "@/lib/supabase-browser";
import styles from "./attendance.module.css";

type AttendanceRecord = {
  sessionIdentifier: string;
  attendedAt: string;
};

type AttendanceSummary = {
  total: number;
  recent: AttendanceRecord[];
};

type RecordResult = {
  recorded: boolean;
};

function isAttendanceSummary(value: unknown): value is AttendanceSummary {
  if (typeof value !== "object" || value === null) return false;
  const summary = value as Record<string, unknown>;
  return (
    typeof summary.total === "number" &&
    Array.isArray(summary.recent) &&
    summary.recent.every(
      (record: unknown) =>
        typeof record === "object" &&
        record !== null &&
        typeof (record as Record<string, unknown>).sessionIdentifier ===
          "string" &&
        typeof (record as Record<string, unknown>).attendedAt === "string",
    )
  );
}

function isRecordResult(value: unknown): value is RecordResult {
  return (
    typeof value === "object" &&
    value !== null &&
    typeof (value as Record<string, unknown>).recorded === "boolean"
  );
}

async function getAccessToken(studentIdentifier: string) {
  if (!window.crypto?.subtle || !window.crypto.randomUUID) {
    throw new Error(
      "Secure browser storage is unavailable. Open this page over HTTPS and try again.",
    );
  }

  const identifierBytes = new TextEncoder().encode(studentIdentifier);
  const digest = await window.crypto.subtle.digest("SHA-256", identifierBytes);
  const identifierKey = Array.from(new Uint8Array(digest), (byte) =>
    byte.toString(16).padStart(2, "0"),
  ).join("");
  const storageKey = `ayonaire.attendance.access.v1:${identifierKey}`;
  const savedToken = window.localStorage.getItem(storageKey);

  if (savedToken) {
    if (
      !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
        savedToken,
      )
    ) {
      throw new Error(
        "The private attendance key in this browser is invalid. Clear this site's attendance storage and try again.",
      );
    }
    return savedToken;
  }

  const newToken = window.crypto.randomUUID();
  window.localStorage.setItem(storageKey, newToken);
  return newToken;
}

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return "Something went wrong. Please try again.";
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export default function AttendanceDashboard() {
  const [studentIdentifier, setStudentIdentifier] = useState("");
  const [sessionIdentifier, setSessionIdentifier] = useState("");
  const [summary, setSummary] = useState<AttendanceSummary | null>(null);
  const [isLoadingHistory, setIsLoadingHistory] = useState(false);
  const [isMarkingAttendance, setIsMarkingAttendance] = useState(false);
  const [historyError, setHistoryError] = useState("");
  const [notice, setNotice] = useState<{
    kind: "success" | "info" | "error";
    message: string;
  } | null>(null);

  const normalizedIdentifier = studentIdentifier.trim().toLowerCase();
  const normalizedSessionIdentifier = sessionIdentifier.trim();

  async function loadHistory(identifier: string) {
    setIsLoadingHistory(true);
    setHistoryError("");

    try {
      const accessToken = await getAccessToken(identifier);
      const { data, error } = await getSupabaseBrowserClient().rpc(
        "get_student_attendance_summary",
        {
          p_student_identifier: identifier,
          p_access_token: accessToken,
        },
      );

      if (error) throw error;
      if (!isAttendanceSummary(data)) {
        throw new Error("Attendance history returned an unexpected response.");
      }
      setSummary(data);
    } catch (error) {
      setSummary(null);
      setHistoryError(getErrorMessage(error));
    } finally {
      setIsLoadingHistory(false);
    }
  }

  async function handleMarkAttendance(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!normalizedIdentifier || !normalizedSessionIdentifier) return;

    setIsMarkingAttendance(true);
    setNotice(null);

    try {
      const accessToken = await getAccessToken(normalizedIdentifier);
      const { data, error } = await getSupabaseBrowserClient().rpc(
        "record_student_attendance",
        {
          p_student_identifier: normalizedIdentifier,
          p_session_identifier: normalizedSessionIdentifier,
          p_access_token: accessToken,
        },
      );

      if (error) throw error;
      if (!isRecordResult(data)) {
        throw new Error("Attendance could not be confirmed. Please try again.");
      }

      setNotice(
        data.recorded
          ? {
              kind: "success",
              message: "You're all checked in. Your attendance has been saved.",
            }
          : {
              kind: "info",
              message:
                "This student and session combination is already marked. Attendance history stays private to the browser that recorded it.",
            },
      );

      await loadHistory(normalizedIdentifier);
    } catch (error) {
      setNotice({ kind: "error", message: getErrorMessage(error) });
    } finally {
      setIsMarkingAttendance(false);
    }
  }

  function handleIdentifierChange(value: string) {
    setStudentIdentifier(value);
    setSummary(null);
    setHistoryError("");
    setNotice(null);
  }

  return (
    <main className={`${styles.page} ${exo.className}`}>
      <div className={styles.shell}>
        <header className={styles.topbar}>
          <Link href="/" className={styles.brand} aria-label="Ayonaire home">
            <Image
              src="/assets/logos/full-logo-dark.svg"
              alt="Ayonaire"
              width={152}
              height={40}
              priority
            />
          </Link>
          <span className={styles.pageLabel}>STUDENT ATTENDANCE</span>
          <Link href="/" className={styles.backLink}>
            Back to Ayonaire <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </header>

        <section className={styles.hero} aria-labelledby="page-title">
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>
              <GraduationCap size={16} aria-hidden="true" />
              A LITTLE CHECK-IN AFTER CLASS
            </span>
            <h1 id="page-title" className={melodrama.className}>
              Nice work today.
              <br />
              <span>Let&apos;s mark you present.</span>
            </h1>
            <p>
              Just finished your Google Meet class? Confirm your attendance
              below and keep your learning record up to date.
            </p>
          </div>
          <div className={styles.heroReminder}>
            <span className={styles.reminderIcon}>
              <Clock3 size={18} aria-hidden="true" />
            </span>
            <span>Take a moment to check in before you go.</span>
          </div>
        </section>

        <section className={styles.contentGrid} aria-label="Attendance">
          <div className={styles.checkInCard}>
            <div className={styles.cardHeading}>
              <div>
                <span className={styles.sectionLabel}>QUICK CHECK-IN</span>
                <h2>Mark your attendance</h2>
                <p>Enter your student ID and the code your instructor shared.</p>
              </div>
              <span className={styles.cardIcon}>
                <CheckCircle2 size={21} aria-hidden="true" />
              </span>
            </div>

            <form onSubmit={handleMarkAttendance} className={styles.form}>
              <label className={styles.field}>
                <span>Student email or ID</span>
                <input
                  autoComplete="email"
                  name="studentIdentifier"
                  onChange={(event) => handleIdentifierChange(event.target.value)}
                  placeholder="Your student email or ID"
                  required
                  value={studentIdentifier}
                />
              </label>

              <label className={styles.field}>
                <span>Class or session code</span>
                <input
                  autoComplete="off"
                  name="sessionIdentifier"
                  onChange={(event) => {
                    setSessionIdentifier(event.target.value);
                    setNotice(null);
                  }}
                  placeholder="Class or session code"
                  required
                  value={sessionIdentifier}
                />
              </label>

              <button
                className={styles.primaryButton}
                disabled={
                  isMarkingAttendance ||
                  !normalizedIdentifier ||
                  !normalizedSessionIdentifier
                }
                type="submit"
              >
                {isMarkingAttendance ? (
                  <>
                    <LoaderCircle
                      className={styles.spinner}
                      size={18}
                      aria-hidden="true"
                    />
                    Saving attendance…
                  </>
                ) : (
                  <>
                    Mark Attendance
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </>
                )}
              </button>
            </form>

            {notice && (
              <div
                className={`${styles.notice} ${styles[notice.kind]}`}
                role={notice.kind === "error" ? "alert" : "status"}
              >
                {notice.kind === "success" ? (
                  <CheckCircle2 size={19} aria-hidden="true" />
                ) : notice.kind === "info" ? (
                  <Clock3 size={19} aria-hidden="true" />
                ) : (
                  <span className={styles.errorMark} aria-hidden="true">
                    !
                  </span>
                )}
                <span>{notice.message}</span>
              </div>
            )}

            <p className={styles.privacyHint}>
              <LockKeyhole size={15} aria-hidden="true" />
              Your attendance history stays private to this browser.
            </p>
          </div>

          <aside className={styles.overviewCard} aria-labelledby="overview-title">
            <div className={styles.overviewHeading}>
              <div>
                <span className={styles.sectionLabel}>YOUR PROGRESS</span>
                <h2 id="overview-title">Your attendance</h2>
              </div>
              <span className={styles.overviewIcon}>
                <CalendarDays size={19} aria-hidden="true" />
              </span>
            </div>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <span>Classes attended</span>
                <strong>
                  {isLoadingHistory ? (
                    <span className={styles.skeleton} aria-label="Loading" />
                  ) : summary ? (
                    summary.total
                  ) : (
                    "—"
                  )}
                </strong>
              </div>
              <div className={styles.stat}>
                <span>Most recent check-in</span>
                <strong className={styles.lastMarked}>
                  {isLoadingHistory ? (
                    <span className={styles.skeleton} aria-label="Loading" />
                  ) : summary?.recent[0] ? (
                    formatDate(summary.recent[0].attendedAt)
                  ) : (
                    "—"
                  )}
                </strong>
              </div>
            </div>

            <div className={styles.historyHeading}>
              <h3>Recent check-ins</h3>
              <button
                className={styles.textButton}
                disabled={!normalizedIdentifier || isLoadingHistory}
                onClick={() => void loadHistory(normalizedIdentifier)}
                type="button"
              >
                {isLoadingHistory ? (
                  <>
                    <LoaderCircle
                      className={styles.spinner}
                      size={14}
                      aria-hidden="true"
                    />
                    Loading
                  </>
                ) : (
                  "Refresh"
                )}
              </button>
            </div>

            {historyError ? (
              <div className={styles.emptyState} role="alert">
                <p>{historyError}</p>
              </div>
            ) : isLoadingHistory ? (
              <div className={styles.loadingState} aria-live="polite">
                <LoaderCircle
                  className={styles.spinner}
                  size={18}
                  aria-hidden="true"
                />
                Loading your attendance…
              </div>
            ) : summary && summary.recent.length > 0 ? (
              <ul className={styles.historyList}>
                {summary.recent.map((record) => (
                  <li
                    className={styles.historyItem}
                    key={`${record.sessionIdentifier}-${record.attendedAt}`}
                  >
                    <span className={styles.historyCheck}>
                      <Check size={14} aria-hidden="true" />
                    </span>
                    <span className={styles.historyDetails}>
                      <strong>{record.sessionIdentifier}</strong>
                      <span>{formatDate(record.attendedAt)}</span>
                    </span>
                    <span className={styles.presentLabel}>Present</span>
                  </li>
                ))}
              </ul>
            ) : summary ? (
              <div className={styles.emptyState}>
                <span className={styles.emptyIcon}>
                  <CalendarDays size={20} aria-hidden="true" />
                </span>
                <p>No attendance yet. Your check-ins will appear here.</p>
              </div>
            ) : (
              <div className={styles.emptyState}>
                <span className={styles.emptyIcon}>
                  <LockKeyhole size={20} aria-hidden="true" />
                </span>
                <p>
                  Enter your student email or ID, then mark attendance or
                  refresh to see your history.
                </p>
              </div>
            )}

            <div className={styles.identityNote}>
              Your student ID helps label your record. Since sign-in isn&apos;t
              required, it doesn&apos;t verify identity; your private history key
              stays in this browser.
            </div>
          </aside>
        </section>

        <footer className={styles.footer}>
          <span>Keep showing up for your future.</span>
          <span>© {new Date().getFullYear()} Ayonaire</span>
        </footer>
      </div>
    </main>
  );
}
