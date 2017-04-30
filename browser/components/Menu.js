import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router';

/* -----------------    COMPONENT     ------------------ */
 class Menu extends React.Component {

  render () {
    return (
      <div>
        <div className="row">
          {
            this.props.currentWeekRecipes && this.props.currentWeekRecipes.map(recipe => (
              <div className="col-md-4" key={ recipe.title }>
                <Link className="thumbnail" to={`/recipes/${recipe.id}`}>
                  <img src={ recipe.image }/>
                  <div className="caption">
                    <h4>
                      <span>{ recipe.title }</span>
                    </h4>
                  </div>
                </Link>
              </div>
            ))
          }
        </div>
    </div>
    )
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = (state) => {

  return {
    currentWeekRecipes: state.currentWeekRecipes
  }
};

const mapDispatch = null

export default connect(mapStateToProps, mapDispatch)(Menu)

