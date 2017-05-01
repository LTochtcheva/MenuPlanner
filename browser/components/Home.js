import React from 'react'
import {Link} from 'react-router';

const Home = () => (
  <div className="container-fluid">
    <div className="row equal">
      <div className="col-md-2">
        <Link className="thumbnail" to="/menu">
          <div className="caption">
            <h4>
              <span>MY MENU</span>
            </h4>
          </div>
        </Link>
      </div>
      <div className="col-md-2">
        <Link className="thumbnail" to="/menu/new">
          <div className="caption">
            <h4>
              <span>NEW MENU</span>
            </h4>
          </div>
        </Link>
      </div>
      <div className="col-md-2">
        <Link className="thumbnail" to="/recipes">
          <div className="caption">
            <h4>
              <span>BROWSE RECIPES</span>
            </h4>
          </div>
        </Link>
      </div>
    </div>
  </div>
)

export default Home
