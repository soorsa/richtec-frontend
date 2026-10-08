/* eslint-disable react-hooks/set-state-in-effect */
// components/Header.tsx
"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import ShoppingCartModal from "@/components/utils/ShoppingCartModal";
import { Categories, navigation } from "@/data/constants";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, ShoppingBag, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setOpenSubmenu(false);
    setIsCartOpen(false);
  }, [pathname]);

  // Lock body scroll while mobile menu or cart is open
  useEffect(() => {
    document.body.style.overflow = isOpen || isCartOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, isCartOpen]);

  return (
    <>
      <nav
        className={cn(
          "sticky top-0 z-50 py-2 w-full transition-all duration-300",
          scrolled
            ? "bg-white/80 text-gray-700 shadow-sm backdrop-blur-md"
            : "bg-white text-gray-700",
          isOpen && "bg-white text-gray-700 shadow-sm"
        )}
      >
        <div className="">
          <div className="flex items-center justify-between px-4 sm:px-8 lg:px-20">
            <Link
              href="/"
              className="relative w-30 sm:w-50 h-10 sm:h-14"
              onClick={() => setIsOpen(false)}
            >
              <Image
                src={"/logo.png"}
                alt="richtec"
                fill
                quality={99}
                className="w-full h-full object-contain"
              />
            </Link>

            {/* Desktop Menu */}
            <NavigationMenu className="hidden max-w-none items-center space-x-8 md:flex">
              <NavigationMenuList className="gap-1">
                {navigation.landing.map((item, i) => (
                  <NavigationMenuItem key={i} className="cursor-pointer">
                    <NavigationMenuLink
                      href={item.path}
                      className="h-9 bg-transparent px-3 font-medium"
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-9 bg-transparent px-3 font-medium">
                    Categories
                  </NavigationMenuTrigger>

                  <NavigationMenuContent>
                    <div className="flex w-fit flex-col gap-2 p-6">
                      {Categories.map((cat, j) => (
                        <Link
                          href={cat.href ? cat.href : "#services"}
                          key={j}
                          className="flex items-center gap-2 border-b border-transparent py-2 text-sm hover:border-gray-200"
                        >
                          <span>{cat.name}</span>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center text-sm gap-2">
                <div>Call Us:</div>
                <Link
                  href={`tel:2348108713152`}
                  className="text-indigo-700 font-semibold hover:underline underline-offset-4"
                >
                  +234 810 871 3152
                </Link>
              </div>
              <Link
                href="tel:234 810 871 3152"
                className="bg-primary px-4 py-2 text-white transition-shadow duration-200 hover:shadow-lg"
              >
                Contact us
              </Link>
              <div>
                <Button
                  onClick={() => setIsCartOpen(!isCartOpen)}
                  className="bg-transparent hover:bg-transparent text-primary relative"
                >
                  <div className="bg-primary flex items-center justify-center text-white h-5 w-5 text-xs rounded-full absolute top-0 right-3">
                    5
                  </div>
                  <ShoppingBag className="size-6" />
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4 md:hidden">
              <button
                type="button"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                onClick={() => setIsOpen((v) => !v)}
                className="text-gray-700"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <div>
                <Button
                  onClick={() => setIsCartOpen(!isCartOpen)}
                  className="bg-transparent hover:bg-transparent text-primary relative px-0"
                >
                  <div className="bg-primary flex items-center justify-center text-white h-5 w-5 text-xs rounded-full absolute top-0 -right-2">
                    5
                  </div>
                  <ShoppingBag className="size-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          className={cn(
            "fixed inset-x-0 top-14 z-40 origin-top overflow-y-auto bg-white transition-all duration-300 md:hidden",
            isOpen
              ? "pointer-events-auto max-h-[calc(100vh-4rem)] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          )}
        >
          <div className="space-y-1 px-4 pb-8 pt-4 sm:px-6">
            {navigation.landing.map((item, i) => (
              <Link
                key={i}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-medium text-gray-700 transition hover:bg-gray-50"
              >
                {item.label}
              </Link>
            ))}
            <div>
              <button
                type="button"
                onClick={() => setOpenSubmenu(!openSubmenu)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-gray-700 transition hover:bg-gray-50"
                aria-expanded={openSubmenu}
              >
                Category
                <ChevronDown
                  size={18}
                  className={cn(
                    "transition-transform duration-200",
                    openSubmenu && "rotate-180"
                  )}
                />
              </button>

              <div
                className={cn(
                  "overflow-hidden transition-[max-height] duration-300",
                  openSubmenu ? "max-h-96" : "max-h-0"
                )}
              >
                <div className="ml-3 space-y-1 border-l border-gray-200 pl-3">
                  {Categories.map((sub, j) => (
                    <Link
                      key={j}
                      href={sub.href ? sub.href : "#services"}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
                    >
                      <span>{sub.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {/* Mobile CTA */}
            <div className="pt-4 grid">
              <Link
                href="tel:234 810 871 3152"
                className="uppercase text-center text-sm w-full bg-linear-to-r from-primary via-primary to-white px-4 py-3 text-white font-semibold duration-200"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Cart Dark Backdrop */}
      {isCartOpen && (
        <div
          onClick={() => setIsCartOpen(false)}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs transition-opacity"
        />
      )}

      {/* Right-Side Shopping Cart Side Container */}
      <div
        className={cn(
          "fixed top-0 right-0 z-50 h-screen w-full sm:w-80 md:w-96 bg-white p-6 shadow-2xl transition-transform duration-300 ease-in-out flex flex-col justify-between",
          isCartOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between border-b pb-4">
          <div className="font-bold text-lg text-gray-900">Shopping Cart</div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1 rounded-md text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition-colors"
            aria-label="Close cart"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Scrollable Cart Content */}
        <div className="flex-1 overflow-y-auto py-4">
          <ShoppingCartModal />
        </div>
      </div>
    </>
  );
};

export default Header;
