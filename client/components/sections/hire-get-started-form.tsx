"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Link from "next/link";
import { AppActionButton } from "../app-action-button";
import countries from "@/constants/countries.json";

export const HireGetStartesForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    country: "",
    talentType: "",
    hiringVolume: "",
    hiringObjective: "",
    acceptTerms: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, acceptTerms: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="w-full lg:max-w-[65%] mx-auto mt-8">
      <div className="bg-white rounded-2xl p-6 lg:p-10 shadow-sm border border-gray-100">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Business Information Header */}
          <h3 className="text-xl lg:text-2xl font-semibold text-gray-900">
            Business Information
          </h3>

          {/* Official Email */}
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Official Email <span className="text-primary">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your@company.com"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="bg-[#FCFAF8] border-[#E7E2DA] h-12 rounded-lg text-gray-900 placeholder:text-gray-400"
            />
            <p className="text-xs text-gray-500">
              Your most active email for long-term engagement
            </p>
          </div>

          {/* First Name & Last Name Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label
                htmlFor="firstName"
                className="text-sm font-medium text-gray-700"
              >
                First Name <span className="text-primary">*</span>
              </Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="John"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="bg-[#FCFAF8] border-[#E7E2DA] h-12 rounded-lg text-gray-900 placeholder:text-gray-400"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="lastName"
                className="text-sm font-medium text-gray-700"
              >
                Last Name <span className="text-primary">*</span>
              </Label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="bg-[#FCFAF8] border-[#E7E2DA] h-12 rounded-lg text-gray-900 placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Phone Number & Country Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label
                htmlFor="phoneNumber"
                className="text-sm font-medium text-gray-700"
              >
                Phone Number <span className="text-primary">*</span>
              </Label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                placeholder="+234 800 000 0000"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
                className="bg-[#FCFAF8] border-[#E7E2DA] h-12 rounded-lg text-gray-900 placeholder:text-gray-400"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="country"
                className="text-sm font-medium text-gray-700"
              >
                Country of Presence
              </Label>
              <Select
                value={formData.country}
                onValueChange={(value) => handleSelectChange("country", value)}
              >
                <SelectTrigger className="bg-[#FCFAF8] border-[#E7E2DA] h-12! rounded-lg w-full text-gray-900">
                  <SelectValue placeholder="Nigeria" />
                </SelectTrigger>
                <SelectContent className="max-h-[300px]">
                  {countries.map((country) => (
                    <SelectItem key={country.code} value={country.code}>
                      {country.emoji} {country.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Hiring for: Select type of talent */}
          <div className="space-y-2">
            <Label
              htmlFor="talentType"
              className="text-sm font-medium text-gray-700"
            >
              Hiring for: Select type of talent
            </Label>
            <Select
              value={formData.talentType}
              onValueChange={(value) => handleSelectChange("talentType", value)}
            >
              <SelectTrigger className="bg-[#FCFAF8] border-[#E7E2DA] h-12 rounded-lg w-full text-gray-900">
                <SelectValue placeholder="Select talent type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="data-analyst">Data Analyst</SelectItem>
                <SelectItem value="data-scientist">Data Scientist</SelectItem>
                <SelectItem value="data-engineer">Data Engineer</SelectItem>
                <SelectItem value="ai-engineer">AI/ML Engineer</SelectItem>
                <SelectItem value="software-engineer">
                  Software Engineer
                </SelectItem>
                <SelectItem value="product-manager">Product Manager</SelectItem>
                <SelectItem value="ux-designer">UX Designer</SelectItem>
                <SelectItem value="digital-marketer">
                  Digital Marketer
                </SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* How many candidates do you need? */}
          <div className="space-y-2">
            <Label
              htmlFor="hiringVolume"
              className="text-sm font-medium text-gray-700"
            >
              How many candidates do you need?
            </Label>
            <Select
              value={formData.hiringVolume}
              onValueChange={(value) =>
                handleSelectChange("hiringVolume", value)
              }
            >
              <SelectTrigger className="bg-[#FCFAF8] border-[#E7E2DA] h-12 rounded-lg w-full text-gray-900">
                <SelectValue placeholder="Select hiring volume" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-5">1 - 5 candidates</SelectItem>
                <SelectItem value="6-10">6 - 10 candidates</SelectItem>
                <SelectItem value="11-20">11 - 20 candidates</SelectItem>
                <SelectItem value="21-50">21 - 50 candidates</SelectItem>
                <SelectItem value="50+">50+ candidates</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Hiring Objective */}
          <div className="space-y-2">
            <Label
              htmlFor="hiringObjective"
              className="text-sm font-medium text-gray-700"
            >
              Hiring Objective
            </Label>
            <Textarea
              id="hiringObjective"
              name="hiringObjective"
              placeholder="Tell us what you want to achieve with Ayonaire Hire..."
              value={formData.hiringObjective}
              onChange={handleInputChange}
              className="bg-[#FCFAF8] border-[#E7E2DA] rounded-lg min-h-[120px] resize-none text-gray-900 placeholder:text-gray-400"
            />
          </div>

          {/* Terms of Service Checkbox */}
          <div className="flex items-center gap-3 pt-2">
            <Checkbox
              id="acceptTerms"
              checked={formData.acceptTerms}
              onCheckedChange={handleCheckboxChange}
              className="border-primary data-[state=checked]:bg-primary data-[state=checked]:border-primary h-5 w-5 rounded-full"
            />
            <Label
              htmlFor="acceptTerms"
              className="text-sm text-gray-700 font-normal cursor-pointer"
            >
              I accept the{" "}
              <Link
                href="/terms-of-service"
                className="text-primary hover:underline font-medium"
              >
                Ayonaire Terms of Service
              </Link>
            </Label>
          </div>

          {/* Submit Button */}
          <AppActionButton
            variant="fading"
            className="w-full py-6 px-8 text-[16px] rounded-lg lg:rounded-xl hover:bg-primary transition-all ease-in-out duration-300 cursor-pointer group"
          >
            <p>Start Hiring</p>
            <span className="bg-white p-1 lg:p-2 rounded-lg group-hover:ml-2 transition-all ease-in-out duration-300">
              <ArrowRight size={25} className="text-primary  rounded" />
            </span>
          </AppActionButton>
        </form>
      </div>
    </div>
  );
};
