import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router';

/* -----------------    COMPONENT     ------------------ */
 class Menu extends React.Component {

  render () {
    return (
      <div className="container-fluid" id="menu">
        <div className="row equal">
          {
            this.props.currentWeekRecipes && this.props.currentWeekRecipes.map((recipe, i) => (
              <div className="col-xs-4" key={ i }>
                <Link className="thumbnail" to={`/recipes/${recipe.id}`}>
                  <img src={ recipe.images } className="img-rounded"/>
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

