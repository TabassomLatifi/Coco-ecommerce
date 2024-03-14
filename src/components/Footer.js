import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsInstagram, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">Sign up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  Unit 4, No 18, Kaj Street <br />
                  Tehran, Iran <br />
                  PinCode: 44234
                </address>
                <a
                  href="tel: +98 9123456789"
                  className="mt-3 d-block mb-1 text-white"
                >
                  +98 9123456789
                </a>
                <a
                  href="mailto: info@coco.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  info@coco.com
                </a>
                <div className="social-icons d-flex align-items-center gap-30 mt-4">
                  <a href="#">
                    <BsLinkedin className="text-white fs-5" />
                  </a>
                  <a href="#">
                    <BsGithub className="text-white fs-5" />
                  </a>
                  <a href="#">
                    <BsInstagram className="text-white fs-5" />
                  </a>
                  <a href="#">
                    <BsYoutube className="text-white fs-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                  Privacy Policy
                </Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">
                  Refund Policy
                </Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">
                  Shipping Policy
                </Link>
                <Link
                  to="/terms-and-conditions"
                  className="text-white py-2 mb-1"
                >
                  Terms & Conditions
                </Link>
                <Link to="/blog" className="text-white py-2 mb-1">
                  Blog
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">FAQ</Link>
                <Link className="text-white py-2 mb-1">Contact Us</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptop</Link>
                <Link className="text-white py-2 mb-1">Mobile</Link>
                <Link className="text-white py-2 mb-1">Tablet</Link>
                <Link className="text-white py-2 mb-1">Headphone</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 mb-0 text-white">
              <p className="text-center">
                &copy; {new Date().getFullYear()}; Powered by Coco
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
