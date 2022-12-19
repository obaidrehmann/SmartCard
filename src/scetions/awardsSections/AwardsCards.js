import React from "react";
import img from "../../assets/images/awards/icons/1.png";

export default function AwardsCards() {
  return (
    <section className="awards pb-70">
      <div className="container">
        <div className="row heading mb-60">
          <div className="col-12 d-flex align-items-center mb-20">
            <div className="divider divider-primary mr-30" />
            <h2 className="heading__subtitle mb-0">
              Timely Service Delivery &amp; Incident Resolutions!!{" "}
            </h2>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-5">
            <h3 className="heading__title">
              Trusted by the world's best organizations for 21 years.
            </h3>
          </div>
          {/* /col-lg-5 */}
          <div className="col-sm-12 col-md-12 col-lg-5 offset-lg-2">
            <p className="heading__desc">
              SmartData been helping organizations and Providers through the
              World to manage their IT with our unique approach to technology
              management and consultancy solutions.{" "}
            </p>
            <a href="#" className="btn btn__primary btn__icon mt-20">
              <span>Get Started</span>
              <i className="icon-arrow-right" />
            </a>
          </div>
          {/* /.col-lg-5 */}
        </div>
        {/* /.row */}
        <div className="row awards-wrapper">
          <div className="col-sm-6 col-md-6 col-lg-3">
            {/* fancybox item #1 */}
            <div className="fancybox-item">
              <div className="fancybox__icon-img">
                <img src={img} alt="icon" />
              </div>
              {/* /.fancybox__icon-img */}
              <div className="fancybox__content">
                <h4 className="fancybox__title">CSS Design Award</h4>
                <p className="fancybox__desc">
                  A web design &amp; development award platform for digital
                  folk, UI/UX peeps and inspiring leaders of the web.
                </p>
              </div>
              {/* /.fancybox-content */}
            </div>
            {/* /.fancybox-item */}
          </div>
          {/* /.col-lg-3 */}
          <div className="col-sm-6 col-md-6 col-lg-3">
            {/* fancybox item #2 */}
            <div className="fancybox-item">
              <span className="pinned-ribbon" />
              <div className="fancybox__icon-img">
                <img src={img} alt="icon" />
              </div>
              {/* /.fancybox__icon-img */}
              <div className="fancybox__content">
                <h4 className="fancybox__title">W3 Design Award</h4>
                <p className="fancybox__desc">
                  Awards celebrates digital by honoring outstanding Websites,
                  Web Marketing, Video, Sites, Apps &amp; Social content.
                </p>
              </div>
              {/* /.fancybox-content */}
            </div>
            {/* /.fancybox-item */}
          </div>
          {/* /.col-lg-3 */}
          <div className="col-sm-6 col-md-6 col-lg-3">
            {/* fancybox item #3 */}
            <div className="fancybox-item">
              <div className="fancybox__icon-img">
                <img src={img} alt="icon" />
              </div>
              {/* /.fancybox__icon-img */}
              <div className="fancybox__content">
                <h4 className="fancybox__title">The FWA Award</h4>
                <p className="fancybox__desc">
                  Showcasing innovation every day since 2000, our mission is to
                  showcase cutting edge creativity, regardless
                </p>
              </div>
              {/* /.fancybox-content */}
            </div>
            {/* /.fancybox-item */}
          </div>
          {/* /.col-lg-3 */}
          <div className="col-sm-6 col-md-6 col-lg-3">
            {/* fancybox item #4 */}
            <div className="fancybox-item">
              <div className="fancybox__icon-img">
                <img src={img} alt="icon" />
              </div>
              {/* /.fancybox__icon-img */}
              <div className="fancybox__content">
                <h4 className="fancybox__title">WWW Awards</h4>
                <p className="fancybox__desc">
                  The awards that recognize the talent and effort of the best
                  web designers, developers and agencies in the world.
                </p>
              </div>
              {/* /.fancybox-content */}
            </div>
            {/* /.fancybox-item */}
          </div>
          {/* /.col-lg-3 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
