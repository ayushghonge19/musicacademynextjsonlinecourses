'use client'

import { InfiniteMovingCards } from "./ui/infinite-moving-cards"
import { cn } from "@/lib/utils"

const testimonials = [
    {
        quote:
            "As a violinist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.",
        name: "Emily Taylor",
        title: "Violin Student",
    },
    {
        quote:
            "The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!",
        name: "Chris Morales",
        title: "Music Production Student",
    },
    {
        quote:
            "The guitar lessons helped me build a strong foundation and boosted my confidence to perform live within months.",
        name: "Daniel Roberts",
        title: "Guitar Student",
    },
    {
        quote:
            "I always wanted to sing professionally, and the vocal training here transformed my voice and breathing technique completely.",
        name: "Sophia Williams",
        title: "Vocal Training Student",
    },
    {
        quote:
            "The piano instructors focus not just on technique but also on musical expression, which made learning incredibly enjoyable.",
        name: "Arjun Mehta",
        title: "Piano Student",
    },
    {
        quote:
            "I joined as a complete beginner, but the structured lessons and supportive mentors helped me progress faster than I imagined.",
        name: "Liam Anderson",
        title: "Beginner Music Student",
    },
    {
        quote:
            "Learning digital music tools alongside theory gave me practical skills that I now use to create my own tracks.",
        name: "Neha Kapoor",
        title: "Digital Music Student",
    },
    {
        quote:
            "The community and instructors here genuinely care about your growth, making the learning experience motivating and inspiring.",
        name: "Michael Chen",
        title: "Advanced Music Student",
    },
]

export function TestimonialCards() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-black">

            {/* Grid background */}
            <div
                className={cn(
                    "absolute inset-0",
                    "[background-size:40px_40px]",
                    "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                )}
            />

            {/* Radial fade */}
            <div className="pointer-events-none absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

            {/* Content */}
            <div className="relative z-10 py-24">

                {/* Heading */}
                <div className="max-w-4xl mx-auto text-center mb-16 px-4">
                    <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
                        Hear Our Harmony
                    </h2>
                    <p className="mt-4 text-base md:text-lg text-neutral-400 leading-relaxed">
                        Voices of success from students who turned passion into performance
                    </p>
                </div>

                {/* Cards */}
                <div className="flex justify-center w-full px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-6xl h-[38rem] rounded-2xl flex items-center justify-center
                        bg-white/5 backdrop-blur-md
                        border border-white/10
                        shadow-2xl overflow-hidden">
                        <InfiniteMovingCards
                            items={testimonials}
                            direction="right"
                            speed="slow"
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}
