import { HeaderMenu } from "@/app/admin/dashboard/_components/Header";
import SideNav from "@/app/admin/dashboard/_components/SideNav";
import { Breadcrumb } from "@/components/utils/BreadCrum";

export default function layout({ children }: LayoutProps<"/admin/dashboard">) {
  return (
    <div className="fixed inset-0 z-50 flex h-screen w-screen">
      {/* Sidebar */}
      <div className="hidden w-75 bg-white md:flex flex-col border-r border-gray-200">
        <SideNav />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <HeaderMenu />
        <div className="p-2 sm:p-6 space-y-4">
          <div className="">
            <Breadcrumb />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
