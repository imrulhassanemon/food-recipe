import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  Flame,
  Users,
  Star,
  ChefHat,
  Check,
} from "lucide-react";

export default async function RecipeDetails({ params }) {
  // Get recipe ID from URL
  const { recipeId } = await params;

  // Fetch recipe
  const response = await fetch(
    `https://dummyjson.com/recipes/${recipeId}`
  );

  const recipe = await response.json();

  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <div className="mx-auto max-w-6xl px-6">

        {/* Back Button */}
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-orange-500"
        >
          <ArrowLeft size={18} />
          Back to Recipes
        </Link>

        {/* Main Card */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-lg">

          {/* Hero Section */}
          <div className="grid lg:grid-cols-2">

            {/* Image */}
            <div className="relative min-h-87.5 lg:min-h-125">
              <Image
                src={recipe.image}
                alt={recipe.name}
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Recipe Information */}
            <div className="flex flex-col justify-center p-8 lg:p-12">

              {/* Tags */}
              <div className="mb-4 flex flex-wrap gap-2">
                {recipe.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 lg:text-5xl">
                {recipe.name}
              </h1>

              {/* Cuisine */}
              <div className="mt-4 flex items-center gap-2 text-gray-500">
                <ChefHat size={20} />
                <span>{recipe.cuisine} Cuisine</span>
              </div>

              {/* Rating */}
              <div className="mt-5 flex items-center gap-2">
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star size={20} fill="currentColor" />
                  <span className="font-bold">{recipe.rating}</span>
                </div>

                <span className="text-gray-500">
                  ({recipe.reviewCount} reviews)
                </span>
              </div>

              {/* Recipe Stats */}
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">

                <div className="rounded-xl bg-gray-50 p-4 text-center">
                  <Clock className="mx-auto mb-2 text-orange-500" size={22} />
                  <p className="text-xs text-gray-500">Prep Time</p>
                  <p className="font-bold text-gray-900">
                    {recipe.prepTimeMinutes} min
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-4 text-center">
                  <Flame className="mx-auto mb-2 text-orange-500" size={22} />
                  <p className="text-xs text-gray-500">Cook Time</p>
                  <p className="font-bold text-gray-900">
                    {recipe.cookTimeMinutes} min
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-4 text-center">
                  <Users className="mx-auto mb-2 text-orange-500" size={22} />
                  <p className="text-xs text-gray-500">Servings</p>
                  <p className="font-bold text-gray-900">
                    {recipe.servings}
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-4 text-center">
                  <Flame className="mx-auto mb-2 text-orange-500" size={22} />
                  <p className="text-xs text-gray-500">Calories</p>
                  <p className="font-bold text-gray-900">
                    {recipe.caloriesPerServing}
                  </p>
                </div>

              </div>

              {/* Difficulty */}
              <div className="mt-6">
                <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-600">
                  Difficulty: {recipe.difficulty}
                </span>
              </div>

            </div>
          </div>

          {/* Details Section */}
          <div className="grid gap-10 border-t border-gray-100 p-8 lg:grid-cols-3 lg:p-12">

            {/* Ingredients */}
            <section className="lg:col-span-1">
              <h2 className="mb-5 text-2xl font-bold text-gray-900">
                Ingredients
              </h2>

              <ul className="space-y-3">
                {recipe.ingredients?.map((ingredient, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 rounded-xl bg-gray-50 p-3"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white">
                      <Check size={13} />
                    </span>

                    <span className="text-gray-700">
                      {ingredient}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Instructions */}
            <section className="lg:col-span-2">
              <h2 className="mb-5 text-2xl font-bold text-gray-900">
                Cooking Instructions
              </h2>

              <div className="space-y-5">
                {recipe.instructions?.map((instruction, index) => (
                  <div
                    key={index}
                    className="flex gap-4"
                  >
                    {/* Step Number */}
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold text-white">
                      {index + 1}
                    </div>

                    {/* Instruction */}
                    <p className="pt-1 text-base leading-7 text-gray-600">
                      {instruction}
                    </p>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}