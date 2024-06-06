import React from "react";
import Image from "next/image";

const Clients = () => {
  return (
    <section id="clients" className="clients clients">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-4 col-6">
            <Image
              src="/assets/clients/client-1.png"
              alt="client img"
              className="img-fluid"
              width={200}
              height={100}
              data-aos="zoom-in"
            />
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <Image
              src="/assets/clients/client-2.png"
              alt="client img"
              className="img-fluid"
              width={200}
              height={100}
              data-aos="zoom-in"
              data-aos-delay="100"
            />
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <Image
              src="/assets/clients/client-3.png"
              alt="client img"
              className="img-fluid"
              width={200}
              height={100}
              data-aos="zoom-in"
              data-aos-delay="200"
            />
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <Image
              src="/assets/clients/client-4.png"
              alt="client img"
              className="img-fluid"
              width={200}
              height={100}
              data-aos="zoom-in"
              data-aos-delay="300"
            />
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <Image
              src="/assets/clients/client-5.png"
              alt="client img"
              className="img-fluid"
              width={200}
              height={100}
              data-aos="zoom-in"
              data-aos-delay="400"
            />
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <Image
              src="/assets/clients/client-6.png"
              alt="client img"
              className="img-fluid"
              width={200}
              height={100}
              data-aos="zoom-in"
              data-aos-delay="500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
