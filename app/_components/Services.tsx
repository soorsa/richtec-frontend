import { cn } from "@/lib/utils";
import Image from "next/image";

interface ServiceItem {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image: string;
}

const servicesData: ServiceItem[] = [
  {
    title: "Custom Stainless Steel Fabrication",
    subtitle: "Tailored Engineering",
    description:
      "We design and manufacture heavy-duty, NSF-compliant custom stainless steel workstations, ventilation hoods, prep tables, and serving counters tailored to your precise kitchen dimensions and workflow requirements.",
    highlights: [
      "Heavy-gauge 304 stainless steel construction",
      "Custom ventilation & canopy extraction systems",
      "Ergonomic kitchen workflow integration",
    ],
    image:
      "https://demo.webdevia.com/chefgear-commercial-kitchen-restaurant-equipment-wordpress-theme/wp-content/uploads/2024/11/benefit1.webp",
  },
  {
    title: "Commercial Equipment Distribution & Sourcing",
    subtitle: "Global Brands & Wholesale",
    description:
      "As an authorized distributor for top global manufacturers, we supply high-efficiency commercial ovens, refrigeration systems, dishwashers, and food prep appliances at competitive wholesale rates.",
    highlights: [
      "Authorized warranty & parts provider",
      "Energy Star certified high-efficiency appliances",
      "Bulk supply for hotel chains and franchises",
    ],
    image:
      "https://demo.webdevia.com/chefgear-commercial-kitchen-restaurant-equipment-wordpress-theme/wp-content/uploads/2024/11/benefit2.webp",
  },
  {
    title: "Turnkey Installation & Commissioning",
    subtitle: "Certified On-Site Setup",
    description:
      "Our team of certified technicians handles the complete delivery, utility connection (gas, electrical, plumbing), testing, and safety calibration to ensure your kitchen is inspection-ready on day one.",
    highlights: [
      "Gas, electric & water connection setup",
      "Full system calibration and safety checks",
      "Minimizing downtime for active facilities",
    ],
    image:
      "https://demo.webdevia.com/chefgear-commercial-kitchen-restaurant-equipment-wordpress-theme/wp-content/uploads/2024/11/benefit3.webp",
  },
  {
    title: "Preventative Maintenance & Rapid Repair",
    subtitle: "24/7 Service & Support",
    description:
      "Keep your kitchen operational with custom scheduled maintenance programs and emergency repair services. We stock genuine OEM replacement parts to resolve breakdowns immediately.",
    highlights: [
      "Scheduled quarterly equipment checkups",
      "24/7 priority dispatch for critical breakdowns",
      "Extensive inventory of genuine OEM parts",
    ],
    image:
      "https://demo.webdevia.com/chefgear-commercial-kitchen-restaurant-equipment-wordpress-theme/wp-content/uploads/2024/11/benefit1.webp",
  },
  {
    title: "Kitchen Layout & Workflow Consulting",
    subtitle: "3D CAD & Optimization",
    description:
      "Optimize your culinary operations with expert spatial planning. We deliver 3D CAD kitchen layouts that maximize efficiency, adhere to health codes, and lower operational labor costs.",
    highlights: [
      "3D CAD model renderings & spatial planning",
      "HACCP and local health code compliance",
      "Energy consumption & utility optimization",
    ],
    image:
      "https://demo.webdevia.com/chefgear-commercial-kitchen-restaurant-equipment-wordpress-theme/wp-content/uploads/2024/11/benefit2.webp",
  },
];

export default function Services() {
  return (
    <section className="space-y-12 py-12 container mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="text-sm uppercase tracking-wider font-semibold text-primary">
          End-to-End Kitchen Solutions
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Services & Capabilities
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          From custom stainless manufacturing to nationwide equipment
          distribution and maintenance.
        </p>
      </div>

      {/* Services List */}
      <div className="space-y-12 md:space-y-16">
        {servicesData.map((item, i) => {
          const isEven = i % 2 === 1;

          return (
            <div
              key={item.title}
              className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-2 items-center"
            >
              {/* Image Column */}
              <div
                className={cn(
                  "relative h-80 md:h-105 rounded-lg overflow-hidden shadow-md",
                  isEven ? "md:order-2" : "md:order-1"
                )}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text / Details Column */}
              <div
                className={cn(
                  "bg-primary/5 rounded-lg p-2 md:p-10 flex flex-col justify-center space-y-4 border border-border/50 h-full",
                  isEven ? "md:order-1" : "md:order-2"
                )}
              >
                <span className="text-xs font-semibold uppercase text-primary tracking-widest">
                  {item.subtitle}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 pt-2">
                  {item.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="flex items-center text-xs md:text-sm text-gray-700"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2.5 shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
