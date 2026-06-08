import type { Metadata } from "next";
import Link from "next/link";
import ApplicationForm from "@/components/forms/ApplicationForm";

export const metadata: Metadata = {
  title: "Apply — Class of 2027",
  description:
    "Apply to Dance to Rise Foundation's Class of 2027 beneficiary programme. Applications close 31 October 2026.",
  openGraph: {
    title: "Apply — Dance to Rise Foundation Class of 2027",
    description: "Applications for the Class of 2027 beneficiary programme are now open. Applications close 31 October 2026.",
    url: "/apply",
    type: "website",
    siteName: "Dance to Rise Foundation",
    images: [{ url: "/logo.png", width: 800, height: 600, alt: "Dance to Rise Foundation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apply — Dance to Rise Foundation Class of 2027",
    description: "Applications for the Class of 2027 beneficiary programme are now open. Applications close 31 October 2026.",
    images: ["/logo.png"],
  },
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

      {/* WHATSAPP SHARE */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <a
            href={`https://api.whatsapp.com/send?text=${encodeURIComponent("Dance to Rise Foundation is supporting talented young DanceSport athletes from disadvantaged backgrounds. Applications for the Class of 2027 are now open. Apply here: https://dancetorise.org.za/apply")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-full hover:bg-[#1daa52] transition-colors duration-200 shadow-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Share with a dancer who needs this
          </a>
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
