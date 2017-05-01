import {RECEIVE_RECIPES, SELECT_RECIPE, SET_NEW_RECIPES} from './action-creators';
  const noCurrent = {
    title: 'Plan New Menu',
      category: 'default',
      ingredients: '',
      images: 'https://s-media-cache-ak0.pinimg.com/originals/b8/6d/9d/b86d9d3dad73930ed6f656bb47ecab1a.jpg',
      likes: 0,
      description: 'Looks like you do not have a plan'
  }
  const initialState = {
                      allRecipes: [],
                      currentWeekRecipes: [noCurrent, noCurrent, noCurrent,noCurrent,noCurrent,
                        noCurrent,noCurrent],
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

            default:
              return state;
         }

        return newState;
};
