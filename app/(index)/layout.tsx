import FloatingMessageButton from "@/app/_components/FloatingMessage";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function layout({ children }: LayoutProps<"/">) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <FloatingMessageButton />
      <Footer />
    </div>
  );
}
