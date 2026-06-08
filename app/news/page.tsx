"use client";

import { useState } from "react";

const SITE_URL = "https://www.dancetorise.org.za";
const NEWS_URL = `${SITE_URL}/news`;
const WA_SHARE_TEXT = encodeURIComponent(`Dance to Rise Foundation — news and impact updates: ${NEWS_URL}`);

function ShareButtons({ postId }: { postId: number }) {
  const [copied, setCopied] = useState(false);

  const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(NEWS_URL)}`;
  const waUrl = `https://api.whatsapp.com/send?text=${WA_SHARE_TEXT}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(NEWS_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* fallback: noop */
    }
  };

  void postId;

  return (
    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2 flex-wrap">
      <span className="text-xs text-[#555555] font-medium mr-1">Share:</span>
      <a
        href={fbUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1877F2] text-white text-xs font-semibold hover:bg-[#1560c7] transition-colors duration-200"
      >
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
        Facebook
      </a>
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#25D366] text-white text-xs font-semibold hover:bg-[#1daa52] transition-colors duration-200"
      >
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        WhatsApp
      </a>
      <button
        onClick={handleCopy}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-[#555555] text-xs font-semibold hover:border-[#2547B2] hover:text-[#2547B2] transition-colors duration-200"
      >
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
        {copied ? "Copied!" : "Copy link"}
      </button>
    </div>
  );
}

const stats = [
  { label: "Couples Supported", value: "5" },
  { label: "Competitions Attended", value: "0" },
  { label: "Funding Raised", value: "R140,000 target" },
  { label: "Programme Year", value: "2027" },
];

const posts = [
  {
    id: 1,
    date: "July 2026",
    category: "Foundation News",
    title: "Dance to Rise Foundation Officially Launches",
    excerpt:
      "Dance to Rise Foundation has officially launched with the support of three founding corporate supporters. The Foundation will support five talented Ballroom and Latin-American DanceSport couples in its inaugural 2027 programme.",
    color: "bg-[#2547B2]",
  },
  {
    id: 2,
    date: "August 2026",
    category: "Sponsor Spotlights",
    title: "Introducing Our Founding Supporter: Lifestyle Diseases Clinic",
    excerpt:
      "We are proud to introduce Lifestyle Diseases Clinic as a Founding Corporate Supporter of Dance to Rise Foundation. Their commitment makes the Class of 2027 possible.",
    color: "bg-[#28BACC]",
  },
  {
    id: 3,
    date: "August 2026",
    category: "Sponsor Spotlights",
    title: "Introducing Our Founding Supporter: Lifestyle Laboratories",
    excerpt:
      "Lifestyle Laboratories has committed as a Founding Corporate Supporter of Dance to Rise Foundation, helping us build the infrastructure to support young DanceSport athletes.",
    color: "bg-[#28BACC]",
  },
  {
    id: 4,
    date: "August 2026",
    category: "Sponsor Spotlights",
    title: "Introducing Our Founding Supporter: Aesthetics on the Move",
    excerpt:
      "We are delighted to welcome Aesthetics on the Move as a Founding Corporate Supporter. Their belief in our mission from day one has been invaluable.",
    color: "bg-[#28BACC]",
  },
  {
    id: 5,
    date: "September 2026",
    category: "Foundation News",
    title: "Applications Now Open — Class of 2027",
    excerpt:
      "Applications for the inaugural Class of 2027 are now open. Dance to Rise Foundation is looking for five talented Ballroom and Latin-American Dance couples under 18 from disadvantaged backgrounds.",
    color: "bg-[#C4305A]",
  },
];

const categories = [
  "All",
  "Athlete Stories",
  "Competition Updates",
  "Foundation News",
  "Sponsor Spotlights",
];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* HERO */}
      <section className="bg-[#C4305A] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold text-white animate-fade-in">
            News &amp; Impact
          </h1>
        </div>
      </section>

      {/* IMPACT DASHBOARD */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-6 bg-[#F7F9FC] rounded-2xl border border-gray-100">
                <div className="font-[family-name:var(--font-playfair)] text-2xl lg:text-3xl font-bold text-[#C4305A] mb-1">
                  {stat.value}
                </div>
                <div className="text-[#555555] text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="py-6 bg-[#F7F9FC] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeCategory === cat
                    ? "bg-[#2547B2] text-white"
                    : "bg-white text-[#555555] border border-gray-200 hover:border-[#2547B2] hover:text-[#2547B2]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS GRID */}
      <section className="py-14 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <p className="text-center text-[#555555] py-16">
              No posts in this category yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 flex flex-col"
                >
                  <div className={`${post.color} h-40 flex items-center justify-center`}>
                    <span className="text-white/40 text-sm font-medium">Story Image</span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full bg-[#F7F9FC] text-[#555555] text-xs font-medium border border-gray-200">
                        {post.category}
                      </span>
                      <span className="text-[#555555] text-xs">{post.date}</span>
                    </div>
                    <h2 className="font-[family-name:var(--font-playfair)] font-bold text-lg text-[#1A1A1A] mb-3 leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-[#555555] text-sm leading-relaxed flex-1">{post.excerpt}</p>
                    <button className="mt-5 text-[#2547B2] text-sm font-semibold hover:underline text-left">
                      Read More →
                    </button>
                    <ShareButtons postId={post.id} />
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* INSTAGRAM FEED PLACEHOLDER */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl lg:text-3xl font-bold text-[#1A3578] mb-2">
              Follow Us On Instagram
            </h2>
            <p className="text-[#C4305A] font-semibold text-lg">@DanceToRiseFoundation</p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-square bg-[#F7F9FC] rounded-xl border border-gray-200 flex items-center justify-center hover:border-[#C4305A]/40 transition-colors duration-200"
              >
                <svg className="w-8 h-8 text-[#C4305A]/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </div>
            ))}
          </div>

          <div className="text-center space-y-4">
            <p className="text-[#555555] text-sm">
              Follow us on Instagram to see our latest updates
            </p>
            <a
              href="https://www.instagram.com/DanceToRiseFoundation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-semibold rounded-full hover:opacity-90 transition-opacity duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
              </svg>
              Follow On Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
