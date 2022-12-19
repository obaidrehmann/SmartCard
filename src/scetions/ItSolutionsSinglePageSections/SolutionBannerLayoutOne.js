import React from "react";
import { TestimonailsSlider } from "../../components/slider/TestimonailsSlider";

export default function SolutionBannerLayoutOne() {
  return (
    <section
      id="banner1"
      className="banner-layout1 pt-90 pb-90 bg-overlay bg-overlay-primary"
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 col-inner d-flex flex-column justify-content-between">
            <div>
              <div className="heading heading-light">
                <h3 className="heading__title mb-30">
                  All Kinds Of IT Services That Vow Future Business Success!
                </h3>
                <p className="heading__desc mb-30">
                  We are experienced professionals who understand that It
                  services is changing, and are partners who care about your
                  success. As one of the world's largest IT Service Providers,
                  our deep pool of certified engineers and IT staff are ready to
                  help.
                </p>
              </div>
              {/* /.heading */}
              <div className="d-flex align-items-center mb-40">
                <a href="#" className="btn btn__white btn__icon mr-30">
                  <span>Get Started</span>
                  <i className="icon-arrow-right" />
                </a>
                <a
                  href="request-quote.html"
                  className="btn btn__white btn__bordered"
                >
                  Request Demo
                </a>
              </div>
            </div>
            <div className="testimonials testimonials-wrapper">
             <TestimonailsSlider/>
              {/* /.slcik-nav */}
            </div>
          </div>
          {/* /.col-xl-6 */}
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <div className="contact-panel">
              <form
                className="contact-panel__form"
                method="post"
                action="assets/php/contact.php"
                id="contactForm"
              >
                <div className="row">
                  <div className="col-12">
                    <h4 className="contact-panel__title mb-20">
                      Request A Quote
                    </h4>
                    <p className="contact-panel__desc mb-30">
                      Our deep pool of certified engineers and IT staff are
                      ready to help you to keep your IT business safe &amp;
                      ensure high availability.
                    </p>
                  </div>{" "}
                  {/* /.col-12 */}
                  <div className="col-sm-6 col-md-6 col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        id="contact-name"
                        name="contact-name"
                        required=""
                      />
                    </div>
                  </div>
                  {/* /.col-lg-6 */}
                  <div className="col-sm-6 col-md-6 col-lg-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        id="contact-email"
                        name="contact-email"
                        required=""
                      />
                    </div>
                  </div>
                  {/* /.col-lg-6 */}
                  <div className="col-sm-6 col-md-6 col-lg-6">
                    <div className="form-group">
                      <select className="form-control">
                        <option value={0}>Inquiry</option>
                        <option value={1}>IT Management Services 2</option>
                        <option value={2}>IT Management Services 3</option>
                      </select>
                    </div>
                  </div>
                  {/* /.col-lg-6 */}
                  <div className="col-sm-6 col-md-6 col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                        id="contact-Phone"
                        name="contact-phone"
                      />
                    </div>
                  </div>
                  {/* /.col-lg-6 */}
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        placeholder="Additional Details!"
                        id="contact-message"
                        name="contact-message"
                        defaultValue={""}
                      />
                    </div>
                    <div className="custom-control custom-checkbox d-flex align-items-center mb-20">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="acceptTerms"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="acceptTerms"
                      >
                        I accept the privacy and terms.
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="btn btn__primary btn__xl btn__block"
                    >
                      Submit Request{" "}
                    </button>
                    <div className="contact-result" />
                  </div>
                  {/* /.col-12 */}
                </div>
                {/* /.row */}
              </form>
            </div>
          </div>
          {/* /.col-xl-6 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
