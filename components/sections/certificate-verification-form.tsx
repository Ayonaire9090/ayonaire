"use client";

import { useState } from "react";
import { ArrowRight, Clock, Info } from "lucide-react";
import { Input } from "@/components/ui/input";
import { AppSection } from "@/components/app-section";
import { AppActionButton } from "@/components/app-action-button";
import { CgInfo } from "react-icons/cg";

export const CertificateVerificationForm = () => {
  const [certificateId, setCertificateId] = useState("");

  const handleVerify = () => {
    // Handle verification logic here
    console.log("Verifying certificate:", certificateId);
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
            className="w-full h-14 rounded-xl text-base font-medium"
          >
            <span className="flex items-center justify-center gap-2">
              Verify Certificate
              <span className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-white" />
              </span>
            </span>
          </AppActionButton>

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
};
