import React from 'react';
import {
    createBrowserRouter, 
  } from "react-router-dom";
import Main from '../layouts/Main/Main'; 
import Home from '../components/Home/Home/Home';
import Containers from '../components/recipesRoute/Containers/Containers'; 
import RecipeDetails from '../components/recipesRoute/RecipeDetails/RecipeDetails';
import SubmitRecipe from '../components/SubmitRecipe/SubmitRecipe';
import About from '../components/About/About';
import BreakfastLunchDinner from '../components/BreakfastLunchDinner/BreakfastLunchDinner';
import Chefs from '../components/chefs/Chefs/Chefs';
import ChefDetails from '../components/chefs/ChefDetails/ChefDetails';
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
            },
            {
                path:'about',
                element: <About></About>
            },
            {
                path:'period/:time',
                element: <BreakfastLunchDinner></BreakfastLunchDinner>,
                loader: ({params})=> fetch(`http://localhost:5000/period/${params.time}`)
            },
            {
                path:'chefs',
                element:<Chefs></Chefs>,
                loader:()=> fetch(`http://localhost:5000/chefs`)
            },
            {
                path:'chef-details/:chefId',
                element:<ChefDetails></ChefDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/chef-details/${params.chefId}`)
            },
            {
                path:'*',
                element: <h3>Error Page</h3>
            },
             
        ]
    },
    {
        path:'blogs',
        element: <h2 className='text-center'>Coming Soon</h2>
    }

])
export default router;