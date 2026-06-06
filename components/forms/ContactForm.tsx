"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

interface ContactFormData {
  fullName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

const subjects = [
  "Sponsorship Enquiry",
  "Application Question",
  "Media Enquiry",
  "General Enquiry",
  "Other",
];

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-gray-300 text-[#1A1A1A] bg-white focus:outline-none focus:ring-2 focus:ring-[#2547B2] focus:border-transparent text-sm transition-colors";

const errorClass = "mt-1 text-xs text-[#C4305A]";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ContactFormData>();

  const message = watch("message", "");

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
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
      <div className="text-center py-8">
        <div className="w-16 h-16 rounded-full bg-[#28BACC]/10 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-[#28BACC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#2547B2] mb-2">
          Message Sent!
        </h3>
        <p className="text-[#555555]">We will be in touch within 2 business days.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-[#2547B2] hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      {/* Full Name */}
      <div>
        <label className="block text-sm font-medium text-[#1A1A1A] mb-1">
          Full Name <span className="text-[#C4305A]">*</span>
        </label>
        <input
          {...register("fullName", { required: "Full name is required" })}
          type="text"
          placeholder="Your full name"
          className={`${inputClass} ${errors.fullName ? "border-[#C4305A]" : ""}`}
        />
        {errors.fullName && <p className={errorClass}>{errors.fullName.message}</p>}
      </div>

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
          placeholder="you@example.com"
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

      {/* Subject */}
      <div>
        <label className="block text-sm font-medium text-[#1A1A1A] mb-1">
          Subject <span className="text-[#C4305A]">*</span>
        </label>
        <select
          {...register("subject", { required: "Please select a subject" })}
          className={`${inputClass} ${errors.subject ? "border-[#C4305A]" : ""}`}
        >
          <option value="">Select a subject</option>
          {subjects.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        {errors.subject && <p className={errorClass}>{errors.subject.message}</p>}
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-[#1A1A1A] mb-1">
          Message <span className="text-[#C4305A]">*</span>
        </label>
        <textarea
          {...register("message", { required: "Message is required", maxLength: { value: 1000, message: "Max 1000 characters" } })}
          rows={5}
          placeholder="Your message..."
          className={`${inputClass} resize-none ${errors.message ? "border-[#C4305A]" : ""}`}
        />
        <div className="flex justify-between mt-1">
          {errors.message ? (
            <p className={errorClass}>{errors.message.message}</p>
          ) : <span />}
          <span className={`text-xs ${message.length > 1000 ? "text-[#C4305A]" : "text-[#555555]"}`}>
            {message.length}/1000
          </span>
        </div>
      </div>

      {status === "error" && (
        <p className="text-sm text-[#C4305A] bg-red-50 rounded-lg px-4 py-3">
          Something went wrong. Please try again or email us directly at info@dancetorise.org.za
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-3 bg-[#2547B2] text-white font-semibold rounded-full hover:bg-[#1d3a8e] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
