import { cn } from "cn";
import { Info, LucideIcon } from "lucide-react";
interface Prop {
  icon: LucideIcon;
  label: string;
  value: string | number;
  text?: string;
  iconClassName?: string;
  className?: string;
}
export default function MetricCard(props: Prop) {
  return (
    <div
      className={cn(
        "rounded-sm border border-gray-200 bg-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white p-5 cursor-pointer space-y-2",
        props.className
      )}
    >
      <div className="flex items-center gap-1">
        <div
          className={cn(
            "size-8 flex justify-center items-center bg-primary/5 rounded-sm",
            props.iconClassName
          )}
        >
          <props.icon className="size-4" />
        </div>
        <div className="font-bold text-gray-600" title={props.label}>
          {props.label}
        </div>
      </div>
      <div className="text-3xl font-black" title={`${props.value}`}>
        {props.value}
      </div>
      {props.text && (
        <div
          className="flex text-xs text-gray-400 gap-0.5 items-center"
          title={props.text}
        >
          <Info className="size-3" />
          <div className="line-clamp-1 ">{props.text}</div>
        </div>
      )}
    </div>
  );
}
