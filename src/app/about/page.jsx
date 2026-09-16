import Image from "next/image";
import { ChefHat, Heart, Leaf, Utensils } from "lucide-react";
import Link from "next/link";

export default function About() {

 

  return (
    <section className="bg-orange-50/40 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem]">
              <Image
                src="https://cdn.dummyjson.com/recipe-images/15.webp"
                alt="Delicious food"
                width={700}
                height={550}
                className="h-125 w-full object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-white p-5 shadow-xl sm:right-6">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-orange-100 p-3">
                  <Heart className="text-orange-500" size={22} />
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">10K+</p>
                  <p className="text-sm text-gray-500">Happy Food Lovers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
              About Us
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
              Discover the Joy of{" "}
              <span className="text-orange-500">Good Food</span>
            </h2>

            <p className="mt-6 leading-7 text-gray-600">
              Welcome to FoodRecipe, your place for delicious, simple, and
              inspiring recipes. We make it easy to discover new dishes and
              bring your favorite flavors into your kitchen.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              Whether you are a beginner or an experienced home chef, our
              recipes are created to make cooking enjoyable and stress-free.
            </p>

            {/* Features */}
            <div className="mt-8 grid grid-cols-2 gap-5">
              <div className="flex gap-3">
                <ChefHat className="mt-1 text-orange-500" size={25} />
                <div>
                  <h3 className="font-semibold text-gray-900">Easy Recipes</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Simple steps for everyone.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Leaf className="mt-1 text-green-600" size={25} />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Fresh Ingredients
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Delicious and healthy ideas.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Utensils className="mt-1 text-orange-500" size={25} />
                <div>
                  <h3 className="font-semibold text-gray-900">Tasty Meals</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Recipes for every mood.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Heart className="mt-1 text-red-500" size={25} />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Made With Love
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Food that brings people together.
                  </p>
                </div>
              </div>
            </div>

            {/* Button */}
            <Link href={'/recipes'}>
              <button className="mt-8 rounded-full bg-orange-500 px-7 py-3 font-semibold text-white transition hover:bg-orange-600">
                Explore Recipes →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
