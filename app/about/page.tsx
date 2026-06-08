import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Dance to Rise Foundation's story, vision, mission, and commitment to young DanceSport athletes in South Africa.",
  openGraph: {
    title: "About Dance to Rise Foundation",
    description: "Learn about Dance to Rise Foundation's story, vision, mission, and commitment to young DanceSport athletes in South Africa.",
    url: "/about",
    type: "website",
    siteName: "Dance to Rise Foundation",
    images: [{ url: "/logo.png", width: 800, height: 600, alt: "Dance to Rise Foundation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Dance to Rise Foundation",
    description: "Learn about Dance to Rise Foundation's story, vision, mission, and commitment to young DanceSport athletes in South Africa.",
    images: ["/logo.png"],
  },
};

const values = [
  { emoji: "🌟", name: "Opportunity", description: "Creating access where barriers exist" },
  { emoji: "🤝", name: "Integrity", description: "Transparent, fair, and accountable in all decisions" },
  { emoji: "🏆", name: "Excellence", description: "Holding ourselves and our athletes to high standards" },
  { emoji: "🙏", name: "Respect", description: "Honouring every athlete, family, and partner" },
  { emoji: "💪", name: "Empowerment", description: "Building confidence, resilience, and future potential" },
];

const governance = [
  { label: "NPO Registration", value: "Pending" },
  { label: "NPC Registration", value: "Pending" },
  { label: "Financial Year", value: "1 March — 28/29 February" },
  { label: "Independent Review", value: "To be appointed" },
  { label: "Founded", value: "2026" },
  { label: "Contact", value: "info@dancetorise.org.za" },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#2547B2] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold text-white animate-fade-in">
            About Dance to Rise Foundation
          </h1>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-10">
            <Image
              src="/logo.png"
              alt="Dance to Rise Foundation"
              width={320}
              height={320}
              className="h-56 sm:h-64 lg:h-80 w-auto"
            />
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-bold text-[#2547B2] mb-8">
            Our Story
          </h2>
          <div className="prose prose-lg max-w-none text-[#555555] leading-relaxed space-y-5">
            <p>
              Dance to Rise Foundation was established to address a simple but urgent problem:
              talented young Ballroom and Latin-American DanceSport athletes across South Africa
              are leaving the sport they love — not because of a lack of talent or dedication,
              but because their families cannot afford to continue.
            </p>
            <p>
              Competition entry fees, transport, meals, shoes — costs that may seem manageable
              to some are insurmountable barriers for many. Every year, extraordinary potential
              is lost. We built Dance to Rise Foundation to change that.
            </p>
            <p>
              We believe that talent and dedication — not financial circumstance — should determine
              a young athlete&apos;s opportunity to succeed.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="mt-12 border-l-4 border-[#CC9438] pl-8 py-2">
            <p className="font-[family-name:var(--font-playfair)] text-2xl lg:text-3xl italic text-[#1A3578] font-medium">
              &ldquo;Where Passion Meets Possibility&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-16 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-bold text-[#2547B2]">
              Vision &amp; Mission
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 rounded-xl bg-[#2547B2]/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-[#2547B2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#1A1A1A] mb-4">
                Our Vision
              </h3>
              <p className="text-[#555555] leading-relaxed">
                To create opportunities for talented young DanceSport athletes from disadvantaged
                backgrounds to pursue their dreams, realise their potential, and build brighter
                futures through dance.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 rounded-xl bg-[#C4305A]/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-[#C4305A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#1A1A1A] mb-4">
                Our Mission
              </h3>
              <p className="text-[#555555] leading-relaxed">
                To support Ballroom and Latin-American Dance couples under the age of 18 by
                removing financial barriers to participation, development, and achievement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-bold text-[#2547B2]">
              Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {values.map((value) => (
              <div
                key={value.name}
                className="bg-[#F7F9FC] rounded-2xl p-6 text-center border border-gray-100 hover:shadow-md transition-shadow duration-200"
              >
                <div className="text-4xl mb-4">{value.emoji}</div>
                <h3 className="font-[family-name:var(--font-playfair)] font-bold text-lg text-[#1A1A1A] mb-2">
                  {value.name}
                </h3>
                <p className="text-[#555555] text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ATHLETE-FIRST COMMITMENT */}
      <section className="py-16 bg-[#1A3578]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-bold text-white mb-6">
            Our Athlete-First Commitment
          </h2>
          <p className="text-[#CADCFC] text-lg leading-relaxed">
            Dance to Rise Foundation is independent of all federations, associations, and studios.
            We support athletes from every club, studio, and federation in South Africa. Opportunities
            are determined by talent, commitment, and need — never by organisational affiliation.
          </p>
        </div>
      </section>

      {/* GOVERNANCE */}
      <section className="py-16 bg-[#F7F9FC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2547B2] mb-8">
            Governance
          </h2>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <table className="w-full">
              <tbody>
                {governance.map((row, i) => (
                  <tr
                    key={row.label}
                    className={i % 2 === 0 ? "bg-white" : "bg-[#F7F9FC]"}
                  >
                    <td className="px-6 py-4 font-semibold text-[#1A1A1A] text-sm w-1/2 border-b border-gray-100">
                      {row.label}
                    </td>
                    <td className="px-6 py-4 text-[#555555] text-sm border-b border-gray-100">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm text-[#555555] italic">
            Our full Governance and Operations Manual is available on request.
          </p>
        </div>
      </section>
    </>
  );
}
