"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { AppSection } from "@/components/app-section";
import { AppActionButton } from "@/components/app-action-button";
import { CgInfo } from "react-icons/cg";
import { useVerifyCertificate } from "@/hooks/api/use-certificates";

function CertificateVerificationFormContent() {
  const searchParams = useSearchParams();
  const [certificateId, setCertificateId] = useState(searchParams.get("id") ?? "");
  const [submittedId, setSubmittedId] = useState(searchParams.get("id") ?? "");

  const { data, isFetching, isError } = useVerifyCertificate(submittedId);
  const result = data?.data;

  useEffect(() => {
    const idFromUrl = searchParams.get("id");
    if (idFromUrl) {
      setCertificateId(idFromUrl);
      setSubmittedId(idFromUrl);
    }
  }, [searchParams]);

  const handleVerify = () => {
    if (!certificateId.trim()) return;
    setSubmittedId(certificateId.trim());
  };

  return (
    <AppSection variant="gradient">
      <div className=" flex justify-center pb-12 pb:32">
        {/* Form Card */}
        <div className="w-full max-w-[600px] bg-white rounded-2xl shadow-lg p-6 lg:p-10">
          {/* Title */}
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
            Certificate Verification Form
          </h1>

          {/* Input Field */}
          <div className="mb-5">
            <label
              htmlFor="certificate-id"
              className="block text-base  mb-2 font-medium"
            >
              Enter Certificate ID:
            </label>
            <Input
              id="certificate-id"
              type="text"
              value={certificateId}
              onChange={(e) => setCertificateId(e.target.value)}
              placeholder=""
              className="w-full h-14 rounded-xl border-gray-200 bg-white focus:border-primary focus:ring-primary"
            />
          </div>

          {/* Verify Button */}
          <AppActionButton
            onClick={handleVerify}
            disabled={isFetching || !certificateId.trim()}
            className="w-full h-14 rounded-xl text-base font-medium"
          >
            <span className="flex items-center justify-center gap-2">
              {isFetching ? "Verifying..." : "Verify Certificate"}
              {!isFetching && (
                <span className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-white" />
                </span>
              )}
            </span>
          </AppActionButton>

          {/* Verification Result */}
          {submittedId && !isFetching && (
            <div
              className={`mt-6 rounded-xl p-4 lg:p-5 border ${
                isError || !result?.valid
                  ? "bg-red-50 border-red-200"
                  : "bg-green-50 border-green-200"
              }`}
            >
              {isError || !result?.valid ? (
                <div className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1">
                      Certificate Not Found
                    </h3>
                    <p className="text-sm text-gray-600">
                      We couldn&apos;t verify a certificate with ID &ldquo;{submittedId}&rdquo;. Please double-check the ID and try again.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
                  <div className="flex flex-col gap-1">
                    <h3 className="text-base font-semibold text-gray-900">
                      Certificate Verified
                    </h3>
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">{result.student?.name}</span> completed{" "}
                      <span className="font-medium">{result.course?.title}</span>
                    </p>
                    <p className="text-sm text-gray-500">
                      Issued {new Date(result.issuedAt).toLocaleDateString()} · Status: {result.status}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Verification Process Info */}
          <div className="mt-6 bg-[#FFF0E5] rounded-xl p-2 lg:p-5 border border-primary">
            <div className="flex items-start gap-4">
              {/* Clock Icon */}
              <div className="w-8  h-8 bg-primary lg:w-10 lg:h-10 rounded-full border-2 border-primary flex items-center justify-center shrink-0">
                <CgInfo className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
              </div>
              {/* Info Content */}
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  Verification Process
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Once you submit the certificate ID, our system will instantly
                  check our database to confirm the certificate's authenticity,
                  student details, course information, and completion date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppSection>
  );
}

export const CertificateVerificationForm = () => {
  return (
    <Suspense fallback={null}>
      <CertificateVerificationFormContent />
    </Suspense>
  );
};
