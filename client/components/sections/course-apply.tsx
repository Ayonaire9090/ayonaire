"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AppSectionButton } from "../app-section-button";
import { AppHeading } from "../app-heading";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { AppActionButton } from "../app-action-button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { programBenefits } from "@/constants";
import countries from "@/constants/countries.json";
import Link from "next/link";

const workExperienceOptions = [
  "No Experience",
  "Less than 1 year",
  "1-2 years",
  "3-5 years",
  "5+ years",
];

export const CourseApply = () => {
  const [selectedCountry, setSelectedCountry] = useState(
    countries.find((c) => c.code === "NG") || countries[0]
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [workExperience, setWorkExperience] = useState("");
  const [agreedToPolicy, setAgreedToPolicy] = useState(false);

  return (
    <section className="container section-spacing">
      {/* Section Heading */}
      <div className="flex flex-col justify-center items-center gap-3 mb-12">
        <AppSectionButton title="Apply" />
        <AppHeading
          headingLevel="h2"
          title="Apply Now"
          className="text-center w-full lg:max-w-3xl mx-auto text-[27px] lg:text-[44px] leading-tight! pt-4"
          descriptionClassName="text-center lg:w-[70%] mx-auto"
        />
      </div>

      {/* Content Grid - Form and Program Benefits */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
        {/* Form Section */}
        <div className="flex flex-col gap-6">
          {/* Name Field */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-900">Name</label>
            <Input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-12 px-4 border-[#FFE7DE] rounded-xl bg-white"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-900">Email</label>
            <Input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 px-4 border-[#FFE7DE] rounded-xl bg-white"
            />
          </div>

          {/* Phone Number Field */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-900">
              Phone Number
            </label>
            <div className="flex items-stretch border border-[#FFE7DE] rounded-xl overflow-hidden bg-white">
              {/* Country Selector */}
              <Select
                value={selectedCountry.code}
                onValueChange={(code) => {
                  const country = countries.find((c) => c.code === code);
                  if (country) setSelectedCountry(country);
                }}
              >
                <SelectTrigger className="w-auto min-w-[80px] h-full! border-0 border-r border-[#FFE7DE] rounded-none bg-transparent focus:ring-0 gap-1 px-3">
                  <SelectValue>
                    <span className="text-xl">{selectedCountry.emoji}</span>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent className="max-h-[300px]">
                  {countries.map((country) => (
                    <SelectItem key={country.code} value={country.code}>
                      <span className="flex items-center gap-2">
                        <span className="text-lg">{country.emoji}</span>
                        <span className="text-sm">{country.name}</span>
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {/* Phone Input */}
              <Input
                type="tel"
                placeholder="Enter Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="flex-1 h-12 border-0 rounded-none focus-visible:ring-0 focus-visible:border-0"
              />
            </div>
          </div>

          {/* Work Experience Field */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-900">
              Work Experience
            </label>
            <Select value={workExperience} onValueChange={setWorkExperience}>
              <SelectTrigger className="w-full h-12! px-4 border-[#FFE7DE] rounded-xl bg-white">
                <SelectValue placeholder="Enter Work Experience" />
              </SelectTrigger>
              <SelectContent>
                {workExperienceOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Privacy Policy Checkbox */}
          <div className="flex items-center gap-2">
            <Checkbox
              id="privacy-policy"
              checked={agreedToPolicy}
              onCheckedChange={(checked) => setAgreedToPolicy(checked === true)}
              className="border-gray-300"
            />
            <label
              htmlFor="privacy-policy"
              className="text-xs lg:text-sm text-gray-600"
            >
              By Providing Your Contact Details, You Agree To Our{" "}
              <Link href="/privacy-policy" className="text-primary font-medium">
                Privacy Policy
              </Link>
            </label>
          </div>

          {/* Proceed Button */}
          <AppActionButton
            variant="fading"
            className="w-full py-6! lg:py-8! text-base lg:text-lg font-semibold rounded-xl! mt-2"
          >
            Proceed
          </AppActionButton>
        </div>

        {/* Program Benefits Section */}
        <div className="bg-white border border-[#FFE7DE] rounded-2xl lg:rounded-3xl p-6 lg:p-8 h-fit">
          <h3 className="text-xl lg:text-2xl font-bold mb-6">
            Program Benefits
          </h3>

          <div className="flex flex-col gap-5 lg:gap-6">
            {programBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <Image
                  src="/assets/icons/round-tick.svg"
                  alt="check"
                  width={28}
                  height={28}
                  className="shrink-0 mt-0.5"
                />
                <span className="text-sm lg:text-base text-gray-700 font-medium capitalize">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
