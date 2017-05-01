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
            this.props.currentWeekRecipes.length === 0 ?
             ( <div className="col-xs-4" >
                  <img src="https://s-media-cache-ak0.pinimg.com/originals/b8/6d/9d/b86d9d3dad73930ed6f656bb47ecab1a.jpg" className="img-rounded"/>
                  <div className="caption">
                    <h4>
                      <span>Looks like You don't have a plan</span>
                    </h4>
                  </div>
              </div>
            ) :
            (this.props.currentWeekRecipes.map((recipe, i) => (
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
            )
          }
        </div>
        <div className="row equal center">
          <div id="NewMenu-btns">
            <div>
              <Link className="thumbnail" to="/menu/new">
                <button id='reset' className="btn btn-warning">Plan New Menu</button>
              </Link>
            </div>
            <button id='hint' className="btn btn-info">Print</button>
            <button id='hint' className="btn btn-info">Share</button>
          </div>
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

