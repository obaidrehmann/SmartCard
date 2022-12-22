import React, { Component } from "react";
import Slider from "react-slick";
import Aboutone from "../../assets/images/about/2.jpg";

export default class VideoSlider extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings}>
          <section className="about-layout4 mb-100">
            <div className="container">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <h4>watach us</h4>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                  <div className="about__img">
                    <img src={Aboutone} alt="about" />
                  </div>
                  {/* /.about-img */}
                  <div className="video__btn-wrapper">
                    <a
                      className="video__btn video__btn-white popup-video"
                      href="https://www.youtube.com/watch?v=nrJtHemSPW4">
                      <div className="video__player">
                        <i className="fa fa-play" />
                      </div>
                      <span className="video__btn-title">
                        Watch Our Presentation!
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="about-layout4 mb-100">
            <div className="container">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <h4>watach us</h4>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                  <div className="about__img">
                    <img src={Aboutone} alt="about" />
                  </div>
                  {/* /.about-img */}
                  <div className="video__btn-wrapper">
                    <a
                      className="video__btn video__btn-white popup-video"
                      href="https://www.youtube.com/watch?v=nrJtHemSPW4">
                      <div className="video__player">
                        <i className="fa fa-play" />
                      </div>
                      <span className="video__btn-title">
                        Watch Our Presentation!
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="about-layout4 mb-100">
            <div className="container">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <h4>watach us</h4>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                  <div className="about__img">
                    <img src={Aboutone} alt="about" />
                  </div>
                  {/* /.about-img */}
                  <div className="video__btn-wrapper">
                    <a
                      className="video__btn video__btn-white popup-video"
                      href="https://www.youtube.com/watch?v=nrJtHemSPW4">
                      <div className="video__player">
                        <i className="fa fa-play" />
                      </div>
                      <span className="video__btn-title">
                        Watch Our Presentation!
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="about-layout4 mb-100">
            <div className="container">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <h4>watach us</h4>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                  <div className="about__img">
                    <img src={Aboutone} alt="about" />
                  </div>
                  {/* /.about-img */}
                  <div className="video__btn-wrapper">
                    <a
                      className="video__btn video__btn-white popup-video"
                      href="https://www.youtube.com/watch?v=nrJtHemSPW4">
                      <div className="video__player">
                        <i className="fa fa-play" />
                      </div>
                      <span className="video__btn-title">
                        Watch Our Presentation!
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="about-layout4 mb-100">
            <div className="container">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <h4>watach us</h4>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                  <div className="about__img">
                    <img src={Aboutone} alt="about" />
                  </div>
                  {/* /.about-img */}
                  <div className="video__btn-wrapper">
                    <a
                      className="video__btn video__btn-white popup-video"
                      href="https://www.youtube.com/watch?v=nrJtHemSPW4">
                      <div className="video__player">
                        <i className="fa fa-play" />
                      </div>
                      <span className="video__btn-title">
                        Watch Our Presentation!
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="about-layout4 mb-100">
            <div className="container">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <h4>watach us</h4>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                  <div className="about__img">
                    <img src={Aboutone} alt="about" />
                  </div>
                  {/* /.about-img */}
                  <div className="video__btn-wrapper">
                    <a
                      className="video__btn video__btn-white popup-video"
                      href="https://www.youtube.com/watch?v=nrJtHemSPW4">
                      <div className="video__player">
                        <i className="fa fa-play" />
                      </div>
                      <span className="video__btn-title">
                        Watch Our Presentation!
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Slider>
      </div>
    );
  }
}
