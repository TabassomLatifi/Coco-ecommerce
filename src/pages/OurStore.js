import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import Container from "../components/Container";

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  return (
    <>
      <Meta title="Our Store" />
      <BreadCrumb title="Our Store" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop By Category</h3>
              <div>
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>TV</li>
                  <li>Laptop</li>
                  <li>Camera</li>
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filter By</h3>
              <div>
                <h5 className="sub-title">Availability</h5>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="instuck"
                  />
                  <label className="form-check-label" htmlFor="instuck">
                    In Stuck (1)
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="outofstuck"
                  />
                  <label className="form-check-label" htmlFor="outofstuck">
                    Out of Stuck (0)
                  </label>
                </div>
              </div>
              <div>
                <h5 className="sub-title">Price</h5>
                <div className="d-flex align-itens-center gap-10">
                  <div className="form-floating mb-3">
                    <input
                      type="number"
                      className="form-control py-1"
                      id="floatingInput"
                      placeholder="From"
                    />
                    <label htmlFor="floatingInput">From</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="number"
                      className="form-control py-1"
                      id="floatingInput1"
                      placeholder="To"
                    />
                    <label htmlFor="floatingInput1">To</label>
                  </div>
                </div>
              </div>
              <div>
                <h5 className="sub-title">Colors</h5>
                <div>
                  <Color color1="gray" color2="pink" color3="purple" />
                </div>
              </div>
              <div>
                <h5 className="sub-title">Size</h5>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="size1"
                    />
                    <label className="form-check-label" htmlFor="size1">
                      S (2)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="size2"
                    />
                    <label className="form-check-label" htmlFor="size2">
                      M (5)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="size3"
                    />
                    <label className="form-check-label" htmlFor="size3">
                      L (1)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="size4"
                    />
                    <label className="form-check-label" htmlFor="size4">
                      XL (3)
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Product Tags</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Headphone
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Laptop
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Mobile
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Tablet
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Vivo
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Wire
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Speaker
                  </span>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Random Product</h3>
              <div>
                <div className="random-product mb-3 d-flex">
                  <div className="w-50">
                    <img
                      src="images/headphone.jpg"
                      className="img-fluid"
                      alt="headphone"
                    />
                  </div>
                  <div className="w-50">
                    <h5>Kids Headphone Bulk 10 Pack Multi Colored For...</h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <b>$ 300.00</b>
                  </div>
                </div>
                <div className="random-product d-flex">
                  <div className="w-50">
                    <img
                      src="images/headphone.jpg"
                      className="img-fluid"
                      alt="headphone"
                    />
                  </div>
                  <div className="w-50">
                    <h5>Kids Headphone Bulk 10 Pack Multi Colored For...</h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <b>$ 300.00</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block" style={{ width: "100px" }}>
                    Sort By:
                  </p>
                  <select
                    name=""
                    className="form-control form-select"
                    option=""
                  >
                    <option value="best-selling" selected="selected">
                      Best Selling
                    </option>
                    <option value="title-ascending">Alphabetically, A-Z</option>
                    <option value="title-descending">
                      Alphabetically, Z-A
                    </option>
                    <option value="price-ascending">Price, low to high</option>
                    <option value="price-descending">Price, high to low</option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="total-products mb-0">21 Products</p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      onClick={() => setGrid(3)}
                      src="images/gr4.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => setGrid(4)}
                      src="images/gr3.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => setGrid(6)}
                      src="images/gr2.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => setGrid(12)}
                      src="images/gr.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list d-flex flex-wrap p-0 gap-10 mt-3">
              <ProductCard grid={grid} />
              <ProductCard grid={grid} />
              <ProductCard grid={grid} />
              <ProductCard grid={grid} />
              <ProductCard grid={grid} />
              <ProductCard grid={grid} />
              <ProductCard grid={grid} />
              <ProductCard grid={grid} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;
