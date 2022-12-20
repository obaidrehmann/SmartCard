import React from "react";
import singnture from "../../../assets/images/about/singnture.png";
import bannerimg from "../../../assets/images/banners/7.jpg";
import Awards from "../../../components/slider/Awards";

export default function BannerLayoutSectionFive() {
  return (
    <section className="banner-layout5 banner-layout5-sticky bg-parallax pt-130 pb-0 bg-slider-img-Banner">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-5 d-flex flex-column justify-content-between pb-80">
            <div className="heading heading-light mb-50 sticky-top">
              <div className="divider divider-white" />
              <h3 className="heading__title mb-30">
                Easy solutions for all difficult IT problems, keep business safe
                &amp; ensure high availability.
              </h3>
            </div>
            {/* /.heading */}
            <div className="row">
              <div className="col-sm-6">
                <div className="contact-info">
                  <div className="contact__icon">
                    <i className="icon-map-marker" />
                  </div>
                  <ul className="contact__list list-unstyled">
                    <li>
                      2307 Beverley Rd Brooklyn, New York 11226 United States.
                    </li>
                  </ul>
                </div>
                {/* /.contact-item*/}
              </div>
              {/* /.col-sm-6 */}
              <div className="col-sm-6">
                <div className="contact-item">
                  <div className="contact__icon">
                    <i className="icon-mail" />
                  </div>
                  <ul className="contact__list list-unstyled">
                    <li>
                      <a href="mailto:SmartData@7oroof.com">
                        Email: SmartData@7oroof.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:5565454117">Phone: +55 654 541 17</a>
                    </li>
                  </ul>
                </div>
                {/* /.contact-item*/}
              </div>
              {/* /.col-sm-6 */}
              <div className="col-sm-6" />
              {/* /.col-sm-6 */}
            </div>
            {/* /.row*/}
          </div>
          {/* /.col-xl-6 */}
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 offset-xl-1">
            <div className="banner__content bg-slider-img-Banner-two">
              <div className="scroll__icon">
                <i className="icon-mouse" />
              </div>
              <div className="row heading heading-light">
                <div className="col-sm-6">
                  <h3 className="heading__title mb-30">
                    450,000 client’s interactions!
                  </h3>
                </div>
                {/* /.col-sm-6 */}
                <div className="col-sm-6">
                  <p className="heading__desc mb-20">
                    Provide users with appropriate view access to requests,
                    problems, changes, contracts &amp; solutions with
                    experienced professionals.
                  </p>
                  <p className="heading__desc mb-20">
                    As one of the world's largest ITService Providers, we are
                    ready to help.
                  </p>
                  <a
                    href="#"
                    className="btn btn__white btn__bordered btn__xl btn__icon"
                  >
                    <span>Download Brochure</span>
                    <i className="icon-arrow-right" />
                  </a>
                </div>
                {/* /.col-sm-6 */}
              </div>
              {/* /.row */}
              <div className="row counters-wrapper counters-light mt-70">
                {/* counter item #1 */}
                <div className="col-sm-4">
                  <div className="counter-item">
                    <h4 className="counter">6,154</h4>
                    <p className="counter__desc">
                      Projects And Software Developed in 2021
                    </p>
                  </div>
                  {/* /.counter-item */}
                </div>
                {/* /.col-sm-4 */}
                {/* counter item #2 */}
                <div className="col-sm-4">
                  <div className="counter-item">
                    <h4 className="counter">2,512</h4>
                    <p className="counter__desc">
                      Qualified Employees And Developers With Us
                    </p>
                  </div>
                  {/* /.counter-item */}
                </div>
                {/* /.col-sm-4 */}
                {/* counter item #3 */}
                <div className="col-sm-4">
                  <div className="counter-item">
                    <h4 className="counter">1,784</h4>
                    <p className="counter__desc">
                      Satisfied Clients We Have Served Globally
                    </p>
                  </div>
                  {/* /.counter-item */}
                </div>
                {/* /.col-sm-4 */}
              </div>
              {/* /.row */}
            </div>
            {/* /.banner__content */}
            <div className="semi-banner bg-gray">
              <div className="row row-no-gutter">
                <div className="col-sm-6">
                  <div className="semi-banner__content">
                    <div className="heading">
                      <h3 className="heading__title mb-30">
                        Timely Service, and incident resolutions!!
                      </h3>
                      <p className="heading_desc mb-30">
                        Improve efficiency, leverage tech, and provide better
                        customer experiences with the modern technology services
                        available allover the world.{" "}
                      </p>
                      <p className="heading_desc mb-30">
                        Our skilled personnel, utilising the latest processing
                        software, combined with decades of experience.
                      </p>
                    </div>
                    {/* /.heading */}
                    <img src={singnture} alt="singnture" />
                  </div>
                </div>
                {/* /.col-sm-6 */}
                <div className="col-sm-6 d-none d-md-block">
                  <img src={bannerimg} alt="banner" className="w-100" />
                </div>
                {/* /.col-sm-6 */}
              </div>
              {/* /.row */}
            </div>
            {/* /.semi-banner */}
            <div className="semi-banner bg-gray">
              <div className="row row-no-gutter">
                <div className="col-sm-6">
                  <div className="cta-banner bg-primary">
                    <div className="cta__icon color-white">
                      <i className="icon-developer" />
                    </div>
                    <h4 className="cta__title color-white">Since 1999</h4>
                    <p className="cta__desc color-white mb-25">
                      Provide users with appropriate view and access to
                      requests, problems, changes, contracts, solutions, and
                      reports.
                    </p>
                    <a
                      href="#"
                      className="btn btn__link btn__white btn__icon px-0"
                    >
                      <span>Find Your Solution</span>{" "}
                      <i className="icon-arrow-right" />
                    </a>
                  </div>
                </div>
                {/* /.col-sm-6 */}
                <div className="col-sm-6">
                  <div className="semi-banner__content pb-0">
                    <div className="heading">
                      <h3 className="heading__title mb-30">
                        We have decades of work experience!
                      </h3>
                    </div>
                    {/* /.heading */}
                    <h4 className="banner__subheading">
                      Consulting &amp; Insights
                    </h4>
                    <p className="heading_desc">
                      Our objective insights steer you toward the right
                      decisions on issues that matter.
                    </p>
                    <h4 className="banner__subheading">
                      Research &amp; Advisory
                    </h4>
                    <p className="heading_desc">
                      Our combination of research, problem solving and hands-on
                      experience.
                    </p>
                    <h4 className="banner__subheading">Strategic Advice</h4>
                    <p className="heading_desc">
                      Tools to help turn strategy into decisions, and execute
                      for measurable results.
                    </p>
                  </div>
                </div>
                {/* /.col-sm-6 */}
              </div>
              {/* /.row */}
            </div>
            {/* /.semi-banner */}
            <section className="awards bg-secondary">
              <div className="row heading heading-light mb-60">
                <div className="col-sm-6">
                  <h3 className="heading__title">
                    Our awards and recognitions
                  </h3>
                </div>
                {/* /col-lg-5 */}
                <div className="col-sm-6">
                  <p className="heading__desc">
                    Trusted by the world's best organizations, for 21 years and
                    running, it has been delivering smiles to hundreds of IT
                    advisors, developers, users, and business owners.
                  </p>
                </div>
                {/* /.col-lg-5 */}
              </div>
              {/* /.row */}
              <div className="row awards-wrapper">
                <div className="col-sm-12">
                  <div className="awards-carousel-wrapper">
                    <Awards />
                    {/* /.carousel  */}
                  </div>
                  {/* /.awards-carousel-wrapper */}
                </div>
                {/* /.col-12 */}
              </div>
              {/* /.row */}
            </section>
          </div>
          {/* /.col-xl-4 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
