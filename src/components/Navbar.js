import React from "react";
import {Link} from "react-router-dom";
function Navbar(){
    
    return (<nav className="navbar navbar-expand-md fixed-top bg-white">
      <div className="container my-2">
        <a href="/" className="navbar-brand text-dark font-weight-bold">
          NAME
        </a>
        <Link to="/contact"className=" ml-auto mx-3">
        <button className="btn btn-outline-info">
          Contact me
        </button>
        </Link>
        
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#collapseNav"
        >
          <span className="fas fa-bars text-dark"></span>
        </button>

        <div className="collapse navbar-collapse flex-grow-0" id="collapseNav">
          <div className="navbar-nav">
            <a href="/" className="nav-item nav-link text-dark h6 mx-3 my-auto">
              Projects
            </a>
            <a href="/" className="nav-item nav-link text-dark h6 mx-3 my-auto">
              Blogs
            </a>
          </div>
        </div>
      </div>
    </nav>
)
}
export default Navbar;