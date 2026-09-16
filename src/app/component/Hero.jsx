import Image from "next/image";
import Link from "next/link";
import { Search, ArrowRight, ChefHat } from "lucide-react";
import { RecipeApi } from "../recipes/page";
import RecipeCard from "./RecipeCard";

export default async function Hero () {

    const Apis = await RecipeApi()
    console.log(Apis);

  return (
    <>
    <div>
      <section className="relative overflow-hidden mt-10 bg-orange-50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 lg:px-8 lg:py-24">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
              <ChefHat size={18} />
              Discover Delicious Recipes
            </div>

            {/* Heading */}
            <h1 className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Cook Something
              <span className="text-orange-500"> Amazing </span>
              Today 🍳
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-lg text-lg leading-8 text-gray-600">
              Explore delicious recipes from around the world. Find easy, tasty
              and inspiring meals that you can make at home.
            </p>

            {/* Search */}
            <div className="mt-8 flex max-w-lg items-center rounded-2xl border border-gray-200 bg-white p-2 shadow-lg">
              <Search className="ml-3 text-gray-400" size={22} />

              <input
                type="text"
                placeholder="Search for a recipe..."
                className="w-full bg-transparent px-3 py-3 text-gray-700 outline-none"
              />

              <button className="rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600">
                Search
              </button>
            </div>

            {/* CTA */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href="/recipes"
                className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-gray-800"
              >
                Explore Recipes
                <ArrowRight size={18} />
              </Link>

              <span className="text-sm text-gray-500">
                1000+ recipes to explore
              </span>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative mx-auto w-full max-w-xl">
            {/* Background decoration */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange-200 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-yellow-200 blur-3xl" />

            {/* Image */}
            <div className="relative overflow-hidden rounded-4xl shadow-2xl">
              <Image
                src="https://cdn.dummyjson.com/recipe-images/1.webp"
                alt="Delicious Margherita Pizza"
                width={700}
                height={500}
                priority
                className="h-100 w-full object-cover"
              />

              {/* Floating Card */}
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Featured Recipe</p>

                    <h3 className="mt-1 text-lg font-bold text-gray-900">
                      Classic Margherita Pizza
                    </h3>
                  </div>

                  <div className="rounded-xl bg-orange-100 px-3 py-2 text-sm font-bold text-orange-600">
                    ⭐ 4.6
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {
            Apis && Apis.slice(2, 10).map(recipe => <RecipeCard key={recipe.id} recipe={recipe}></RecipeCard>)
        }   
    </div>
  </>
  );
}
