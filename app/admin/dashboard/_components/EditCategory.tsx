"use client";
import FileInput from "@/components/form/FileInput";
import Input from "@/components/form/Input";
import { Button } from "@/components/ui/button";
import { usePatchCategory } from "@/hooks/query/useAdmin";
import { Form, Formik, FormikHelpers } from "formik";
import { Pen, Save } from "lucide-react";
interface Prop {
  category: Category;
  setSelectedCategory: (category?: Category) => void;
}
export default function EditCategoryForm(props: Prop) {
  const { category, setSelectedCategory } = props;
  const { mutate: patchData, isPending } = usePatchCategory(category.slug);
  console.log(category);

  const initialValues = {
    title: category.title,
    thumbail: category.thumbnail,
  };
  function submit(
    values: typeof initialValues,
    { resetForm }: FormikHelpers<typeof initialValues>
  ) {
    patchData(values, {
      onSuccess() {
        resetForm();
        setSelectedCategory();
      },
    });
  }
  return (
    <div className="space-y-8">
      <div className="">
        <div className="flex gap-1.5 items-center">
          <div className="size-6 flex items-center justify-center bg-indigo-800/50 rounded-sm text-white">
            <Pen className="size-3.5" />
          </div>
          <div className="text-2xl font-bold">Edit Category</div>
        </div>
        <p className="text-sm text-gray-500">
          Edit category name and upload thumbnail to update category.
        </p>
      </div>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        validateOnMount
        onSubmit={submit}
      >
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
