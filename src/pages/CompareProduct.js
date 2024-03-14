import BreadCrumb from "../components/BreadCrumb";
import Color from "../components/Color";
import Meta from "../components/Meta";
import Container from "../components/Container";

const CompareProduct = () => {
  return (
    <>
      <Meta title="Compare Products" />
      <BreadCrumb title="Compare Products" />
      <Container class1="compare-products-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross"
              />
              <div className="product-card-image">
                <img
                  src="images/watch-01.png"
                  className="img-fluid"
                  alt="watch"
                />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wifi+3G Tablet
                </h5>
                <h6 className="price mb-3">$ 100.00</h6>
              </div>
              <div className="product-details">
                <h5>Brand:</h5>
                <p>Havels</p>
              </div>
              <div className="product-details">
                <h5>Type:</h5>
                <p>Tablet Computers</p>
              </div>
              <div className="product-details">
                <h5>SKU:</h5>
                <p>SKU033</p>
              </div>
              <div className="product-details">
                <h5>Availability:</h5>
                <p>In Stock</p>
              </div>
              <div className="product-details">
                <h5>Color:</h5>
                <Color color1="gray" color2="green" color3="blue" />
              </div>
              <div className="product-details">
                <h5>Size:</h5>
                <div className="d-flex gap-10">
                  <p>S</p>
                  <p>M</p>
                  <p>L</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross"
              />
              <div className="product-card-image">
                <img
                  src="images/watch-01.png"
                  className="img-fluid"
                  alt="watch"
                />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wifi+3G Tablet
                </h5>
                <h6 className="price mb-3">$ 100.00</h6>
              </div>
              <div className="product-details">
                <h5>Brand:</h5>
                <p>Havels</p>
              </div>
              <div className="product-details">
                <h5>Type:</h5>
                <p>Tablet Computers</p>
              </div>
              <div className="product-details">
                <h5>SKU:</h5>
                <p>SKU033</p>
              </div>
              <div className="product-details">
                <h5>Availability:</h5>
                <p>In Stock</p>
              </div>
              <div className="product-details">
                <h5>Color:</h5>
                <Color color1="gray" color2="green" color3="blue" />
              </div>
              <div className="product-details">
                <h5>Size:</h5>
                <div className="d-flex gap-10">
                  <p>S</p>
                  <p>M</p>
                  <p>L</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CompareProduct;
