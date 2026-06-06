"use client";

import { useState } from "react";

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
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
