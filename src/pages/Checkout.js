import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import Container from "../components/Container";

function Checkout() {
  return (
    <>
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">Coco</h3>
              <nav
                style={{
                  "--bs-breadcrumb-divider": ">",
                  color: "var(--mediumGray)",
                }}
                aria-label="breadcrumb"
              >
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <Link to="/cart" className="text-dark total-price">
                      Cart
                    </Link>
                  </li>
                  &nbsp;/
                  <li class="breadcrumb-item total-price">Shipping</li>
                  &nbsp;/
                  <li
                    class="breadcrumb-item active total-price"
                    aria-current="page"
                  >
                    Payment
                  </li>
                </ol>
              </nav>
              <h4 className="title">Contact Information</h4>
              <p className="user-details">Tabassom Latifi</p>
              <h4 className="mb-3">Shipping Address</h4>
              <form
                action=""
                className="d-flex flex-wrap gap-15 justify-content-between"
              >
                <div className="w-100">
                  <select name="" id="" className="form-control form-select">
                    <option value="DEFAULT" selected disabled>
                      Select Country
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Apartment, Suite, etc"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City"
                  />
                </div>
                <div className="flex-grow-1">
                  <select name="" id="" className="form-control form-select">
                    <option value="DEFAULT" selected disabled>
                      Select State
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Zip Code"
                  />
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/cart" className="text-dark">
                      <IoMdArrowRoundBack />
                      &nbsp;Return to Cart
                    </Link>
                    <Link className="button">Continue Shipping</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              <div className="d-flex gap-10 align-items-center">
                <div className="w-75 d-flex gap-30">
                  <div className="w-25 position-relative">
                    <span
                      style={{ top: "-10px", right: "-10px" }}
                      className="badge bg-secondary text-white rounded-circle py-1 px-2 position-absolute"
                    >
                      1
                    </span>
                    <img
                      src="../../images/watch-01.png"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div>
                    <h5 className="total-price">asdas</h5>
                    <p className="total-price">s / #hfghs</p>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="total">$ 100</h5>
                </div>
              </div>
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Subtotal</p>
                <p className="mb-0 total-price">$ 900</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="total">Shipping</p>
                <p className="total-price">$ 100</p>
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center border-bottom py-4">
              <h4 className="total">Total</h4>
              <h5 className="total-price">$ 1000</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Checkout;
