"use client";

import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Expert Music Instructors",
    description:
      "Learn from experienced and certified musicians who guide you step by step, helping you build strong fundamentals and confidence in your musical journey.",
  },
  {
    title: "Live & Interactive Classes",
    description:
      "Attend live sessions where you can ask questions, practice in real time, and receive instant feedback from instructors.",
  },
  {
    title: "Personalized Learning",
    description:
      "Courses are tailored to your skill level and musical goals, ensuring steady progress whether you are a beginner or advanced learner.",
  },
  {
    title: "Performance Training",
    description:
      "Gain stage confidence through regular performance sessions, recitals, and assessments designed to improve expression and technique.",
  },
  {
    title: "Flexible Schedules",
    description:
      "Choose class timings that fit your routine. Learn at your own pace with flexible schedules and recorded practice sessions.",
  },
  {
    title: "Certified Programs",
    description:
      "Earn recognized certificates on course completion that validate your skills and enhance your musical profile.",
  },
];


export function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={content} />
    </div>
  )
}

