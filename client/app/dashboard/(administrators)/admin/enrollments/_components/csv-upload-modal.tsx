"use client";

import React, { useRef, useState } from "react";
import { FileText, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppSimpleModal } from "@/components/modals/app-simple-modal";

interface CsvUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (file: File) => void;
}

export const CsvUploadModal = ({
  isOpen,
  onClose,
  onUpload,
}: CsvUploadModalProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (file: File | null) => {
    if (file && file.name.endsWith(".csv")) {
      setSelectedFile(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files?.[0] || null;
    handleFileChange(file);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    handleFileChange(file);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleImport = () => {
    // Temporarily always active for simulation
    onUpload(selectedFile as File);
    setSelectedFile(null);
  };

  const handleClose = () => {
    setSelectedFile(null);
    onClose();
  };

  return (
    <AppSimpleModal
      isOpen={isOpen}
      onClose={handleClose}
      title="Import Students By CSV"
      className="max-w-[520px]"
    >
      <div className="flex flex-col gap-0 mt-1">
        {/* Divider */}
        <div className="w-full h-px bg-gray-200 mb-6" />

        {/* Drop Zone */}
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`flex flex-col items-center justify-center w-full rounded-2xl border-2 border-dashed transition-colors py-12 px-6 cursor-pointer mb-6 ${
            isDragOver
              ? "border-[#F06B30] bg-orange-50/30"
              : "border-gray-200 bg-[#F9F9F9]"
          }`}
          onClick={handleBrowseClick}
        >
          {/* File Icon */}
          <div className="size-14 rounded-full bg-[#F0F0F0] flex items-center justify-center mb-5">
            <FileText className="size-6 text-gray-800" strokeWidth={1.8} />
          </div>

          {/* Selected file name or Select File button */}
          {selectedFile ? (
            <div className="flex items-center gap-2 bg-white rounded-full px-5 py-2 border border-gray-200">
              <span className="text-[14px] text-gray-700 font-medium truncate max-w-[200px]">
                {selectedFile.name}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveFile();
                }}
                className="size-5 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors shrink-0"
              >
                <X className="size-3 text-gray-600" />
              </button>
            </div>
          ) : (
            <Button
              type="button"
              className="bg-[#F06B30] rounded-lg hover:bg-[#F06B30]/90 text-white font-medium h-10 px-8 shadow-none border-0 text-[14.5px]"
            >
              Select File
            </Button>
          )}

          <input
            ref={fileInputRef}
            type="file"
            accept=".csv"
            className="hidden"
            onChange={handleInputChange}
          />
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 mb-5" />

        {/* Bottom Row: Download Sample + Actions */}
        <div className="flex items-center justify-between w-full">
          <span className="text-[14.5px] text-gray-900 font-medium cursor-pointer hover:underline transition-all">
            Download Sample CSV
          </span>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              onClick={handleClose}
              className="h-10 px-6 rounded-lg bg-[#F6F6F6] text-gray-700 border border-gray-200 hover:bg-gray-200 shadow-none font-medium text-[14px]"
            >
              Cancel
            </Button>
            <Button
              onClick={handleImport}
              className="h-10 px-8 rounded-lg shadow-none font-medium text-[14px] bg-[#F06B30] hover:bg-[#F06B30]/90 text-white"
            >
              Import
            </Button>
          </div>
        </div>
      </div>
    </AppSimpleModal>
  );
};
