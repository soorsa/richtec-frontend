"use client";
import MetricCard from "@/app/admin/dashboard/_components/MetricCard";
import QuickAction from "@/app/admin/dashboard/_components/QuickAction";
import { getCompactCurrency } from "@/lib/utils";
import { DollarSign, PackageCheck, PackageX, ShoppingCart } from "lucide-react";

const Overview = () => {
  return (
    <div className="space-y-10">
      <div className="grid grid-cols-2 sm:grid-cols-4">
        <MetricCard
          label="Total Products"
          value={32}
          icon={ShoppingCart}
          text="Total number of active products uploaded."
        />
        <MetricCard
          label="Completed Orders"
          value={30}
          icon={PackageCheck}
          text="Total number completed orders made."
        />
        <MetricCard
          label="Failed Orders"
          value={2}
          icon={PackageX}
          text="Total number of failed orders."
        />
        <MetricCard
          label="Total Sales"
          value={getCompactCurrency(230200)}
          icon={DollarSign}
          text="Total amount of sale made in Naira."
        />
      </div>
      <div className="">
        <QuickAction />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="bg-white p-4"></div>
        <div className="bg-white p-4"></div>
      </div>
    </div>
  );
};

export default Overview;
