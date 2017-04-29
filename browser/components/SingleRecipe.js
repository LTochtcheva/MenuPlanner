import React from 'react'
import { connect } from 'react-redux'
/* -----------------    COMPONENT     ------------------ */
 class SingleRecipe extends React.Component {

  render () {
    return (
    <div className="container flexbox-container">
        <div className="jumbotron">
          <h2>{this.props.singleRecipe.title}</h2>
            <div>
              <img src={this.props.singleRecipe.image} />
            </div>
        </div>
      </div>
      )
  }
}

/* -----------------    CONTAINER     ------------------ */
const mapStateToProps = (state) => {

  return {
    singleRecipe: state.selectedRecipe
  }
};

const mapDispatch = null

export default connect(mapStateToProps, mapDispatch)(SingleRecipe)
