
import axios from 'axios';

export const RECEIVE_RECIPES = 'RECEIVE_RECIPES';
export const LOAD_RECIPES = 'LOAD_RECIPES';
export const SELECT_RECIPE = 'SELECT_RECIPE';

//plain vanilla action creator
export const receiveRecipes = (recipes) => {
  return {
    type: RECEIVE_RECIPES,
    receivedRecipes: recipes
  }
};
export const selectRecipe = (recipe) => {
  return {
    type: SELECT_RECIPE,
    selectedRecipe: recipe
  }
}

//this is thunk creator, it returns a function(a thunk) instead of an action
export const loadRecipes = () => {
  return (dispatch) => {
    axios.get('/api/recipes')
    .then(res => res.data)
    .then(recipes => dispatch(receiveRecipes(recipes)))
    .catch(err => console.error(err));
  }
}
//this is thunk creator for fetching single recipe
export const selectRecipeAsync = (recipeId) => {
  return (dispatch) => {
    axios.get(`/api/recipes/${recipeId}`)
    .then(res => res.data)
    .then(recipe => {
       dispatch(selectRecipe(recipe))
       })
    .catch(err => console.error(err));
  }
}

