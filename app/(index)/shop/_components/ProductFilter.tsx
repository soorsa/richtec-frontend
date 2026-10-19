"use client";
import Input from "@/components/form/Input";
import SearchableSelect from "@/components/form/Select";
import { Button } from "@/components/ui/button";
import { useGetCategories } from "@/hooks/query/useShop";
import { cn } from "cn";
import { Form, Formik } from "formik";
import { SlidersHorizontal } from "lucide-react";

const ProductFilter = () => {
  const { data } = useGetCategories({ page_size: 100 });
  const categories = data?.results || [];
  const categoryOption = categories.map((item) => ({
    label: item.title,
    value: item.slug,
    icon: (
      <div className="size-6 flex justify-center items-center bg-gray-100 rounded">
        <img src={item.thumbnail} alt={item.title} className="size-3" />
      </div>
    ),
  }));
  const initialValues = {
    search: "",
    category: "",
    min_price: 0,
    max_price: 9999999,
  };
  function submit(values: typeof initialValues) {}
  return (
    <div>
      <Formik initialValues={initialValues} validateOnMount onSubmit={submit}>
        {() => {
          return (
            <Form className="space-y-7">
              <div className="">
                <h2 className="text-lg font-bold">Filter Products</h2>
                <p className="text-xs text-gray-500">
                  Search products by name, filter prices and categories.
                </p>
              </div>
              <div className="space-y-4">
                <Input
                  name="search"
                  placeholder="Search products..."
                  label="Search"
                  labelClassName="text-xs text-gray-500!"
                  className="bg-gray-200 py-2! rounded-sm"
                />
                <SearchableSelect
                  label="Category"
                  labelClassName="text-xs text-gray-500!"
                  name="category"
                  options={categoryOption}
                  placeholder="Select category"
                  className="py-2! rounded-sm bg-gray-200"
                />
                <div className="grid grid-cols-2 gap-1.5">
                  <Input
                    name="min_price"
                    placeholder=""
                    formatMoney
                    label="Min price"
                    labelClassName="text-xs text-gray-500!"
                    className="bg-gray-200 py-2! rounded-sm"
                  />

                  <Input
                    name="max_price"
                    placeholder=""
                    formatMoney
                    label="Max price"
                    labelClassName="text-xs text-gray-500!"
                    className="bg-gray-200 py-2! rounded-sm"
                  />
                </div>
              </div>
              <div className="flex justify-end sm:justify-between gap-2">
                <Button
                  className={cn("bg-gray-100 hover:bg-gray-200 text-black")}
                >
                  <span>Clear</span>
                </Button>
                <Button>
                  <SlidersHorizontal className="size-4" />
                  <span>Apply</span>
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ProductFilter;
