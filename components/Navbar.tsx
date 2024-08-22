import Link from "next/link";
import React from "react";
import { ModeToggle } from "./theme-button";
import { CodeXml, Github, Linkedin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { MainNav } from "./MainNav";
import { MobNav } from "./MobNav";

const Navbar = () => {
  return (
    <header className="z-10 sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 md:h-16 max-w-screen-2xl items-center">
        <div className="flex flex-1 items-center justify-between space-x-2">
          <Link
            href="/"
            className="flex items-center text-2xl font-semibold text-primary"
          >
            <CodeXml height={32} width={32} className="mr-2" />
            <span className="hidden md:block">DevInsights</span>
          </Link>
          <MainNav />

          <div className="hidden md:flex items-center gap-2 md:gap-4">
            <Link href={siteConfig.links.github} target="_blank">
              <Github />
            </Link>
            <Link href={siteConfig.links.linkedin} target="_blank">
              <Linkedin />
            </Link>
            <ModeToggle />
          </div>
          <MobNav />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
