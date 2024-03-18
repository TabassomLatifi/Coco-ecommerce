import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  let location = useLocation();
  return (
    <div
      className={location.pathname === "/store" ? `gr-${props.grid}` : "col-2"}
    >
      <Link
        to={`${location.pathname === '/store' ? "product/:id" : location.pathname === '/' ? 'store/product/:id' : ''}`}
        className="product-card position-relative"
      >
        <div className="wishlist-icon position-absolute">
          <button className="border-0 bg-transparent">
            <img src="../../images/wish.svg" alt="wishlist" />
          </button>
        </div>
        <div className="product-image">
          <img
            src="../../images/watch-01.png"
            className="img-fluid"
            alt="product"
          />
          <img
            src="../../images/watch-02.png"
            className="img-fluid"
            alt="product"
          />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Kids headphones bulk 10 pack multi colored for students
          </h5>
          <ReactStars
            count={5}
            size={24}
            value={4}
            edit={false}
            activeColor="#ffd700"
          />
          <p
            className={`description ${
              props.grid === 12 ? "d-block" : "d-none"
            }`}
          >
            A watch is a small clock carried or worn by a person. It makes it
            easy to see the time. It is also a fashion accessory for men and
            women, and expensive watches are designed for this purpose. A watch
            may be one of the few accessories worn by a person.
          </p>
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column">
            <button className="border-0 bg-transparent">
              <img src="../../images/prodcompare.svg" alt="compare" />
            </button>
            <button className="border-0 bg-transparent">
              <img src="../../images/view.svg" alt="view" />
            </button>
            <button className="border-0 bg-transparent">
              <img src="../../images/add-cart.svg" alt="add to cart" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
