/* eslint-disable react/no-unescaped-entities */
"use client";

import { Building2, ChevronDown, UserCircle } from "lucide-react";
import Link from "next/link";
import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { navigation } from "@/data/constants";
import { useGetMyDetails } from "@/hooks/query/useAuth";
import { cn } from "@/lib/utils";

export function HeaderMenu() {
  const { data: user, isLoading } = useGetMyDetails();
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="hidden sm:flex h-18 w-full items-center justify-between px-5">
        <div className="shrink-0 flex gap-2">
          <div className="border border-gray-200 flex items-center justify-center size-12">
            <Building2 className="size-6 text-primary" />
          </div>
          <div className="">
            <div className="text-xl font-bold">
              RICHTEC PROFESSION EQUIPMENT LTD.
            </div>
            <div className="text-sm">Administator's portal</div>
          </div>
        </div>

        <div className="flex shrink-0 items-center">
          <button
            type="button"
            className="flex h-9 cursor-pointer items-center gap-2 rounded-[10px] border px-3 text-[13px] font-semibold text-[#20242a] transition hover:bg-gray-100"
          >
            <UserCircle size={15} strokeWidth={2.2} className="text-primary" />
            {isLoading ? (
              <div className="h-4 w-20 rounded-sm animate-pulse" />
            ) : (
              <span>
                {user?.first_name} {user?.last_name}
              </span>
            )}

            <ChevronDown size={14} strokeWidth={2} className="text-[#20242a]" />
          </button>
        </div>
      </div>
      <NavigationMenu className={cn("h-16 px-2 flex sm:hidden")}>
        <NavigationMenuList className="flex-none">
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className="
                  h-9
                  bg-transparent
                  px-3
                  font-medium
                  border border-gray-300
                "
            >
              <div className="flex items-center gap-2">
                <Building2
                  size={15}
                  strokeWidth={2.2}
                  className="text-primary"
                />
                <span>RichTec Professional Equipment LTD.</span>
              </div>
            </NavigationMenuTrigger>

            <NavigationMenuContent>
              <ul className="w-60 p-2 text-sm text-gray-700 divide-y divide-gray-200">
                {navigation.admin.map((item, i) => (
                  <Link
                    key={i}
                    href={item.path}
                    className="flex items-center gap-1.5 py-3"
                  >
                    <item.icon size={18} />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  href: string;
}) {
  return (
    <li {...props}>
      <NavigationMenuLink
        render={
          <Link
            href={href}
            className="block rounded-lg p-3 transition-colors hover:bg-gray-50"
          >
            <div className="flex flex-col gap-1 text-sm">
              <div className="font-semibold leading-none text-gray-900">
                {title}
              </div>

              <div className="text-xs text-muted-foreground">{children}</div>
            </div>
          </Link>
        }
      />
    </li>
  );
}
