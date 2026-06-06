import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dance to Rise Foundation — Talent Should Never Be Limited by Circumstance",
  description:
    "Dance to Rise Foundation supports talented young Ballroom and Latin-American DanceSport athletes from disadvantaged backgrounds in South Africa.",
};

const stats = [
  { value: "R10,000+", label: "Average annual cost per competing couple" },
  { value: "Every Year", label: "Talented athletes leave the sport due to cost" },
  { value: "5 Couples", label: "Supported in our inaugural Class of 2027" },
];

const steps = [
  {
    number: "01",
    title: "Apply",
    description:
      "Talented couples under 18 apply through our annual open application process.",
  },
  {
    number: "02",
    title: "Selected",
    description:
      "An independent Selection Committee scores every application fairly and transparently.",
  },
  {
    number: "03",
    title: "Supported",
    description:
      "Selected couples receive financial support for competition participation all year.",
  },
];

const whatWeDo = [
  "Competition entry fees and registration",
  "Transport to and from competitions",
  "Competition-day meals and refreshments",
  "Dance shoes and essential equipment",
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white py-16 lg:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8 animate-fade-in">
            <Image
              src="/logo.png"
              alt="Dance to Rise Foundation"
              width={280}
              height={280}
              className="h-44 sm:h-52 lg:h-64 w-auto drop-shadow-md"
              priority
            />
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#1A3578] leading-tight animate-fade-in">
            Talent Should Never Be Limited by Circumstance
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#555555] max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
            Dance to Rise Foundation supports talented young Ballroom and
            Latin-American DanceSport athletes from disadvantaged backgrounds —
            so they can compete, grow, and rise.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center animate-fade-in-delay-2">
            <Link
              href="/apply"
              className="px-8 py-4 bg-[#C4305A] text-white font-semibold rounded-full hover:bg-[#A52848] transition-colors duration-200 text-base"
            >
              Apply Now
            </Link>
            <Link
              href="/sponsors"
              className="px-8 py-4 border-2 border-[#1A3578] text-[#1A3578] font-semibold rounded-full hover:bg-[#1A3578] hover:text-white transition-colors duration-200 text-base"
            >
              Become a Sponsor
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="bg-[#F7F9FC] rounded-2xl p-8 text-center border border-gray-100 hover:shadow-md transition-shadow duration-200"
              >
                <div className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold text-[#C4305A] mb-2">
                  {stat.value}
                </div>
                <div className="text-[#555555] text-sm lg:text-base leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-16 lg:py-20 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-bold text-[#2547B2] mb-6">
                What We Do
              </h2>
              <p className="text-[#555555] text-lg leading-relaxed mb-6">
                Dance to Rise Foundation provides direct financial support to
                talented young DanceSport couples whose potential is at risk of
                being lost to cost. We step in where the financial gap is
                greatest — covering the practical costs that stand between a
                young athlete and the competition floor.
              </p>
              <ul className="space-y-3 mb-8">
                {whatWeDo.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#C4305A]/10 flex items-center justify-center mt-0.5">
                      <svg
                        className="w-3.5 h-3.5 text-[#C4305A]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-[#1A1A1A] text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/programme"
                className="inline-flex items-center gap-2 text-[#2547B2] font-semibold hover:gap-3 transition-all duration-200"
              >
                Learn about the full programme
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="bg-[#E8EDF5] rounded-2xl aspect-video flex items-center justify-center text-[#555555] font-medium text-lg">
              Programme Photo
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-bold text-[#2547B2]">
              How It Works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="text-center p-8 rounded-2xl bg-[#F7F9FC] border border-gray-100 hover:shadow-md transition-shadow duration-200"
              >
                <div className="w-16 h-16 rounded-full bg-[#C4305A] text-white font-[family-name:var(--font-playfair)] text-2xl font-bold flex items-center justify-center mx-auto mb-6">
                  {step.number}
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#1A1A1A] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#555555] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDING SUPPORTERS */}
      <section className="py-14 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#555555] mb-6">
            Our Founding Corporate Supporters
          </p>
          <div className="flex flex-wrap justify-center gap-6 lg:gap-10 items-center">
            {["Lifestyle Diseases Clinic", "Lifestyle Laboratories", "Aesthetics on the Move"].map((name) => (
              <div
                key={name}
                className="px-6 py-3 bg-white rounded-xl border border-gray-200 text-[#1A1A1A] font-medium text-sm shadow-sm"
              >
                {name}
              </div>
            ))}
          </div>
          <Link
            href="/sponsors"
            className="inline-flex items-center gap-2 mt-8 text-[#2547B2] text-sm font-semibold hover:gap-3 transition-all duration-200"
          >
            View sponsorship opportunities
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-[#28BACC] py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-bold text-white mb-8">
            Be Part of the Class of 2027
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/apply"
              className="px-8 py-4 bg-[#C4305A] text-white font-semibold rounded-full hover:bg-[#A52848] transition-colors duration-200"
            >
              Apply Now
            </Link>
            <Link
              href="/sponsors"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#28BACC] transition-colors duration-200"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
