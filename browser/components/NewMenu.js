import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router';

import days from '../constants.js'
import {fetchRandomRecipes, setCurrentRecipes} from '../action-creators'
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
        <div className="row equal center">
          <div id="NewMenu-btns">
            <button id="setCurrent" className="btn btn-warning" onClick={this.props.setCurrent}>
              I like It!
            </button>
            <div >
              <button  className="btn btn-info" onClick={this.props.tryAgainFunc} >Try Again</button>
            </div>
            <Link to="/menu/customize">
            <button id="custom" className="btn btn-info" >Customize</button>
            </Link>
          </div>
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

const mapDispatch = (dispatch) =>
  ({ tryAgainFunc: () => {
      dispatch(fetchRandomRecipes())
     },
     setCurrent: () => {
      dispatch(setCurrentRecipes())
     }

})

export default connect(mapStateToProps, mapDispatch)(NewMenu)
