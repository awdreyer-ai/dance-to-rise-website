import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Application Received",
  description: "Thank you for applying to Dance to Rise Foundation.",
};

const nextSteps = [
  {
    step: 1,
    title: "Application Assessment",
    description:
      "Your application will be reviewed and scored by our Selection Committee.",
  },
  {
    step: 2,
    title: "Shortlist Notification",
    description:
      "Shortlisted applicants will be contacted for an interview.",
  },
  {
    step: 3,
    title: "Board Approval",
    description:
      "The Board of Directors formally approves the final selection.",
  },
  {
    step: 4,
    title: "Outcome Notification",
    description:
      "All applicants will be notified of outcomes before December 2026.",
  },
];

export default function ThankYouPage({
  searchParams,
}: {
  searchParams: { ref?: string };
}) {
  const refNumber = searchParams?.ref || null;

  return (
    <section className="min-h-screen bg-[#F7F9FC] py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/logo.png"
            alt="Dance to Rise Foundation"
            width={140}
            height={56}
            className="h-14 w-auto"
          />
        </div>

        {/* Success Icon */}
        <div className="w-20 h-20 rounded-full bg-[#28BACC]/10 flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-[#28BACC]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold text-[#2547B2] mb-3">
          Application Received!
        </h1>
        <p className="text-xl text-[#C4305A] font-semibold mb-6">
          Thank you for applying to Dance to Rise Foundation
        </p>

        {/* Body */}
        <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100 mb-8 text-left">
          <p className="text-[#555555] leading-relaxed mb-4">
            We have received your application for the Class of 2027. A confirmation email has been
            sent to the email addresses you provided. Please keep your application reference number
            for your records.
          </p>
          <p className="text-[#555555] leading-relaxed">
            We will contact all applicants with outcomes before December 2026.
          </p>

          {refNumber && (
            <div className="mt-6 p-4 bg-[#F7F9FC] rounded-xl border border-gray-200 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#555555] mb-1">
                Application Reference Number
              </p>
              <p className="font-mono text-lg font-bold text-[#2547B2]">{refNumber}</p>
            </div>
          )}
        </div>

        {/* What Happens Next */}
        <div className="text-left mb-10">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#2547B2] mb-6 text-center">
            What Happens Next
          </h2>
          <div className="space-y-4">
            {nextSteps.map((item) => (
              <div key={item.step} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C4305A] text-white font-bold text-sm flex items-center justify-center">
                  {item.step}
                </div>
                <div className="bg-white rounded-xl p-4 flex-1 border border-gray-100 shadow-sm">
                  <h3 className="font-semibold text-[#1A1A1A] mb-1">{item.title}</h3>
                  <p className="text-[#555555] text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-3 bg-[#2547B2] text-white font-semibold rounded-full hover:bg-[#1d3a8e] transition-colors duration-200"
          >
            Return Home
          </Link>
          <a
            href="#"
            className="px-8 py-3 border-2 border-[#2547B2] text-[#2547B2] font-semibold rounded-full hover:bg-[#2547B2] hover:text-white transition-colors duration-200"
          >
            Follow Us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
