"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

interface SponsorFormData {
  fullName: string;
  organisation: string;
  email: string;
  phone?: string;
  interest: string;
  message?: string;
}

const interests = [
  "Founding Partner",
  "Platinum Partner",
  "Gold Partner",
  "Silver Partner",
  "Bronze Partner",
  "Couple Sponsor",
  "Category Partnership",
  "General Enquiry",
];

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-gray-300 text-[#1A1A1A] bg-white focus:outline-none focus:ring-2 focus:ring-[#2547B2] focus:border-transparent text-sm transition-colors";

const errorClass = "mt-1 text-xs text-[#C4305A]";

export default function SponsorEnquiryForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SponsorFormData>();

  const onSubmit = async (data: SponsorFormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/sponsor-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
        <div className="w-16 h-16 rounded-full bg-[#28BACC]/10 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-[#28BACC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#2547B2] mb-2">
          Enquiry Received!
        </h3>
        <p className="text-[#555555]">Thank you for your interest. We will be in touch shortly.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-[#2547B2] hover:underline"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100 space-y-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-[#1A1A1A] mb-1">
            Full Name <span className="text-[#C4305A]">*</span>
          </label>
          <input
            {...register("fullName", { required: "Full name is required" })}
            type="text"
            placeholder="Your name"
            className={`${inputClass} ${errors.fullName ? "border-[#C4305A]" : ""}`}
          />
          {errors.fullName && <p className={errorClass}>{errors.fullName.message}</p>}
        </div>

        {/* Organisation */}
        <div>
          <label className="block text-sm font-medium text-[#1A1A1A] mb-1">
            Organisation <span className="text-[#C4305A]">*</span>
          </label>
          <input
            {...register("organisation", { required: "Organisation is required" })}
            type="text"
            placeholder="Your organisation"
            className={`${inputClass} ${errors.organisation ? "border-[#C4305A]" : ""}`}
          />
          {errors.organisation && <p className={errorClass}>{errors.organisation.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-[#1A1A1A] mb-1">
            Email <span className="text-[#C4305A]">*</span>
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
            })}
            type="email"
            placeholder="you@company.co.za"
            className={`${inputClass} ${errors.email ? "border-[#C4305A]" : ""}`}
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-[#1A1A1A] mb-1">Phone</label>
          <input
            {...register("phone")}
            type="tel"
            placeholder="+27 XX XXX XXXX"
            className={inputClass}
          />
        </div>
      </div>

      {/* Interest */}
      <div>
        <label className="block text-sm font-medium text-[#1A1A1A] mb-1">
          Interested In <span className="text-[#C4305A]">*</span>
        </label>
        <select
          {...register("interest", { required: "Please select your interest" })}
          className={`${inputClass} ${errors.interest ? "border-[#C4305A]" : ""}`}
        >
          <option value="">Select an option</option>
          {interests.map((i) => (
            <option key={i} value={i}>{i}</option>
          ))}
        </select>
        {errors.interest && <p className={errorClass}>{errors.interest.message}</p>}
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-[#1A1A1A] mb-1">Message</label>
        <textarea
          {...register("message")}
          rows={4}
          placeholder="Tell us about your organisation and your interest in partnering with us..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-[#C4305A] bg-red-50 rounded-lg px-4 py-3">
          Something went wrong. Please try again or email us at info@dancetorise.org.za
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-3 bg-[#C4305A] text-white font-semibold rounded-full hover:bg-[#A52848] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending..." : "Send Enquiry"}
      </button>
    </form>
  );
}
