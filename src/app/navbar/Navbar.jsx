"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChefHat,
  Search,
  Heart,
  Menu,
  X,
  Utensils,
} from "lucide-react";
import { useState } from "react";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Recipes",
    href: "/recipes",
  },
  {
    name: "Categories",
    href: "/categories",
  },
  {
    name: "About",
    href: "/about",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-orange-100 bg-orange-50 backdrop-blur">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white shadow-sm">
            <ChefHat size={23} />
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight text-gray-900">
              Recipe<span className="text-orange-500">Hub</span>
            </h1>

            <p className="hidden text-[10px] font-medium text-gray-400 sm:block">
              Discover. Cook. Enjoy.
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative rounded-lg px-4 py-2 text-sm font-medium transition ${
                isActive(link.href)
                  ? "text-orange-600"
                  : "text-gray-600 hover:bg-orange-50 hover:text-orange-600"
              }`}
            >
              {link.name}

              {/* Active Indicator */}
              {isActive(link.href) && (
                <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-orange-500" />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          
          {/* Search */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition hover:bg-orange-50 hover:text-orange-500"
            aria-label="Search recipes"
          >
            <Search size={20} />
          </button>

          {/* Favorites */}
          <Link
            href="/favorites"
            className="flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition hover:bg-orange-50 hover:text-orange-500"
            aria-label="Favorite recipes"
          >
            <Heart size={20} />
          </Link>

          {/* CTA */}
          <Link
            href="/recipes"
            className="flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600 hover:shadow-md"
          >
            <Utensils size={17} />
            Explore Recipes
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition hover:bg-orange-50 hover:text-orange-500 md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-orange-100 bg-white px-4 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm font-medium transition ${
                  isActive(link.href)
                    ? "bg-orange-50 text-orange-600"
                    : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="my-2 h-px bg-gray-100" />

            {/* Mobile Search */}
            <button
              type="button"
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600"
            >
              <Search size={19} />
              Search Recipes
            </button>

            {/* Mobile Favorites */}
            <Link
              href="/favorites"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600"
            >
              <Heart size={19} />
              Favorite Recipes
            </Link>

            {/* Mobile CTA */}
            <Link
              href="/recipes"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              <Utensils size={18} />
              Explore Recipes
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

