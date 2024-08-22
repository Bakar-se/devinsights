"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { CodeXml, Github, Linkedin, Menu } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/config/site";

export function MobNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="w-10 px-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Theme</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <MobileLink
          onOpenChange={setOpen}
          href="/"
          className="flex items-center text-2xl font-semibold text-primary"
        >
          <CodeXml height={32} width={32} className="mr-2" />
          <span>{siteConfig.name}</span>
        </MobileLink>
        <div className="flex flex-col gap-3 mt-3">
          <MobileLink onOpenChange={setOpen} href="/blog">
            Blog
          </MobileLink>
          <MobileLink onOpenChange={setOpen} href="/about">
            About
          </MobileLink>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className="flex items-center"
          >
            <Github /> <span className="ml-2">GitHub</span>
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.linkedin}
            className="flex items-center"
          >
            <Linkedin /> <span className="ml-2">Linkedin</span>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  children,
  className,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}
