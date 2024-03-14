import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { FaArrowLeft } from "react-icons/fa";
import Container from "../components/Container";

const SingleBlog = () => {
  return (
    <>
      <Meta title="Dynamic Blog Name" />
      <BreadCrumb title="Dynamic Blog Name" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Find By Category</h3>
              <div>
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>TV</li>
                  <li>Laptop</li>
                  <li>Camera</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="single-blog-card">
              <Link to="/blog" className="d-flex align-items-center gap-10">
                <FaArrowLeft />
                Go Back To Blog
              </Link>
              <h3 className="title">A Beautiful Sunday Morning Renaissance</h3>
              <img
                src="../images/blog-1.jpg"
                className="img-fluid w-100 my-4"
                alt="blog"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                eaque deleniti tenetur commodi consequuntur temporibus eos
                obcaecati nesciunt debitis officiis voluptatem ut, in omnis ab
                itaque praesentium illum alias culpa nisi iusto maiores!
                Laudantium odio illo alias cupiditate eaque quo, temporibus
                quisquam! Odit laborum iure labore? Quibusdam animi voluptatem
                corrupti.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
