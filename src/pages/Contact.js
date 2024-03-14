import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import Meta from "../components/Meta";
import { FaHome, FaPhone, FaInfo } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const contact = () => {
  return (
    <>
      <Meta title="Contact Us" />
      <BreadCrumb title="Contact Us" />
      <Container class1="contact-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d113044.75142567458!2d51.384946938108236!3d35.715075930299655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1704603930679!5m2!1sen!2s"
              width="600"
              height="450"
              className="border-0 w-100"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title mb-4">Contact</h3>
                <form className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div>
                    <textarea
                      cols="30"
                      rows="4"
                      className="form-control"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div>
                    <button className="button border-0">Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Get In touch With Us</h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <FaHome className="fs-5" />
                      <address className="mb-0">
                        No 9, street Golestan, Tehran, Iran
                      </address>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <FaPhone className="fs-5" />
                      <a href="tel:+98 9123456789">+98 912-3456789</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <IoIosMail className="fs-5" />
                      <a href="mailto:info@coco.com">info@coco.com</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <FaInfo className="fs-5" />
                      <p className="mb-0">Monday - Friday 10AM - 8PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default contact;
<h1>Contact</h1>;
