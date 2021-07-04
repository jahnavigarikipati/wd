import React from 'react'
import {Link} from "react-router-dom";
function BlogsCard(props) {
    const { blogname, sentence, imgUrl, alternate,id }=props;
    return (
        
       
          <div className="card shadow h-100">
            <img
              className="card-img-top"
              src={imgUrl}
              alt={alternate}
            />
            <div className="card-body">
              <h4 className="card-title">{blogname}</h4>
              <p className="card-text">{sentence}</p>
              <Link to={`/blog/${id}`} className="stretched-link"></Link>
            </div>
          </div>
    
        
    );
}
export default BlogsCard;
