"use client";

import { useState } from "react";
import { toast } from "sonner";
import ReactMarkdown from "react-markdown";
import { Copy, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export interface AIToolField {
  name: string;
  label: string;
  type: "text" | "textarea" | "tags";
  placeholder?: string;
  required?: boolean;
}

interface CareerAIToolCardProps {
  title: string;
  description: string;
  fields: AIToolField[];
  buttonLabel?: string;
  // Returns the generated markdown/plain text. Response wrapping differs
  // across career endpoints (some return { generatedText } directly, others
  // { data: { generatedText } }), so callers extract it themselves.
  onGenerate: (values: Record<string, string | string[]>) => Promise<string>;
}

export function CareerAIToolCard({
  title,
  description,
  fields,
  buttonLabel = "Generate",
  onGenerate,
}: CareerAIToolCardProps) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const setField = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const missingRequired = fields.find(
      (f) => f.required && !values[f.name]?.trim(),
    );
    if (missingRequired) {
      toast.error(`${missingRequired.label} is required`);
      return;
    }

    const payload: Record<string, string | string[]> = {};
    fields.forEach((f) => {
      const raw = values[f.name]?.trim();
      if (!raw) return;
      payload[f.name] =
        f.type === "tags"
          ? raw.split(",").map((s) => s.trim()).filter(Boolean)
          : raw;
    });

    setIsLoading(true);
    setResult(null);
    try {
      const generatedText = await onGenerate(payload);
      setResult(generatedText);
    } catch (error: any) {
      toast.error(error?.message || "Failed to generate. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (!result) return;
    navigator.clipboard.writeText(result);
    toast.success("Copied to clipboard");
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 md:p-6 flex flex-col gap-5">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {fields.map((field) => (
          <div key={field.name} className="flex flex-col gap-1.5">
            <Label htmlFor={field.name}>
              {field.label}
              {field.required && <span className="text-red-500 ml-0.5">*</span>}
            </Label>
            {field.type === "textarea" ? (
              <Textarea
                id={field.name}
                placeholder={field.placeholder}
                value={values[field.name] ?? ""}
                onChange={(e) => setField(field.name, e.target.value)}
              />
            ) : (
              <Input
                id={field.name}
                placeholder={
                  field.type === "tags"
                    ? field.placeholder ?? "Comma-separated, e.g. React, Node.js"
                    : field.placeholder
                }
                value={values[field.name] ?? ""}
                onChange={(e) => setField(field.name, e.target.value)}
              />
            )}
          </div>
        ))}

        <Button
          type="submit"
          disabled={isLoading}
          className="self-start bg-[#F86432] hover:bg-[#F86432]/90 text-white gap-2"
        >
          <Sparkles className="size-4" />
          {isLoading ? "Generating..." : buttonLabel}
        </Button>
      </form>

      {isLoading && (
        <div className="flex items-center justify-center py-8">
          <div className="w-6 h-6 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {result && !isLoading && (
        <div className="bg-[#F8F9FA] rounded-xl p-4 relative">
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 p-1.5 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 text-gray-500"
            aria-label="Copy result"
          >
            <Copy className="size-4" />
          </button>
          <div className="prose prose-sm max-w-none pr-8">
            <ReactMarkdown>{result}</ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
}
