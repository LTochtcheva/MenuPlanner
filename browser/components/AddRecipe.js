import React from 'react'

export default class AddRecipe extends React.Component {

  render () {

    return (
      <div id="add-recipe">

        <h2>Add New Recipe</h2>

        <form method="POST" action="/recipes/">

            <div className="form-group">
              <label htmlFor="title" className="col-sm-2 control-label">Title</label>
              <div className="col-sm-10">
                <input name="title" type="text" className="form-control"/>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="title" className="col-sm-2 control-label">Image</label>
              <div className="col-sm-10">
                <input name="title" type="text" className="form-control"/>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="ingredients" className="col-sm-2 control-label">Ingredients</label>
              <div className="col-sm-10">
                <input name="ingredients" type="text" className="form-control"/>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="content" className="col-sm-2 control-label">Instructions</label>
              <div className="col-sm-10" >
                <textarea name="instructions"></textarea>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="category" className="col-sm-2 control-label">Category</label>
              <div className="col-sm-10">
                <select name="category">
                  <option>chicken</option>
                  <option>pasta</option>
                </select>
              </div>
            </div>

            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-success custom">Add</button>
            </div>
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-primary custom">Cancel</button>
            </div>
        </form>

      </div>


    )
  }
}
