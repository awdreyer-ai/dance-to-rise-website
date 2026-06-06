import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Beneficiary Programme",
  description:
    "Learn about the Dance to Rise Foundation Beneficiary Programme — what we cover, who can apply, and our selection process.",
};

const covers = [
  {
    color: "bg-[#C4305A]",
    title: "Competition Entry Fees",
    description: "Entry fees and registration costs for approved competitions",
  },
  {
    color: "bg-[#2547B2]",
    title: "Transport Contribution",
    description: "A financial contribution toward transport costs arranged by the family",
  },
  {
    color: "bg-[#28BACC]",
    title: "Competition-Day Meals",
    description: "Meals and refreshments on competition days",
  },
  {
    color: "bg-[#CC9438]",
    title: "Dance Shoes",
    description: "Dance shoes and emergency equipment replacement",
  },
];

const eligibility = [
  "Under 18 years of age at time of application",
  "Actively competing in Ballroom and Latin-American Dance",
  "Demonstrated genuine financial need",
  "Committed to training, development, and representing the Foundation with pride",
  "Parent or legal guardian support and consent",
  "Active with any recognised dance club, studio, association, or federation",
];

const selectionSteps = [
  {
    step: 1,
    title: "Apply",
    description: "Submit your application during the open application period",
  },
  {
    step: 2,
    title: "Assessment",
    description:
      "Applications are scored on financial need (30%), commitment (25%), potential (20%), motivation letter (15%), and coach recommendation (10%)",
  },
  {
    step: 3,
    title: "Interview",
    description: "Shortlisted couples are invited for an interview with the Selection Committee",
  },
  {
    step: 4,
    title: "Board Approval",
    description: "The Board of Directors formally approves the final selection",
  },
  {
    step: 5,
    title: "Welcome",
    description:
      "Selected couples are announced as the Class of 2027 and welcomed into the programme",
  },
];

export default function ProgrammePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#C4305A] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold text-white animate-fade-in">
            The Beneficiary Programme
          </h1>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2547B2] mb-6">
            Programme Overview
          </h2>
          <p className="text-[#555555] text-lg leading-relaxed">
            Each year, Dance to Rise Foundation selects five talented Ballroom and Latin-American
            Dance couples to support throughout the competitive season. Support is provided for
            competition entry fees, transport cost contributions, meals, and essential equipment —
            removing the financial barriers that prevent talented athletes from competing.
          </p>
        </div>
      </section>

      {/* WHAT WE COVER */}
      <section className="py-16 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-bold text-[#2547B2]">
              What We Cover
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {covers.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
              >
                <div className={`${item.color} h-2`} />
                <div className="p-6">
                  <h3 className="font-[family-name:var(--font-playfair)] font-bold text-lg text-[#1A1A1A] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#555555] text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO CAN APPLY */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-bold text-[#2547B2] mb-8">
            Who Can Apply
          </h2>
          <ul className="space-y-4">
            {eligibility.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#28BACC]/10 flex items-center justify-center mt-0.5">
                  <svg
                    className="w-4 h-4 text-[#28BACC]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-[#1A1A1A] text-base leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 p-5 bg-[#F7F9FC] rounded-xl border border-gray-200">
            <p className="text-[#555555] text-sm italic">
              <strong className="text-[#1A1A1A]">Note:</strong> The Foundation supports athletes from
              all organisations. We are politically neutral and athlete-first in all decisions.
            </p>
          </div>
        </div>
      </section>

      {/* SELECTION PROCESS */}
      <section className="py-16 bg-[#F7F9FC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-bold text-[#2547B2]">
              Selection Process
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 hidden sm:block" />
            <div className="space-y-8">
              {selectionSteps.map((item) => (
                <div key={item.step} className="flex gap-6 sm:gap-8 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#C4305A] text-white font-bold text-lg flex items-center justify-center z-10">
                    {item.step}
                  </div>
                  <div className="bg-white rounded-2xl p-6 flex-1 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                    <h3 className="font-[family-name:var(--font-playfair)] font-bold text-lg text-[#1A1A1A] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#555555] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-bold text-[#2547B2] mb-4">
            Applications for the Class of 2027 Are Now Open
          </h2>
          <p className="text-[#555555] text-lg mb-8">
            Applications close <strong>31 October 2026.</strong>
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center px-10 py-4 bg-[#C4305A] text-white font-semibold rounded-full hover:bg-[#A52848] transition-colors duration-200 text-lg"
          >
            Apply Now →
          </Link>
          <div className="mt-10 pt-8 border-t border-gray-200">
            <p className="text-[#555555] mb-4">
              Not ready yet? Join our mailing list to be notified when future applications open.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-full border border-gray-300 text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#28BACC] text-sm"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#28BACC] text-white font-semibold rounded-full hover:bg-[#1F98A8] transition-colors duration-200 text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
