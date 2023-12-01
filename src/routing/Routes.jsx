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
import Login from '../components/logins/Login/Login';
import Register from '../components/logins/Register/Register';
import SendResponse from '../components/SendResponse/SendResponse';
import PrivateRoute from './PrivateRoute';
import Enrolment from '../components/Enrolment/Enrolment';
import Profile from '../components/Profile/Profile';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'chef/:chefId',
                element: <Containers></Containers>,
                loader: ({ params }) => fetch(`http://localhost:5000/chef/${params.chefId}`),
            },
            {
                path: 'recipe-details/:recipeId',
                element: <RecipeDetails></RecipeDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/recipe/${params.recipeId}`),
            },
            {
                path: 'submit-recipe',
                element: <SubmitRecipe></SubmitRecipe>
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'period/:time',
                element: <BreakfastLunchDinner></BreakfastLunchDinner>,
                loader: ({ params }) => fetch(`http://localhost:5000/period/${params.time}`)
            },
            {
                path: 'chefs',
                element: <Chefs></Chefs>,
                loader: () => fetch(`http://localhost:5000/chefs`)
            },
            {
                path: 'chef-details/:chefId',
                element: <ChefDetails></ChefDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/chef-details/${params.chefId}`)
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'blogs',
                element: <h2 className='text-center'>Coming Soon</h2>
            },
            {
                path: 'send-response',
                element: <PrivateRoute><SendResponse></SendResponse></PrivateRoute>
            },
            {
                path: 'terms-conditions',
                element: <h2 className='text-center'>Coming Soon</h2>
            },
            {
                path: 'enrollment',
                element: <PrivateRoute><Enrolment></Enrolment></PrivateRoute>
            },
            {
                path: 'profile',
                element: <Profile></Profile>
            },
            {
                path: '*',
                element: <h3>Error Page</h3>
            },

        ]
    },


])
export default router;