"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function MainNav() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link
        href="/blog"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary hidden md:inline-block",
          pathname === "/blog" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Blog
      </Link>
      <Link
        href="/about"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary hidden md:inline-block",
          pathname === "/about" ? "text-foreground" : "text-foreground/60"
        )}
      >
        About
      </Link>
    </nav>
  );
}
