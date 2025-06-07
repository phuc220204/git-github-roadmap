"use client";

import { GitBranch, Menu, Github } from "lucide-react";
import { SimpleThemeToggle } from "@/components/simple-theme-toggle";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { BookmarksDialog } from "@/components/bookmarks-dialog";
import { NotesManager } from "@/components/notes-manager";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <GitBranch className="h-6 w-6" />
          <span className="font-bold hidden sm:inline-block">Git & GitHub</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <NotesManager />
          <BookmarksDialog />
          <Button variant="outline" size="sm" asChild>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          </Button>
          <SimpleThemeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center space-x-2 md:hidden">
          <NotesManager />
          <BookmarksDialog />
          <SimpleThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <div className="flex flex-col h-full py-6">
                <div className="flex items-center mb-6">
                  <GitBranch className="h-6 w-6 mr-2" />
                  <span className="font-bold">Git & GitHub</span>
                </div>
                <nav className="flex flex-col space-y-4">
                  <Link
                    href="#day1"
                    className="px-2 py-2 hover:bg-secondary rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Ngày 1
                  </Link>
                  <Link
                    href="#day2"
                    className="px-2 py-2 hover:bg-secondary rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Ngày 2
                  </Link>
                  <Link
                    href="#day3"
                    className="px-2 py-2 hover:bg-secondary rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Ngày 3
                  </Link>
                  <Link
                    href="#day4"
                    className="px-2 py-2 hover:bg-secondary rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Ngày 4
                  </Link>
                  <Link
                    href="#day5"
                    className="px-2 py-2 hover:bg-secondary rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Ngày 5
                  </Link>
                  <Link
                    href="#day6"
                    className="px-2 py-2 hover:bg-secondary rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Ngày 6
                  </Link>
                  <Link
                    href="#guide"
                    className="px-2 py-2 hover:bg-secondary rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Hướng dẫn đẩy dự án
                  </Link>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-2 flex items-center gap-2 hover:bg-secondary rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <Github className="h-4 w-4" />
                    <span>GitHub</span>
                  </a>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
