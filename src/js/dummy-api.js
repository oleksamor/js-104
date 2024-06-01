import axios from 'axios';

axios.defaults.baseURL = 'https://dummyjson.com/';


export async function getAllRecipes() {
    const { data } = await axios("recipes");
    return data;
}

export async function getRecipeById(recipeId) {
    const {data} = await axios(`recipes/${recipeId}`);
    return data;
}