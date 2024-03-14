import BlogCard from "../components/BlogCard";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const Blog = () => {
  return (
    <>
      <Meta title="Blog" />
      <BreadCrumb title="Blog" />
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
            <div className="d-flex flex-wrap gap-10">
              <BlogCard page="blog" />
              <BlogCard page="blog" />
              <BlogCard page="blog" />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Blog;
