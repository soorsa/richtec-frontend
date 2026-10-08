/* eslint-disable react/no-unescaped-entities */
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

const testimonialsData: Testimonial[] = [
  {
    id: "1",
    quote:
      "The custom stainless steel fabrication and kitchen layout engineering delivered by Richtec completely streamlined our line production. Our order output increased by 35% within the first month of opening.",
    author: "Chef Marcus Vance",
    role: "Executive Chef & Owner",
    company: "Vance Fine Dining Group",
    avatar:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=200",
    rating: 5,
  },
  {
    id: "2",
    quote:
      "As a regional hotel chain, reliability is critical. Richtec handled our full kitchen distribution, installation, and utility connection with zero downtime during our peak season.",
    author: "Elena Rostova",
    role: "VP of Hospitality Operations",
    company: "Grand Haven Hotels",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
    rating: 5,
  },
  {
    id: "3",
    quote:
      "Their 24/7 emergency technician service saved our main kitchen when a refrigeration unit failed before a major banquet. They arrived in under 45 minutes with genuine OEM parts ready.",
    author: "David Chen",
    role: "Director of Culinary Operations",
    company: "Metro Convention Center",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center space-x-1"
      aria-label={`Rating: ${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          className={cn(
            "w-4 h-4",
            index < rating
              ? "text-amber-500 fill-amber-500"
              : "text-gray-300 fill-gray-200"
          )}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest font-semibold text-primary">
            Trusted By Culinary Leaders
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            From Michelin-star restaurants to major resort facilities, hear how
            our equipment and service keep commercial kitchens running.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-4">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-border/60 flex flex-col justify-between hover:shadow-md transition-shadow duration-300 space-y-5"
            >
              <div className="space-y-1">
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between">
                  <StarRating rating={testimonial.rating} />
                  <span className="text-3xl font-serif text-primary select-none">
                    “
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-gray-700 text-sm md:text-base leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author Details */}
              <div className="flex items-center space-x-4 border-t border-border/40">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-gray-200">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-gray-900 text-sm md:text-base">
                    {testimonial.author}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {testimonial.role} ·{" "}
                    <span className="font-medium text-gray-700">
                      {testimonial.company}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 text-center border-t border-border/40">
          <div>
            <div className="text-2xl md:text-3xl font-serif font-bold text-gray-900">
              500+
            </div>
            <div className="text-xs text-gray-500 uppercase tracking-wide">
              Kitchens Designed
            </div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-serif font-bold text-gray-900">
              15+
            </div>
            <div className="text-xs text-gray-500 uppercase tracking-wide">
              Years Experience
            </div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-serif font-bold text-gray-900">
              99.4%
            </div>
            <div className="text-xs text-gray-500 uppercase tracking-wide">
              On-Time Installation
            </div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-serif font-bold text-gray-900">
              24/7
            </div>
            <div className="text-xs text-gray-500 uppercase tracking-wide">
              Customer Support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
