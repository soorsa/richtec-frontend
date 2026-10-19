"use client";
import Logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { navigation } from "@/data/constants";
import { useSignOut } from "@/hooks/query/useAuth";
import { LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function SideNav() {
  const pathname = usePathname();
  const { mutate: signOut, isPending } = useSignOut();
  return (
    <div className="flex flex-col p-5 gap-0 h-screen overflow-y-auto scrollbar-hide">
      <div className="flex items-center gap-2 px-5">
        <Image
          src={Logo}
          alt="Richtec professional"
          loading="eager"
          quality={100}
          className="w-full h-auto"
        />
        {/* <div className="text-sm text-gray-500 flex-1">Admin</div> */}
      </div>
      <div className="w-full py-1.5 h-fit! rounded-2xl flex-1 flex flex-col justify-between">
        <nav className="space-y-2 px-5 text-sm ">
          <div className="flex items-center mt-7 gap-2">
            <div className="text-gray-400 text-xs font-bold uppercase">
              ADMINISTRATOR
            </div>
            <hr className="text-gray-300 w-full" />
          </div>

          {navigation.admin.map((item, i) => (
            <Link
              key={i}
              href={item.path}
              className={`flex gap-2 items-center p-2 capitalize ${
                pathname === item.path
                  ? "bg-primary text-white font-bold"
                  : "text-gray-700 hover:border border-primary/30"
              }`}
            >
              <item.icon
                strokeWidth={pathname === item.path ? 2.5 : 1.5}
                size={18}
              />
              {item.label}
            </Link>
          ))}
          {/* <div className="flex items-center mt-7 gap-2">
            <h4 className="text-gray-400 text-xs font-bold">SYSTEM</h4>
            <hr className="text-gray-300 w-full" />
          </div>
 */}
        </nav>
        <Button
          onClick={() => signOut()}
          disabled={isPending}
          className="flex items-center w-full px-7 py-1.75 text-[12px] text-red-500 bg-transparent border border-red-500 hover:bg-transparent"
        >
          <LogOut className="mr-2 w-4 h-4" />
          Log Out
        </Button>
      </div>
    </div>
  );
}

export default SideNav;
