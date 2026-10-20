"use client";
import MetricCard from "@/app/admin/dashboard/_components/MetricCard";
import { ProductListTable } from "@/app/admin/dashboard/_components/ProductListTable";
import { Button } from "@/components/ui/button";
import { useGetProducts } from "@/hooks/query/useShop";
import { getCompactCurrency } from "@/lib/utils";
import {
  BadgeDollarSign,
  CircleDollarSign,
  Package,
  Plus,
  ShoppingBag,
  ShoppingCart,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function Products() {
  const router = useRouter();
  const { data, isLoading } = useGetProducts();
  const products = data?.results || [];
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-2 sm:grid-cols-4">
        <MetricCard
          label="Total Products"
          value={32}
          icon={ShoppingCart}
          text="Total number of products on platform."
        />
        <MetricCard
          label="Total Products Value"
          value={getCompactCurrency(13600000)}
          icon={BadgeDollarSign}
          text="Total values of products on platform in Naira."
        />
        <MetricCard
          label="Total Orders"
          value={2}
          icon={Package}
          text="Total number of failed orders."
        />
        <MetricCard
          label="Total Sales"
          value={getCompactCurrency(230200)}
          icon={CircleDollarSign}
          text="Total amount of sale made in Naira."
        />
      </div>
      <div className="bg-white rounded p-4 space-y-4">
        <div className="flex justify-between">
          <div className="">
            <div className="flex items-center gap-2">
              <div className="size-7 flex justify-center items-center bg-primary/5 rounded">
                <ShoppingBag className="size-4" />
              </div>
              <div className="text-2xl font-bold capitalize">All products</div>
            </div>
            <p className="text-sm text-gray-500">
              List of all products on this platform.
            </p>
          </div>
          <div className="">
            <Button
              onClick={() => router.push(`/admin/dashboard/products/create`)}
            >
              <Plus />
              <span>Add Product</span>
            </Button>
          </div>
        </div>
        <ProductListTable products={products} isLoading={isLoading} />
      </div>
    </div>
  );
}
