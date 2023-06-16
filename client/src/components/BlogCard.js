import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src="/images/blog-1.jpg" className="img-fluid w-10" alt="blog" />
      </div>
      <div className="blog-content">
        <h5 className="title">What I know</h5>
        <p className="desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, non
          laboriosam ea corporis numquam magni beatae, velit repellat dicta quis
          hic debitis, amet impedit cum suscipit ipsam voluptatem error
          voluptas!
        </p>
        <Link to="/blog/:id" className="button">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
