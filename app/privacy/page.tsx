import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Dance to Rise Foundation Privacy Policy — how we collect, use, and protect your personal information.",
};

const sections = [
  {
    id: "who-we-are",
    title: "1. Who We Are",
    content: `Dance to Rise Foundation (the &ldquo;Foundation&rdquo;) is a South African non-profit organisation supporting young Ballroom and Latin-American DanceSport athletes from disadvantaged backgrounds. You can contact us at info@dancetorise.org.za.`,
  },
  {
    id: "information-we-collect",
    title: "2. Information We Collect",
    content: `We collect the following types of personal information:
    <ul class="list-disc pl-6 mt-3 space-y-2">
      <li>Name, contact details (email address, phone number)</li>
      <li>Application data (date of birth, school details, area, guardian information)</li>
      <li>Financial circumstances information (provided voluntarily in applications)</li>
      <li>Coach information provided in applications</li>
      <li>Website usage data (via Google Analytics — anonymised)</li>
    </ul>`,
  },
  {
    id: "how-we-use",
    title: "3. How We Use Your Information",
    content: `We use your personal information for:
    <ul class="list-disc pl-6 mt-3 space-y-2">
      <li>Programme administration and beneficiary selection</li>
      <li>Communication with applicants, beneficiaries, and supporters</li>
      <li>Sponsor and partner reporting</li>
      <li>Compliance with our NPO and NPC registration obligations</li>
      <li>Improving our website and services</li>
    </ul>`,
  },
  {
    id: "who-we-share-with",
    title: "4. Who We Share It With",
    content: `We do not sell, rent, or commercially share your personal information with third parties. We may share information with:
    <ul class="list-disc pl-6 mt-3 space-y-2">
      <li>Our board members and Selection Committee (for programme administration)</li>
      <li>Regulatory authorities where required by law</li>
      <li>Sponsors — only in aggregate, anonymised impact reports</li>
    </ul>`,
  },
  {
    id: "how-long-we-keep",
    title: "5. How Long We Keep It",
    content: `We retain personal information for the following periods:
    <ul class="list-disc pl-6 mt-3 space-y-2">
      <li>Application data: 5 years from the date of application</li>
      <li>Financial records: 7 years in compliance with South African law</li>
      <li>Website usage data: As per Google Analytics data retention settings</li>
    </ul>`,
  },
  {
    id: "your-rights",
    title: "6. Your Rights",
    content: `Under POPIA (Protection of Personal Information Act), you have the right to:
    <ul class="list-disc pl-6 mt-3 space-y-2">
      <li>Access the personal information we hold about you</li>
      <li>Request correction of inaccurate information</li>
      <li>Request deletion of your information (subject to legal retention requirements)</li>
      <li>Object to the processing of your information</li>
    </ul>
    <p class="mt-3">To exercise these rights, contact us at info@dancetorise.org.za.</p>`,
  },
  {
    id: "cookies",
    title: "7. Cookies",
    content: `Our website uses Google Analytics to understand how visitors use our site. Google Analytics collects anonymised data including pages visited, time on site, and approximate location. You can opt out of Google Analytics tracking by using the Google Analytics opt-out browser add-on.`,
  },
  {
    id: "contact",
    title: "8. Contact",
    content: `If you have any questions about this Privacy Policy or how we handle your personal information, please contact us at: <a href="mailto:info@dancetorise.org.za" class="text-[#2547B2] hover:underline">info@dancetorise.org.za</a>`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-[#F7F9FC] border-b border-gray-200 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#2547B2]">
            Privacy Policy
          </h1>
          <p className="mt-2 text-[#555555]">
            Dance to Rise Foundation — Last updated: 2026
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.id} id={section.id}>
                <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#1A1A1A] mb-4">
                  {section.title}
                </h2>
                <div
                  className="text-[#555555] leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
