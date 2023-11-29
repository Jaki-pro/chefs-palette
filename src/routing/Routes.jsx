import React from 'react';
import {
    createBrowserRouter, 
  } from "react-router-dom";
import Main from '../layouts/Main/Main'; 
import Home from '../components/Home/Home/Home';
import Containers from '../components/recipesRoute/Containers/Containers'; 
import RecipeDetails from '../components/recipesRoute/RecipeDetails/RecipeDetails';
import SubmitRecipe from '../components/SubmitRecipe/SubmitRecipe';
const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'chef/:chefId',
                element:<Containers></Containers>,
                loader:({params})=> fetch(`http://localhost:5000/chef/${params.chefId}`),
            },
            {
                path:'recipe-details/:recipeId', 
                element: <RecipeDetails></RecipeDetails>,
                loader:({params})=> fetch(`http://localhost:5000/recipe/${params.recipeId}`),
            },
            {
                path:'submit-recipe',
                element: <SubmitRecipe></SubmitRecipe>
            }
        ]
    }
])
export default router;