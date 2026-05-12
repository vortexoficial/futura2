import { useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navItems, whatsAppUrl } from "@/src/data/site-content";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/src/components/premium";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });
  const linkRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elements = navItems
      .map((item) => document.querySelector(item.href))
      .filter((element): element is Element => Boolean(element));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveHref(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const activeIndex = navItems.findIndex((item) => item.href === activeHref);
    const element = linkRefs.current[activeIndex];
    const parent = element?.parentElement?.parentElement;
    if (!element || !parent) return;

    const updateIndicator = () => {
      const elementRect = element.getBoundingClientRect();
      const parentRect = parent.getBoundingClientRect();
      setIndicator({
        left: elementRect.left - parentRect.left,
        width: elementRect.width,
        opacity: 1,
      });
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeHref]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-4"
    >
      <nav
        className={cn(
          "mx-auto flex h-16 w-full max-w-7xl items-center justify-between rounded-full border px-3 transition-all duration-300 sm:px-4",
          scrolled
            ? "border-white/14 bg-[#05070D]/82 shadow-[0_18px_80px_rgba(0,0,0,0.36)] backdrop-blur-2xl"
            : "border-white/10 bg-white/[0.045] backdrop-blur-xl"
        )}
        aria-label="Main navigation"
      >
        <a href="#home" className="flex items-center gap-3" aria-label="FUTURA DESIGN home">
          <span className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-violet-600 via-purple-400 to-purple-700 text-sm font-black text-white shadow-[0_0_32px_rgba(139,92,246,0.45)]">
            F
          </span>
          <span className="text-xs font-semibold tracking-[0.16em] text-white min-[420px]:text-sm min-[420px]:tracking-[0.22em]">
            FUTURA DESIGN
          </span>
        </a>

        <NavigationMenu className="hidden xl:flex">
          <NavigationMenuList className="relative">
            <motion.span
              aria-hidden="true"
              className="absolute top-1/2 h-9 -translate-y-1/2 rounded-full border border-white/10 bg-white/[0.07]"
              animate={indicator}
              transition={{ type: "spring", stiffness: 420, damping: 34 }}
            />
            {navItems.map((item, index) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink asChild>
                  <a
                    ref={(node) => {
                      linkRefs.current[index] = node;
                    }}
                    href={item.href}
                    className="group/nav-link relative z-10 rounded-full px-3 py-2 text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    {item.label}
                    <span className="absolute inset-x-3 bottom-1 h-px scale-x-0 bg-gradient-to-r from-violet-500 to-violet-300 transition-transform duration-300 group-hover/nav-link:scale-x-100" />
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden xl:block">
          <MagneticButton href={whatsAppUrl} className="h-10 px-4">
            Request diagnosis
          </MagneticButton>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="secondary" size="icon" className="xl:hidden" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>FUTURA DESIGN</SheetTitle>
              <SheetDescription>
                Design, estratégia e presença digital com clareza.
              </SheetDescription>
            </SheetHeader>
            <div className="mt-10 grid gap-3">
              {navItems.map((item, index) => (
                <SheetClose asChild key={item.href}>
                  <motion.a
                    href={item.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * index }}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-slate-200"
                  >
                    {item.label}
                  </motion.a>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <a
                  href={whatsAppUrl}
                  className="mt-4 rounded-full bg-gradient-to-r from-violet-600 via-purple-500 to-purple-700 px-5 py-3 text-center text-sm font-semibold text-white"
                >
                  Request diagnosis
                </a>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  );
}
