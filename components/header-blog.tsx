"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, Phone, X, UserRoundSearch, BookOpenCheck } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-normal tracking-tight">
            Lindon Johnson
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-light hover:text-foreground/60 transition-colors"
            >
              INÍCIO
            </Link>
            <Link
              href="#sobre"
              className="text-sm font-light hover:text-foreground/60 transition-colors"
            >
              SOBRE MIM
            </Link>

            <Link
              href="#livros"
              className="text-sm font-light hover:text-foreground/60 transition-colors "
            >
              LIVROS
            </Link>

            <Link
              href="https://wa.me/89994118783"
              target="_blank"
              className="text-sm font-light hover:text-foreground/60 transition-colors "
            >
              <Button
                variant="outline"
                size="sm"
                className="text-sm font-light bg-transparent cursor-pointer"
              >
                <UserRoundSearch />
                CONTATO
              </Button>
            </Link>
          </nav>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      <div
        className={` md:hidden left-0 right-0 top-50 bottom-0 bg-background/20 backdrop-blur-md
 z-40 transition-all duration-300  ${
   isMenuOpen ? "translate-x-0" : "translate-x-full fixed"
 }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8 px-4">
          <Link
            href="/"
            className="text-2xl font-light hover:text-foreground/60 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            INÍCIO
          </Link>
          <Link
            href="#sobre"
            className="text-2xl font-light hover:text-foreground/60 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            SOBRE MIM
          </Link>
          <Link
            href="#newsletter"
            className="text-2xl font-light hover:text-foreground/60 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            LIVROS
          </Link>

          <Link
            href="https://wa.me/5599999999999"
            target="_blank"
            onClick={() => setIsMenuOpen(false)}
          >
            <Button
              variant="outline"
              size="lg"
              className="text-lg font-light bg-transparent mt-4"
            >
              <UserRoundSearch />
              CONTATO
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
