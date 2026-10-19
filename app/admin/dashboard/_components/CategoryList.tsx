import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Placeholder from "@/components/utils/Placeholder";
import { cn } from "cn";
import { Pen, Tag, Tags, Trash2 } from "lucide-react";
interface Prop {
  categories: Category[];
  isLoading: boolean;
  setEditCategory: (category?: Category) => void;
  selectedCategory?: Category;
}
export default function CategoryList(props: Prop) {
  const { categories, isLoading, selectedCategory, setEditCategory } = props;
  function renderList() {
    if (isLoading) {
      return (
        <div className="space-y-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div className="flex gap-2" key={i}>
              <div className="h-10 w-10 bg-gray-200 animate-pulse" />
              <div className="h-10 bg-gray-200 animate-pulse flex-1" />
            </div>
          ))}
        </div>
      );
    }
    if (categories.length < 1) {
      return <Placeholder />;
    }
    return (
      <div className="space-y-2">
        {categories.map((cat, i) => (
          <div
            className="flex gap-2 border border-gray-200 p-1 rounded-md"
            key={i}
          >
            <Avatar
              className={cn(
                "rounded-md after:border-none size-10 bg-gray-200 flex justify-center items-center"
              )}
            >
              <AvatarImage
                src={cat.thumbnail}
                alt={cat.title}
                className={cn("size-7")}
              />
              <AvatarFallback className={cn("rounded-md")}>
                <Tag className="size-7" />
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="">{cat.title}</div>
              <div className="text-xs text-gray-600">{10} products</div>
            </div>
            <div className="space-y-1">
              <div
                className={cn(
                  "bg-transparent text-indigo-500 hover:bg-transparent flex gap-1 px-2 cursor-pointer items-center text-sm"
                )}
                onClick={() => setEditCategory(cat)}
              >
                <Pen className="size-3" />
                <span>Edit</span>
              </div>
              <div
                className={cn(
                  "bg-transparent text-red-500 hover:bg-transparent flex gap-1 px-2 cursor-pointer items-center text-xs"
                )}
              >
                <Trash2 className="size-3" />
                <span>Delete</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="space-y-8">
      <div className="">
        <div className="flex gap-1.5 items-center">
          <div className="size-6 flex items-center justify-center bg-indigo-800/50 rounded-sm text-white">
            <Tags className="size-3.5" />
          </div>
          <div className="text-2xl font-bold flex-1">Categories</div>
          {selectedCategory && (
            <Button
              onClick={() => setEditCategory()}
              size={"xs"}
              className={cn(
                "bg-primary/5 text-primary hover:text-white text-xs!"
              )}
            >
              <Pen />
              <span>New Category</span>
            </Button>
          )}
        </div>
        <p className="text-sm text-gray-500">
          Select category you intend to edit or delete.
        </p>
      </div>
      {renderList()}
    </div>
  );
}
