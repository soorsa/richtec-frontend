"use client";
import { Button } from "@/components/ui/button";
import { cn } from "cn";
import { Package, Plus, Tags } from "lucide-react";
export default function QuickAction() {
  return (
    <div className="space-y-2">
      <div className="text-2xl font-bold">Quick Actions</div>
      <div className="grid grid-cols-3 gap-2">
        <Button>
          <Plus />
          <span>Upload New Products</span>
        </Button>
        <Button className={cn("bg-black hover:bg-gray-800")}>
          <Tags />
          <span>Create New Category</span>
        </Button>
        <Button className={cn("bg-indigo-500 hover:bg-indigo-700")}>
          <Package />
          <span>Manage Orders</span>
        </Button>
      </div>
    </div>
  );
}
