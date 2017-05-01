import {RECEIVE_RECIPES, SELECT_RECIPE, SET_NEW_RECIPES, SET_CURRENT} from './action-creators';

  const initialState = {
                      allRecipes: [],
                      currentWeekRecipes: [],
                      newRecipes: [],
                      selectedRecipe: {}
                      };

  export default (state = initialState, action) => {
   const newState = Object.assign({}, state);
           switch(action.type) {

            case RECEIVE_RECIPES:
              newState.allRecipes = action.receivedRecipes;
              break;

            case SELECT_RECIPE:
              newState.selectedRecipe = action.selectedRecipe;
              break;

            case SET_NEW_RECIPES:
              newState.newRecipes = action.newRecipes;
              break;
            case SET_CURRENT:
              newState.currentWeekRecipes = state.newRecipes;
              break;

            default:
              return state;
         }

        return newState;
};
