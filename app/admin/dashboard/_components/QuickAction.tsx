"use client";
import { Button } from "@/components/ui/button";
import { cn } from "cn";
import { Package, Plus, Tags } from "lucide-react";
import { useRouter } from "next/navigation";
export default function QuickAction() {
  const router = useRouter();
  class Navigate {
    goToCategory = () => {
      router.push(`/admin/dashboard/categories`);
    };
    goToCreateProduct = () => {
      router.push(`/admin/dashboard/products/create`);
    };
    goToManageOrder = () => {
      router.push(`/admin/dashboard/orders`);
    };
  }
  const navigate = new Navigate();
  return (
    <div className="space-y-2">
      <div className="text-2xl font-bold">Quick Actions</div>
      <div className="grid grid-cols-3 gap-2">
        <Button onClick={navigate.goToCreateProduct}>
          <Plus />
          <span>Upload New Products</span>
        </Button>
        <Button
          className={cn("bg-black hover:bg-gray-800")}
          onClick={navigate.goToCategory}
        >
          <Tags />
          <span>Create New Category</span>
        </Button>
        <Button
          className={cn("bg-indigo-500 hover:bg-indigo-700")}
          onClick={navigate.goToManageOrder}
        >
          <Package />
          <span>Manage Orders</span>
        </Button>
      </div>
    </div>
  );
}
