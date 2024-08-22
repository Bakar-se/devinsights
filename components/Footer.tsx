import { siteConfig } from "@/config/site";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div className="mb-6 mt-14 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:ironsamurai786@gmail.com"
          >
            <span className="sr-only">Mail</span>
            <Mail className="h-6 w-6" />
          </a>
          <a target="_blank" rel="noreferrer" href={siteConfig.links.linkedin}>
            <span className="sr-only">Linkedin</span>
            <Linkedin className="h-6 w-6" />
          </a>
          <a target="_blank" rel="noreferrer" href={siteConfig.links.github}>
            <span className="sr-only">GitHub</span>
            <Github className="h-6 w-6" />
          </a>
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-muted-foreground">
          <Link href={siteConfig.links.linkedin} target="_blank">
            {siteConfig.author}
          </Link>
        </div>
      </div>
    </footer>
  );
}
