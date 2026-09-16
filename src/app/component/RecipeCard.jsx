import Image from "next/image";
import { Clock, Users, Star, Flame, ChefHat } from "lucide-react";
import Link from "next/link";

export default function RecipeCard({ recipe }) {
  
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={recipe.image}
          alt={recipe.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Difficulty */}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-green-600 backdrop-blur">
          {recipe.difficulty}
        </span>

        {/* Rating */}
        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-black/60 px-3 py-1 text-sm font-medium text-white backdrop-blur">
          <Star size={15} fill="currentColor" />
          {recipe.rating}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Cuisine & Meal */}
        <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
          <ChefHat size={16} />
          <span>{recipe.cuisine}</span>
          <span>•</span>
          <span>{recipe.mealType.join(", ")}</span>
        </div>

        {/* Title */}
        <h2 className="mb-3 text-xl font-bold text-gray-900">{recipe.name}</h2>

        {/* Tags */}
        <div className="mb-5 flex flex-wrap gap-2">
          {recipe.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Recipe Info */}
        <div className="grid grid-cols-3 gap-3 border-y border-gray-100 py-4">
          <div className="flex flex-col items-center text-center">
            <Clock size={18} className="mb-1 text-orange-500" />
            <span className="text-xs text-gray-500">Prep</span>
            <span className="text-sm font-semibold text-gray-800">
              {recipe.prepTimeMinutes} min
            </span>
          </div>

          <div className="flex flex-col items-center border-x border-gray-100 text-center">
            <Flame size={18} className="mb-1 text-orange-500" />
            <span className="text-xs text-gray-500">Cook</span>
            <span className="text-sm font-semibold text-gray-800">
              {recipe.cookTimeMinutes} min
            </span>
          </div>

          <div className="flex flex-col items-center text-center">
            <Users size={18} className="mb-1 text-orange-500" />
            <span className="text-xs text-gray-500">Serves</span>
            <span className="text-sm font-semibold text-gray-800">
              {recipe.servings}
            </span>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">Calories</p>
            <p className="font-bold text-gray-900">
              {recipe.caloriesPerServing} kcal
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs text-gray-500">Reviews</p>
            <p className="font-semibold text-gray-800">{recipe.reviewCount}</p>
          </div>
        </div>

        {/* Button */}
        <Link href={`/recipes/${recipe.id}`}>
          <button className="mt-5 w-full rounded-xl bg-orange-500 px-4 py-3 font-semibold text-white transition hover:bg-orange-600">
            View Recipe
          </button>
        </Link>
      </div>
    </article>
  );
}
