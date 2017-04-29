// import {RECEIVE_PUPPIES,LOAD_PUPPIES,SELECT_PUPPY} from './action-creators';
// import {combineReducers} from 'redux';
const hardCodedRecipes = [
    {
      title: 'Fish & Chips',
      category: 'fish',
      ingredients: 'White fish, potatoes, some flour, lots of oil',
      image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRmITDITLErZk7p4q6VJ3_TUvwIGY79m1AUvxN0G6BvARay_qm_',
      likes: 100,
      description: 'Not available outside Great Britain'
    },
    {
      title: 'TheBestChiliEver',
      category: 'mixed',
      ingredients: 'Canned beans, ground beef, tomatoes',
      image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS9wISJRlw4LWyK3VwzYVDrHHeMogKaBK5M3tslHVnXXksFNIxf',
      likes: 10,
      description: 'Ask Caroline'
    },
     {
      title: 'Signature Sandwich',
      category: 'no time to cook',
      ingredients: 'Bread - 2 slices, ham, tomatoes, salad leaves',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg-t1XpwgCPmirh6QKnLqoRzcBe_9Hfcoe1SvL5_VMyQlciRr3',
      likes: 100,
      description: 'Put everything together'
    },
     {
      title: 'Addictive Cucumbers',
      category: 'vegetables',
      ingredients: 'Cucumbers',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRVBhWLz-Y66aqdPcbTstUvOv-osgauhvQOv2EW0IMQcmHuBym-',
      likes: 100,
      description: 'Slice cucumbers and spice them up with garlic chili paste, then add sesame soy soy dressing'
    }
]

  const initialState = {
                      allRecipes: hardCodedRecipes,
                      weekRecipes: [hardCodedRecipes[1], hardCodedRecipes[4]],
                      selectedRecipe: hardCodedRecipes[1]
                      };

  export default (state = initialState, action) => {
  // const newState = Object.assign({}, state);
  // switch(action.type) {

  //       case RECEIVE_PUPPIES:
  //         newState.allPuppies = action.receivedPuppies;
  //         break;

  //       case SELECT_PUPPY:
  //         newState.selectedPuppy = action.selectedPuppy;
  //         break;

  //       default:
  //         return state;
  //    }

  //   return newState;
  console.log('Inside reducer')
  console.log('Selected: ',state.selectedRecipe.title)
  return state;
};
