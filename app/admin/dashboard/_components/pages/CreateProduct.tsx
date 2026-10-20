/* eslint-disable react/no-unescaped-entities */
"use client";
import FileInput from "@/components/form/FileInput";
import ImageInput from "@/components/form/ImageInput";
import Input from "@/components/form/Input";
import ListInput from "@/components/form/ListInput";
import SearchableSelect from "@/components/form/Select";
import { Button } from "@/components/ui/button";
import { useCreateProduct } from "@/hooks/query/useAdmin";
import { useGetCategories } from "@/hooks/query/useShop";
import { formatLabel } from "@/lib/utils";
import { cn } from "cn";
import { Form, Formik } from "formik";
import {
  Bookmark,
  Flame,
  SendHorizonalIcon,
  ShoppingBag,
  Smile,
  Sparkles,
  Truck,
} from "lucide-react";
import Image from "next/image";

export default function CreateProduct() {
  const { data: categoryData } = useGetCategories({ page_size: 100 });
  const { mutate: saveProduct, isPending } = useCreateProduct();
  const categories = categoryData?.results || [];
  const categoryOption = categories.map((item) => ({
    label: item.title,
    value: item.id,
    icon: (
      <div className="size-6 flex justify-center items-center bg-gray-100 rounded relative">
        <Image
          src={item.thumbnail}
          alt={item.title}
          height={3}
          width={3}
          className="size-3"
        />
      </div>
    ),
  }));
  const tagOption = ["best seller", "hot", "new arrival", "trending"].map(
    (item) => ({
      label: formatLabel(item),
      value: item,
      icon: (
        <div className="size-6 flex justify-center items-center bg-gray-100 rounded relative">
          {item === "hot" && <Flame className="size-4 text-orange-500" />}
          {item === "new arrival" && (
            <Sparkles className="size-4 text-cyan-500" />
          )}
          {item === "trending" && <Smile className="size-4 text-purple-500" />}
          {item === "best seller" && (
            <Truck className="size-4 text-yellow-500" />
          )}
        </div>
      ),
    })
  );
  const initialValues = {
    title: "",
    category: null,
    description: "",
    features: undefined,
    uploaded_images: undefined,
    price: "",
    thumbnail: undefined,
  };
  function publish(values: typeof initialValues) {
    const { category, ...rest } = values;
    saveProduct({ ...rest, category: Number(category) });
  }
  return (
    <div className="bg-white rounded p-4">
      <Formik initialValues={initialValues} onSubmit={publish}>
        {() => {
          return (
            <Form className="space-y-12">
              <div className="flex justify-between items-start">
                <div className="">
                  <div className="flex items-center gap-2">
                    <div className="size-7 flex justify-center items-center rounded bg-primary/5">
                      <ShoppingBag className="size-4" />
                    </div>
                    <div className="font-bold text-2xl">Create New Product</div>
                  </div>
                  <p className="text-sm text-gray-400">
                    Input required fields, completed form to create new product.
                  </p>
                </div>
                <div className="space-x-1 hidden sm:flex items-center">
                  <Button
                    size={"xs"}
                    className={cn("bg-gray-100 text-gray-800")}
                  >
                    <Bookmark />
                    <span>Save Draft</span>
                  </Button>
                  <Button size={"xs"} type="submit" disabled={isPending}>
                    <span>{isPending ? "Publishing..." : "Publish"}</span>
                    <SendHorizonalIcon />
                  </Button>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <div className="p-4 rounded border space-y-4">
                    <div className="font-semibold">General Infomation</div>
                    <div className="space-y-2">
                      <Input
                        label="Product Name"
                        name="title"
                        className="bg-gray-200"
                        labelClassName="text-sm text-gray-400!"
                        placeholder="E.g. Solid Double-Door Commercial Reach-In Freezer"
                      />
                      <Input
                        label="Description"
                        name="description"
                        type="textarea"
                        className="bg-gray-200"
                        labelClassName="text-sm text-gray-400!"
                        placeholder="Enter product's description"
                      />
                    </div>
                  </div>
                  <div className="p-4 rounded border space-y-4">
                    <div className="font-semibold">Pricing & Tags</div>
                    <div className="space-y-2">
                      <SearchableSelect
                        options={categoryOption}
                        label="Product category"
                        name="category"
                        className="bg-gray-200"
                        labelClassName="text-sm text-gray-400!"
                        placeholder="Select Category"
                      />
                      <SearchableSelect
                        options={tagOption}
                        label="Product Tag"
                        name="tag"
                        className="bg-gray-200"
                        labelClassName="text-sm text-gray-400!"
                        placeholder="Select Tag"
                      />

                      <Input
                        label="Product price"
                        name="price"
                        formatMoney
                        className="bg-gray-200"
                        labelClassName="text-sm text-gray-400!"
                        placeholder="Enter product's description"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="p-4 rounded border space-y-4">
                    <div className="font-semibold">Product's Features</div>
                    <div className="space-y-2">
                      <ListInput
                        name="features"
                        className="bg-gray-200! rounded"
                        listClassName="rounded bg-gray-50"
                        //   labelClassName="text-sm text-gray-400!"
                        placeholder="Type a feature and press Enter"
                      />
                    </div>
                  </div>
                  <div className="p-4 rounded border space-y-4">
                    <div className="font-semibold">Product Media</div>
                    <div className="space-y-4">
                      <ImageInput
                        name="thumbnail"
                        label="Thumbnail"
                        size="size-50"
                        labelClassName="text-sm text-gray-400! mb-4!"
                      />
                      <FileInput
                        label="Image Gallery"
                        name="uploaded_images"
                        accept={[".png", ".jpg"]}
                        multiple
                        //   className="bg-gray-200! rounded"
                        //   listClassName="rounded bg-gray-50"
                        labelClassName="text-sm text-gray-400!"
                        //   placeholder="Enter product's features"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-1">
                <Button size={"sm"} className={cn("bg-gray-100 text-gray-800")}>
                  <Bookmark />
                  <span>Save Draft</span>
                </Button>
                <Button size={"sm"} type="submit" disabled={isPending}>
                  <span>{isPending ? "Publishing..." : "Publish"}</span>
                  <SendHorizonalIcon />
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
