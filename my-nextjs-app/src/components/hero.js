import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up">Grow your business with Akeshya</h1>
            <h2 data-aos="fade-up" data-aos-delay="400">
              We are team of talented website designers, developers & digital
              marketeers
            </h2>
            <div data-aos="fade-up" data-aos-delay="800">
              <a href="#about" className="btn-get-started scrollto text-decoration-none">
                Get Started
              </a>
            </div>
          </div>
          <div
            className="col-lg-6 order-1 order-lg-2 hero-img"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <Image
              src="/assets/hero-img.png"
              alt="Hero Image"
              className="img-fluid animated"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
