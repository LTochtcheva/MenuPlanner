import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router';

import days from '../constants.js'
/* -----------------    COMPONENT     ------------------ */
class NewMenu extends React.Component {

  render () {
    return (
      <div className="container-fluid" id="new-menu">
        <div className="row equal">
          {
            this.props.newRecipes && this.props.newRecipes.map((recipe, i) => (
              <div className="col-md-2" key={ i }>
                <h3>{days[i]}</h3>
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
    newRecipes: state.newRecipes
  }
};

const mapDispatch = null

export default connect(mapStateToProps, mapDispatch)(NewMenu)
