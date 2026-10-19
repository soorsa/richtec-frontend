"use client";
import FileInput from "@/components/form/FileInput";
import Input from "@/components/form/Input";
import { Button } from "@/components/ui/button";
import { useCreateCategory } from "@/hooks/query/useAdmin";
import { Form, Formik, FormikHelpers } from "formik";
import { Save, TagPlus } from "lucide-react";

export default function NewCategoryForm() {
  const { mutate: createCategory, isPending } = useCreateCategory();
  const initialValues = {
    title: "",
    thumbail: undefined,
  };
  function submit(
    values: typeof initialValues,
    { resetForm }: FormikHelpers<typeof initialValues>
  ) {
    createCategory(values, {
      onSuccess() {
        resetForm();
      },
    });
  }
  return (
    <div className="space-y-8">
      <div className="">
        <div className="flex gap-1.5 items-center">
          <div className="size-6 flex items-center justify-center bg-indigo-800/50 rounded-sm text-white">
            <TagPlus className="size-3.5" />
          </div>
          <div className="text-2xl font-bold">Create New Category</div>
        </div>
        <p className="text-sm text-gray-500">
          Input category name and upload thumbnail to create new category.
        </p>
      </div>
      <Formik initialValues={initialValues} validateOnMount onSubmit={submit}>
        {() => {
          return (
            <Form className="space-y-8">
              <div className="space-y-2">
                <Input
                  label="Category name"
                  name="title"
                  labelClassName="text-sm"
                  className="bg-gray-200"
                  placeholder="Enter category name"
                />
                <FileInput
                  label="Thumbnail"
                  name="thumbnail"
                  accept={[".png", ".jpg"]}
                />
              </div>
              <div className="flex justify-end">
                <Button type="submit" disabled={isPending}>
                  <Save strokeWidth={2.5} />
                  <span>{isPending ? "Saving..." : "Save"}</span>
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
