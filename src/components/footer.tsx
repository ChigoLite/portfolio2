import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">ChigoLite</span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Software Engineer with over 4 years of experience
            </p>
          </div>

          <div className="flex space-x-4">
            <Link
              href="https://github.com/ChigoLite"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 hover:text-primary transition-colors" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/aka-cornelius-489835252"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 hover:text-primary transition-colors" />
            </Link>
            <Link
              href="https://x.com/aka_cornelius?t=TA0V2CInTVDwcIMQLyFkgg&s=09"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5 hover:text-primary transition-colors" />
            </Link>
            <Link href="mailto:chrystnelson@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5 hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Bob. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
