import React from 'react'

export default class AddRecipe extends React.Component {

  render () {

    return (
      <div>
        <h1>Add New Recipe</h1>
        <form>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Example label</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input"/>
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Another label</label>
            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
          </div>
        </form>

      </div>


    )
  }
}
