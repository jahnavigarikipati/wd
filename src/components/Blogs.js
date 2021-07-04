import React from "react";

import BlogsCard from "./BlogsCard";

function Blogs()
{
  const blogs=[
    {
      id:1,
      blogname:"Blog 1",
      sentence:"This is my Blog about...",
      imgUrl:"https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-1.jpg",
  },
  {
      id:2,
      blogname:"Blog 2",
      sentence:"This is my Blog about...",
      imgUrl:"https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-2.jpg",
  },
  {
      id:3,
      blogname:"Blog 3",
      sentence:"This is my Blog about...",
      imgUrl:"https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-3.jpg",
  },
];
    return(
        <div className="container text-center my-5">
      <h1 className="font-weight-light">My <span className="text-info">Blogs</span></h1>
      <div className="lead">I share my views on technologies in these blogs</div>
      <div className="row my-5 pt-3">
      {
          blogs.map((blog) =>
          (
            <div key={blog.id} className="col-12 col-md-4 my-2">
                <BlogsCard
                blogname={blog.blogname}
                sentence={blog.sentence}
                imgUrl={blog.imgUrl}
                id={blog.id}
                />
          
            </div>

          )
          )
        }
        </div>
      <div className="my-5">
        <a href="/" className="text-dark text-right">
          <h5>
            See all blogs
            <i className="fas fa-arrow-right align-middle"></i>
          </h5>
        </a>
      </div>
    </div>
    
    );
}

export default Blogs;