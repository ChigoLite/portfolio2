"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Focus trapping for mobile menu
  useEffect(() => {
    if (isMenuOpen && menuRef.current) {
      const focusableElements = menuRef.current.querySelectorAll(
        'a[href], button, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[
        focusableElements.length - 1
      ] as HTMLElement;

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Tab") {
          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
        if (e.key === "Escape") {
          setIsMenuOpen(false);
        }
      };

      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const navItems = [
    { name: "Home", href: "#home", description: "Back to the homepage" },
    { name: "About", href: "#about", description: "Learn more about me" },
    {
      name: "Skills",
      href: "#skills",
      description: "View my technical expertise",
    },
    {
      name: "Experience",
      href: "#experience",
      description: "Explore my work history",
    },
    {
      name: "Projects",
      href: "#projects",
      description: "See my latest projects",
    },
    { name: "Contact", href: "#contact", description: "Get in touch" },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, delay: i * 0.1, ease: "easeOut" },
    }),
  };

  if (!mounted) return null;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-base-200/50 bg-base-100/95 backdrop-blur-md shadow-md">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 group-hover:shadow-lg transition-all duration-300">
            <Monitor className="h-6 w-6 text-primary group-hover:text-accent" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:from-primary/80 group-hover:to-accent/80 transition-all duration-300">
              ChigoLite
            </span>
            <span className="text-xs text-base-content/60 hidden sm:block">
              Innovative Web Solutions
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-8">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="tooltip tooltip-bottom"
              data-tip={item.description}
            >
              <Link
                href={item.href}
                className={`relative text-sm font-medium transition-all duration-300 ${
                  pathname === item.href
                    ? "text-primary"
                    : "text-base-content/80 hover:text-primary hover:scale-105"
                }`}
                aria-current={pathname === item.href ? "page" : undefined}
                aria-label={item.description}
              >
                {item.name}
                <span
                  className={`absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${
                    pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            </div>
          ))}
        </nav>

        {/* Theme Toggle & Mobile Menu Button */}
        <div className="flex items-center space-x-4" aria-live="polite">
          <div
            className="tooltip tooltip-bottom"
            data-tip={`Switch to ${
              resolvedTheme === "dark" ? "light" : "dark"
            } theme`}
          >
            <button
              onClick={toggleTheme}
              className="btn btn-ghost p-2 rounded-lg bg-base-200/50 hover:bg-base-200 transition-all duration-200 hover:scale-110"
              aria-label={`Switch to ${
                resolvedTheme === "dark" ? "light" : "dark"
              } theme`}
            >
              {resolvedTheme === "dark" ? (
                <Sun className="h-6 w-6 text-primary transition-transform duration-300" />
              ) : (
                <Moon className="h-6 w-6 text-primary transition-transform duration-300" />
              )}
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="btn btn-ghost p-2 rounded-lg bg-base-200/50 hover:bg-base-200 transition-all duration-200 hover:scale-110"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-primary" />
              ) : (
                <Menu className="h-6 w-6 text-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              ref={menuRef}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
              className="absolute top-16 left-0 right-0 bg-base-100/95 backdrop-blur-md border-b border-base-200/50 shadow-lg md:hidden"
            >
              <div className="container py-6 px-4 sm:px-6 flex flex-col space-y-3">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    variants={linkVariants}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      href={item.href}
                      className={`block py-2 text-base font-medium rounded-lg transition-all duration-200 ${
                        pathname === item.href
                          ? "text-primary bg-base-200/50"
                          : "text-base-content/90 hover:text-primary hover:bg-base-200/50"
                      } px-3`}
                      onClick={() => setIsMenuOpen(false)}
                      aria-current={pathname === item.href ? "page" : undefined}
                      aria-label={item.description}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
