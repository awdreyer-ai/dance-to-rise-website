import type { Metadata } from "next";
import Link from "next/link";
import ApplicationForm from "@/components/forms/ApplicationForm";

export const metadata: Metadata = {
  title: "Apply — Class of 2027",
  description:
    "Apply to Dance to Rise Foundation's Class of 2027 beneficiary programme. Applications close 31 October 2026.",
};

export default function ApplyPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#28BACC] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold text-white animate-fade-in">
            Apply — Class of 2027
          </h1>
          <p className="mt-4 text-lg text-white/85 max-w-2xl mx-auto animate-fade-in-delay">
            Applications close <strong>31 October 2026.</strong>
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-10 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F7F9FC] rounded-2xl p-6 border border-gray-200 space-y-4">
            <p className="text-[#1A1A1A] leading-relaxed">
              Thank you for your interest in Dance to Rise Foundation. Please complete all sections
              of this application carefully. Incomplete applications may not be considered.
            </p>
            <div className="flex items-start gap-3 p-4 bg-[#28BACC]/10 rounded-xl border border-[#28BACC]/20">
              <svg
                className="w-5 h-5 text-[#28BACC] flex-shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-[#555555]">
                <strong className="text-[#1A1A1A]">POPIA Notice:</strong> Your personal information
                is collected in accordance with POPIA and will only be used for programme
                administration and beneficiary selection.{" "}
                <Link href="/privacy" className="text-[#2547B2] hover:underline">
                  View our Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="py-8 pb-20 bg-[#F7F9FC]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <ApplicationForm />
        </div>
      </section>
    </>
  );
}
