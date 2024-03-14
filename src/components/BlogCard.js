import { Link } from "react-router-dom";

const BlogCard = (props) => {
  return (
    <div className={props.page === 'blog' ? 'gr-6' : 'col-3'}>
      <div className="blog-cart">
        <div className="cart-image">
          <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
        </div>
        <div className="blog-content">
          <p className="date">1 Dec, 2023</p>
          <h5 className="title">A Beautiful Sunday Morning Renaissance</h5>
          <p className="description">
            a href value. If you cannot provide a valid href, but still need the
            element to resemble a link, use a button.
          </p>
          <Link to="/blog/:id" className="button">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
