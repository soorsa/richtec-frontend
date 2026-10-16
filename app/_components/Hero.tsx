import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Slider from "@/components/utils/Slider";
import { cn } from "cn";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const heroData = [
    {
      hero: {
        header: "In Kitchen with International Quality",
        description:
          "With over 20 years of experience in providing reliable, top-tier kitchen equipment, we deliver quality, innovation, and customer service that restaurant owners trust. where quality transcends borders and sophistication is truly international.",
      },
      image:
        "https://demo.webdevia.com/chefgear-commercial-kitchen-restaurant-equipment-wordpress-theme/wp-content/uploads/2024/11/image-1536x1185.webp",
    },
    {
      hero: {
        header: "Perfect Catering Premium Equipment",
        description:
          "With over 20 years of experience in providing reliable, top-tier kitchen equipment, we deliver quality, innovation, and customer service that restaurant owners trust. where quality transcends borders and sophistication is truly international.",
      },
      image:
        "https://demo.webdevia.com/chefgear-commercial-kitchen-restaurant-equipment-wordpress-theme/wp-content/uploads/2024/11/slider_l01.webp",
    },
    {
      hero: {
        header: "Commercial Kitchen & Restaurant Equipment",
        description:
          "With over 20 years of experience in providing reliable, top-tier kitchen equipment, we deliver quality, innovation, and customer service that restaurant owners trust. where quality transcends borders and sophistication is truly international.",
      },
      image:
        "https://demo.webdevia.com/chefgear-commercial-kitchen-restaurant-equipment-wordpress-theme/wp-content/uploads/2024/11/av_6023gl_eiche_elegant_m1_1.webp",
    },
  ];
  const slides = heroData.map((item, i) => (
    <div className="grid sm:grid-cols-2 gap-2" key={i}>
      <div className="order-2 sm:order-2 bg-primary/5 rounded-md place-content-center p-2 sm:p-10">
        <div className="">
          <div className="space-y-5">
            <h2 className="font-bold text-3xl sm:text-5xl">
              {item.hero.header}
            </h2>
            <div className="">{item.hero.description}</div>
            <div className="flex item-center gap-2">
              <Button>Get in Touch</Button>
              <Button className={cn("bg-lime-700 hover:bg-lime-500")}>
                <Link href={`tel:2348108713152`}>Chat with Us</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-6 pt-4 text-sm text-gray-500">
            <AvatarGroup className="grayscale -space-x-4">
              <Avatar size="lg">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback className="text-gray-200">CN</AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage
                  src="https://github.com/maxleiter.png"
                  alt="@maxleiter"
                />
                <AvatarFallback className="text-gray-200">LR</AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage
                  src="https://github.com/evilrabbit.png"
                  alt="@evilrabbit"
                />
                <AvatarFallback className="text-gray-200">ER</AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage
                  src="https://github.com/evilrabbit.png"
                  alt="@evilrabbit"
                />
                <AvatarFallback className="text-gray-200">ER</AvatarFallback>
              </Avatar>
              <AvatarGroupCount>+3</AvatarGroupCount>
            </AvatarGroup>
            <div className="flex items-center gap-1.5">
              Join 15,000+ happy customers
            </div>
          </div>
        </div>
      </div>
      <div className="relative order-1 sm:order-2 h-[40vh] sm:h-[80vh] w-full rounded-md overflow-hidden">
        <Image src={item.image} alt="" fill className="object-cover" />
      </div>
    </div>
  ));
  return (
    <div className="">
      <Slider slides={slides} showNav={false} />
    </div>
  );
};

export default Hero;
