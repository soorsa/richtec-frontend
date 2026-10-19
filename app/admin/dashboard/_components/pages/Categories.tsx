"use client";
import CategoryList from "@/app/admin/dashboard/_components/CategoryList";
import EditCategoryForm from "@/app/admin/dashboard/_components/EditCategory";
import MetricCard from "@/app/admin/dashboard/_components/MetricCard";
import NewCategoryForm from "@/app/admin/dashboard/_components/NewCategoryForm";
import { useGetCategories } from "@/hooks/query/useShop";
import { getCompactCurrency } from "@/lib/utils";
import { DollarSign, Package, ShoppingCart, Tags } from "lucide-react";
import React from "react";

export default function Categories() {
  const { data, isLoading } = useGetCategories();
  const [selectedCategory, setselectedCategory] = React.useState<Category>();
  const categories = data?.results || [];
  return (
    <div className="space-y-10">
      <div className="grid grid-cols-2 sm:grid-cols-4">
        <MetricCard
          label="Total Categories"
          value={32}
          icon={Tags}
          text="Total number of active categories."
        />
        <MetricCard
          label="Total Products"
          value={30}
          icon={ShoppingCart}
          text="Total number products."
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
          icon={DollarSign}
          text="Total amount of sale made in Naira."
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded">
          {selectedCategory ? (
            <EditCategoryForm
              category={selectedCategory}
              setSelectedCategory={setselectedCategory}
            />
          ) : (
            <NewCategoryForm />
          )}
        </div>
        <div className="bg-white p-4 rounded">
          <CategoryList
            categories={categories}
            isLoading={isLoading}
            selectedCategory={selectedCategory}
            setEditCategory={setselectedCategory}
          />
        </div>
      </div>
    </div>
  );
}
