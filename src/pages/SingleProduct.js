import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { LuGitCompare } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import Container from "../components/Container";

function SingleProduct() {
  const props = {
    width: 400,
    height: 600,
    zoomWidth: 500,
    offset: { vertical: 0, horizontal: -550 },
    img: "../../images/headphone/headphone-01.webp",
  };
  const [orderedProduct, setOrderedProduct] = useState(true);
  return (
    <>
      <Meta title="Dynamic Single Product Name" />
      <BreadCrumb title="Dynamic Single Product Name" />
      <Container class1="mail-product-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-6 product-image bg-white p-3">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              <div>
                <img
                  src="../../images/headphone/headphone-02.webp"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="../../images/headphone/headphone-03.webp"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">
                  Kids Headphone Bulk 10 Pack Multi Colored For Students
                </h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">$ 100.00</p>
                <div className="d-flex align-items-center gap-15">
                  <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">(2 reviews)</p>
                </div>
                {orderedProduct && (
                  <a className="review-btn" href="#review">
                    Write a review
                  </a>
                )}
              </div>
              <div className="border-bottom py-3">
                <div className="d-flex align-items-center gap-10">
                  <h5 className="product-heading">Type: </h5>
                  <p className="product-data">Headsets</p>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <h5 className="product-heading">Brand: </h5>
                  <p className="product-data">Havells</p>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <h5 className="product-heading align-self-start">
                    Categories:{" "}
                  </h5>
                  <p className="product-data">
                    Airpod, Camera, Computer & Laptop, Headphone, Mini Speaker,
                    Portable Speake product-datar, Smart Phone, Smart TV, Smart
                    Watch
                  </p>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <h5 className="product-heading">Tags: </h5>
                  <p className="product-data">
                    headphone laptop mobile speaker
                  </p>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <h5 className="product-heading">SKU: </h5>
                  <p className="product-data">SKU027</p>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <h5 className="product-heading">Availability: </h5>
                  <p className="product-data">541 In Stock</p>
                </div>
                <div className="d-flex align-items-center gap-10 mt-2">
                  <h5 className="product-heading">Size: </h5>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge text-dark border border-secondary">
                      S
                    </span>
                    <span className="badge text-dark border border-secondary">
                      M
                    </span>
                    <span className="badge text-dark border border-secondary">
                      L
                    </span>
                    <span className="badge text-dark border border-secondary">
                      XL
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <h5 className="product-heading">Color: </h5>
                  <div className="pt-3">
                    <Color color1="green" color2="orange" color3="blue" />
                  </div>
                </div>
                <div className="d-flex align-items-center gap-30">
                  <h5 className="product-heading">Quantity: </h5>
                  <div>
                    <input
                      className="form-control"
                      type="number"
                      style={{ width: "70px" }}
                      min={1}
                      max={10}
                    />
                  </div>
                  <button className="button border-0">Add To Cart</button>
                  <button className="button signup">Buy It Now</button>
                </div>
                <div className="d-flex align-items-center gap-30 mt-3">
                  <div>
                    <a href="">
                      <LuGitCompare /> Add to Compare
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <FaRegHeart /> Add to Wishlist
                    </a>
                  </div>
                </div>
                <div class="accordion mt-3" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Shipping and Returns:
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <p className="product-data">
                          Free shipping and returns available on all orders!
                          <br /> We ship all US domestic orders within
                          <b> 5-10 business days</b>!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        About This Item:
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        [ANC & ENC Noise Cancellation] Featuring a hybrid ANC
                        algorithm and 3 ANC microphones, TOZO HT2 deliver
                        exceptional noise control across a wide frequency range.
                        Whether it's the roar of airplane engines, subway
                        rumble, or office chatter, it effectively minimizes
                        noise interference, ensuring an unparalleled listening
                        experience. In addition, the excellent ENC call noise
                        cancellation makes it possible for you to talk clearly
                        even in noisy streets.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        More Information:
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        [Up to 60 Hours of Playtime] With up to 60 hours of
                        listening time of our over ear headphones in ANC OFF
                        mode, triple as much as other Bluetooth headphones. A
                        single charge gives you enough juice to listen to over
                        700 songs or soundtrack multiple long haul flights. Also
                        equipped with a 3.5mm audio cable, you can effortlessly
                        transition to a wired mode when the battery has run out,
                        guaranteeing uninterrupted listening.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Container class1="description-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <p className="bg-white p-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia sed modi facilis, nisi quod eum veniam cum commodi
                inventore in quis et explicabo obcaecati voluptates, assumenda
                unde quia temporibus quaerat sequi ullam. Mollitia nobis porro
                officiis, molestias sint quibusdam, voluptatem nam at numquam
                vel cum in nemo, quaerat magnam reprehenderit!
              </p>
            </div>
          </div>
        </Container>
        <Container class1="reviews-wrapper home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h4>Reviews</h4>
              <div className="reviews-inner-wrapper">
                <div className="reviews-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-4">Customer Reviews</h4>
                    <div className="d-flex align-items-center gap-15">
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 2 reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a
                        className="text-dark text-decoration-underline"
                        href=""
                      >
                        Write a review
                      </a>
                    </div>
                  )}
                </div>
                <div className="reviews-form py-4">
                  <h4>Write a review</h4>
                  <form id="review" className="d-flex flex-column gap-15">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={true}
                      activeColor="#ffd700"
                    />
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>

                    <div>
                      <textarea
                        cols="30"
                        rows="4"
                        className="form-control"
                        placeholder="Write your comments here"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-3">
                  <div className="review">
                    <div className="d-flex align-items-center gap-15">
                      <h6 className="mb-0">Tibi</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsam, cum?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Container class1="popular-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </Container>
      </Container>
    </>
  );
}

export default SingleProduct;
