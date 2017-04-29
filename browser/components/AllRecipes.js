import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router';
/* -----------------    COMPONENT     ------------------ */
 class AllRecipes extends React.Component {

  render () {

    return (
      <ul className="list-unstyled">
        {this.props.allRecipes.map( (recipe) => {
          return (<li key={recipe.title}><Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link></li>)
        })}
      </ul>
    )
  }
}
/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = (state) => {

  return {
    allRecipes: state.allRecipes
  }
};

const mapDispatch = null

export default connect(mapStateToProps, mapDispatch)(AllRecipes)

