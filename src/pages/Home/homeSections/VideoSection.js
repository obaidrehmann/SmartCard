import React from "react";
import Minislider from "../../../components/slider/Minislider";
import Aboutone from "../../../assets/images/about/2.jpg";
import VideoSlider from "../../../components/slider/VideoSlider";

export default function VideoSection() {
  return (
    <>
      <section className="blog-grid pb-50">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
              <div className="heading text-center mb-40">
                <h2 className="heading__subtitle">Recent Videos</h2>
                <h3 className="heading__title">Videos Library</h3>
              </div>
              {/* /.heading */}
            </div>
            {/* /.col-lg-6 */}
          </div>
          {/* /.row */}
          <div className="row">
            {/* Blog Item #1 */}
            <div className="col-sm-12 col-md-12 col-lg-12">
              <VideoSlider />

              {/* /.post-item */}
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
    </>
  );
}
