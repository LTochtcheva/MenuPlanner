import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router';
/* -----------------    COMPONENT     ------------------ */
 class AllRecipes extends React.Component {

  render () {

    return (
      <ul className="list-unstyled">
        {this.props.allRecipes.map( (recipe) => {
          return (<li key={recipe.title}>
                     <Link to={`/recipes/${recipe.id}`} className="list-item">
                      <div className="jumbotron">
                        <h4>{recipe.title}</h4>
                        <div>
                        <img src={recipe.images} />
                        </div>
                       </div>
                     </Link>
                  </li>)
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

