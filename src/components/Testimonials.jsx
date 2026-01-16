import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Andy consistently demonstrated professionalism and integrity in handling customer transactions. He was reliable, detail-oriented, and trusted by both customers and management.",
    author: "Iskandar Ramli",
    role: "Branch Manager, Bank Rakyat Indonesia",
    avatar: "/projects/branch manager.png",
  },
  {
    quote:
      "Andy showed strong initiative during his internship and contributed meaningfully to our frontend development tasks. His work ethic and willingness to learn stood out.",
    author: "Nazif Abdullah",
    role: "Project Supervisor, Cookiss Mobile Sdn Bhd",
    avatar: "/projects/project senior.png",
  },
  {
    quote:
      "As the owner of an online retail store, Andy managed operations independently and handled customer communication with professionalism. His technical background gave him an edge in running the business.",
    author: "Customer Feedback",
    role: "Itemku Online Shop",
    avatar: "/projects/itemku.png",
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      {/* Glow blob */}
      <div
        className="absolute top-1/2 left-1/2
        w-150 h-150 bg-primary/10
        rounded-full blur-3xl
        -translate-x-1/2 -translate-y-1/2 z-0"
      />
      <div
        className="container mx-auto 
      px-6 relative z-10">
        {/* Section Header */}
        <div
          className="text-center max-w-3xl 
        mx-auto mb-16">
          <span
            className="text-secondary-foreground 
          text-sm font-medium tracking-wider 
          uppercase animate-fade-in">
            What People Say
          </span>
          <h2
            className="text-4xl md:text-5xl 
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 text-secondary-foreground">
            Kind Words From{" "}
            <span
              className="text-primary">
              Amazing People
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="relative p-8 md:p-12 rounded-3xl bg-black/70 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4 text-justify text-white">
                "{testimonials[activeIdx].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIdx].avatar}
                  alt={testimonials[activeIdx].author}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <div className="font-semibold text-white">
                    {testimonials[activeIdx].author}
                  </div>
                  <div className="text-sm text-white/70">
                    {testimonials[activeIdx].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="cosmic-button p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}>
                <ChevronLeft />
              </button>

              <div className="flex gap-3 px-4 py-2 rounded-full bg-black/40 backdrop-blur-sm">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`rounded-full transition-all duration-300 ${
                      idx === activeIdx
                        ? "w-8 h-2 bg-primary shadow-[0_0_12px_rgba(139,92,246,0.8)]"
                        : "w-2 h-2 bg-white/50 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="cosmic-button p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all">
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};