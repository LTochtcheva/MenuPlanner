'use strict'

import React from 'react'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import {loadRecipes} from './action-creators';
import {selectRecipeAsync} from './action-creators'

import store from './store'
import Root from './components/Root'
import Home from './components/Home'
import Menu from './components/Menu'
import NewMenu from './components/NewMenu'
import CustomizeMenu from './components/CustomizeMenu'
import AllRecipes from './components/AllRecipes'
import SingleRecipe from './components/SingleRecipe'
import AddRecipe from './components/AddRecipe'
import NotFound from './components/NotFound'

const onAPPLoad = store.dispatch(loadRecipes())
const onLoadRecipe = function(nextRouterState) {
        const recipeId = nextRouterState.params.id;
        console.log('ID in onLoadRecipe: ', recipeId)
        store.dispatch(selectRecipeAsync(recipeId));}

render(
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ Root } onEnter={onAPPLoad}>
        <Route path="/menu" component={ Menu } />
          <Route path="/menu/new" component={ NewMenu } />
          <Route path="/menu/customize" component={ CustomizeMenu } />
        <Route path="/recipes" component={ AllRecipes } />
          <Route path="/recipes/add" component={ AddRecipe } />
          <Route path="/recipes/:id" component={ SingleRecipe } onEnter={onLoadRecipe} />
        <IndexRoute component={ Home } />
      </Route>
      <Route path="*" component={ NotFound } />
    </Router>
  </Provider>,
  document.getElementById('app')
)

