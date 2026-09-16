import Link from "next/link";
import {
  ChefHat,
  Mail,
  ArrowRight,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-20 bg-gray-950 text-gray-300">

      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-12 md:flex-row lg:px-8">

          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white">
                <ChefHat size={22} />
              </div>

              <h2 className="text-2xl font-bold text-white">
                Recipe<span className="text-orange-500">Hub</span>
              </h2>
            </div>

            <p className="mt-3 max-w-md text-sm leading-6 text-gray-400">
              Get delicious recipes, cooking inspiration, and new food ideas
              delivered straight to your inbox.
            </p>
          </div>

          {/* Newsletter */}
          <div className="w-full max-w-md">
            <div className="flex rounded-xl border border-gray-700 bg-gray-900 p-1">
              <div className="flex flex-1 items-center">
                <Mail className="ml-3 text-gray-500" size={18} />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent px-3 py-3 text-sm text-white outline-none placeholder:text-gray-500"
                />
              </div>

              <button className="flex items-center gap-2 rounded-lg bg-orange-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-orange-600">
                Subscribe
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white">
                <ChefHat size={22} />
              </div>

              <span className="text-xl font-bold text-white">
                Recipe<span className="text-orange-500">Hub</span>
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-6 text-gray-400">
              Discover delicious recipes from around the world and turn
              everyday ingredients into something amazing.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 transition hover:bg-orange-500 hover:text-white"
              >
                <FaFacebookF size={17} />
              </Link>

              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 transition hover:bg-orange-500 hover:text-white"
              >
                <FaInstagram size={17} />
              </Link>

              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 transition hover:bg-orange-500 hover:text-white"
              >
                <FaTwitter size={17} />
              </Link>

              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 transition hover:bg-orange-500 hover:text-white"
              >
                <FaYoutube size={17} />
              </Link>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-5 font-semibold text-white">
              Explore
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-orange-500"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/recipes"
                  className="transition hover:text-orange-500"
                >
                  All Recipes
                </Link>
              </li>

              <li>
                <Link
                  href="/categories"
                  className="transition hover:text-orange-500"
                >
                  Categories
                </Link>
              </li>

              <li>
                <Link
                  href="/popular"
                  className="transition hover:text-orange-500"
                >
                  Popular Recipes
                </Link>
              </li>
            </ul>
          </div>

          {/* Recipe Categories */}
          <div>
            <h3 className="mb-5 font-semibold text-white">
              Categories
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="transition hover:text-orange-500">
                  Breakfast
                </Link>
              </li>

              <li>
                <Link href="#" className="transition hover:text-orange-500">
                  Lunch
                </Link>
              </li>

              <li>
                <Link href="#" className="transition hover:text-orange-500">
                  Dinner
                </Link>
              </li>

              <li>
                <Link href="#" className="transition hover:text-orange-500">
                  Desserts
                </Link>
              </li>

              <li>
                <Link href="#" className="transition hover:text-orange-500">
                  Vegetarian
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 font-semibold text-white">
              Company
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="transition hover:text-orange-500">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="#" className="transition hover:text-orange-500">
                  Contact
                </Link>
              </li>

              <li>
                <Link href="#" className="transition hover:text-orange-500">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="#" className="transition hover:text-orange-500">
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link href="#" className="transition hover:text-orange-500">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-gray-500 sm:flex-row lg:px-8">

          <p>
            © {new Date().getFullYear()} RecipeHub. All rights reserved.
          </p>

          <p>
            Made with <span className="text-red-500">♥</span> for food lovers
          </p>

        </div>
      </div>

    </footer>
  );
}