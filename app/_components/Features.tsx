import { CreditCard, Headset, MessagesSquare, Truck } from "lucide-react";

const Features = () => {
  const data = [
    {
      icon: MessagesSquare,
      title: "Consultation",
      description:
        "Schedule a visit for measurements and discuss your garage door preferences in detail.",
    },
    {
      icon: Headset,
      title: "24/7 Support",
      description:
        "Schedule a visit for maintenance and discuss your garage door preferences in detail.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description:
        "Schedule a visit for maintenance and discuss your garage door preferences in detail.",
    },
    {
      icon: CreditCard,
      title: "Pay on Delivery",
      description:
        "Schedule a visit for maintenance and discuss your garage door preferences in detail.",
    },
  ];
  return (
    <div className="grid sm:grid-cols-4 gap-4">
      {data.map((item, i) => (
        <div
          className="bg-white p-5 hover:bg-primary hover:text-white space-y-2 cursor-pointer"
          key={i}
        >
          <item.icon className="h-15 w-15" />
          <div className="text-xl font-semibold">{item.title}</div>
          <div className="text-sm">{item.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Features;
