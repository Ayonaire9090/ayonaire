import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  linkedinUrl: string;
  githubUrl: string;
  location: string;
  personalWebsite: string;
}

export const emptyContactForm: ContactFormData = {
  fullName: "",
  email: "",
  phone: "",
  linkedinUrl: "",
  githubUrl: "",
  location: "",
  personalWebsite: "",
};

const fields: {
  name: keyof ContactFormData;
  label: string;
  required?: boolean;
  optional?: boolean;
  placeholder: string;
}[] = [
  { name: "fullName", label: "Full Name", required: true, placeholder: "John Doe" },
  { name: "email", label: "Email Address", required: true, placeholder: "john.doe@example.com" },
  { name: "phone", label: "Phone Number", optional: true, placeholder: "+1 234 567 8900" },
  { name: "linkedinUrl", label: "LinkedIn URL", placeholder: "https://www.linkedin.com/in/johndoe" },
  { name: "githubUrl", label: "Github URL", placeholder: "https://github.com/johndoe" },
  { name: "location", label: "Location", placeholder: "City, Country" },
  { name: "personalWebsite", label: "Personal Website", placeholder: "johndoe.com" },
];

export function ResumeContactForm({
  value,
  onChange,
}: {
  value: ContactFormData;
  onChange: (next: ContactFormData) => void;
}) {
  const setField = (name: keyof ContactFormData, fieldValue: string) => {
    onChange({ ...value, [name]: fieldValue });
  };

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Contact</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {fields.map((field) => (
          <div
            key={field.name}
            className={field.name === "personalWebsite" ? "sm:col-span-1" : ""}
          >
            <Label htmlFor={field.name}>
              {field.label}
              {field.required && <span className="text-red-500 ml-0.5">*</span>}
              {field.optional && (
                <span className="text-gray-400 font-normal ml-1">(optional)</span>
              )}
            </Label>
            <Input
              id={field.name}
              placeholder={field.placeholder}
              value={value[field.name]}
              onChange={(e) => setField(field.name, e.target.value)}
              className="mt-1.5"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
