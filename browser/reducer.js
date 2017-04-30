import {RECEIVE_RECIPES, SELECT_RECIPE} from './action-creators';

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

            default:
              return state;
         }

        return newState;
};
