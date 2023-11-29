import React, { useEffect, useState } from 'react';
import HomeCard from '../HomeCard/HomeCard';
import './RecipeHome.css'
const RecipesHome = () => {
    const [topRecipes, setTopRecipes] = useState([]);
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/recipes')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, []);
    useEffect(() => {
        setTopRecipes(recipes.slice(2, 8))
    }, [recipes])
    return (
        <div>
            <h3 className='mt-5 p-1' style={{ fontFamily: 'DM Serif Display serif' }}>Top Rated Recipes</h3>
            <div className='p-3 recipe-home' >
                {
                    topRecipes.map(recipe => <HomeCard key={recipe.id} recipe={recipe}></HomeCard>)
                }
            </div>
        </div>

    );
};

export default RecipesHome;