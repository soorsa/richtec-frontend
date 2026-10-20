import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Placeholder from "@/components/utils/Placeholder";
import { getFormattedCurrency } from "@/lib/utils";
import { FileText } from "lucide-react";
import Image from "next/image";

interface Prop {
  products: Product[];
  isLoading: boolean;
}
export function ProductListTable(props: Prop) {
  const { products, isLoading } = props;
  function renderList() {
    if (isLoading) {
      return (
        <>
          {Array.from({ length: 5 }).map((_, i) => (
            <TableRow key={i}>
              <TableCell>
                <div className="bg-gray-200 h-5 animate-pulse" />
              </TableCell>
              <TableCell>
                <div className="bg-gray-200 h-5 animate-pulse" />
              </TableCell>
              <TableCell>
                <div className="bg-gray-200 h-5 animate-pulse" />
              </TableCell>
              <TableCell>
                <div className="bg-gray-200 h-5 animate-pulse" />
              </TableCell>
              <TableCell className="flex justify-end">
                <div className="bg-gray-200 h-5 w-30 animate-pulse" />
              </TableCell>
            </TableRow>
          ))}
        </>
      );
    }
    if (products.length < 1) {
      return (
        <TableCell colSpan={4}>
          <Placeholder
            title="No products found."
            actionLabel="Upload a Products"
            className="w-full"
          />
        </TableCell>
      );
    }
    return (
      <>
        {products.map((product) => (
          <TableRow key={product.slug}>
            <TableCell>
              <div className="size-7 flex justify-center items-center bg-gray-200 relative">
                {product.thumbnail ? (
                  <Image src={product.thumbnail} alt={product.title} fill />
                ) : (
                  <FileText className="size-4" />
                )}
              </div>
            </TableCell>
            <TableCell className="font-medium">{product.title}</TableCell>
            <TableCell>{product.category}</TableCell>
            <TableCell>{product.is_active}</TableCell>
            <TableCell className="text-right">
              {getFormattedCurrency(product.price)}
            </TableCell>
          </TableRow>
        ))}
      </>
    );
  }
  return (
    <Table>
      <TableCaption>A list of your recent products.</TableCaption>
      <TableHeader className="">
        <TableRow className="">
          <TableHead className="font-bold">idx</TableHead>
          <TableHead className="font-bold">Product name</TableHead>
          <TableHead className="font-bold">Category</TableHead>
          <TableHead className="font-bold">Status</TableHead>
          <TableHead className="text-right font-bold">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>{renderList()}</TableBody>
      <TableFooter>
        {/* <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow> */}
      </TableFooter>
    </Table>
  );
}
