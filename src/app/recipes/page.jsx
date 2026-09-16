import React from 'react';
import RecipeCard from '../component/RecipeCard';

export const RecipeApi = async() => {
    const recipes = await fetch("https://dummyjson.com/recipes")

    const res = await recipes.json()
    const allRecipes = res.recipes
    return allRecipes
}

const Recipes = async() => {
    const recipes = await fetch("https://dummyjson.com/recipes")

    const res = await recipes.json()
    const allRecipes = res.recipes
    console.log(allRecipes);
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-5/6 mx-auto'>
            {
                allRecipes.map(recipe => <RecipeCard recipe={recipe} key={recipe.id}></RecipeCard>)
            }
        </div>
    );
};

export default Recipes;