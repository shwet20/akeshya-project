const Counts = () => {
  return (
    <section id="counts" className="counts">
      <div className="container">
        <div className="row">
          <div
            className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            <img src="./assets/counts-img.svg" alt="" className="img-fluid" />
          </div>
          <div
            className="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="content d-flex flex-column justify-content-center">
              <div className="row">
                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="bi bi-emoji-smile"></i>
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="3835039"
                      data-purecounter-duration="2"
                      className="purecounter"
                    >3835039</span>
                    <p>
                      <strong>Organic Reach</strong> (Global)
                    </p>
                  </div>
                </div>
                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="bi bi-journal-richtext"></i>
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="85"
                      data-purecounter-duration="3"
                      className="purecounter"
                    >85</span>
                    <p>
                      <strong>Campaigns</strong>
                    </p>
                  </div>
                </div>
                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="bi bi-clock"></i>
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="14081"
                      data-purecounter-duration="3"
                      className="purecounter"
                    >14081</span>
                    <p>
                      <strong>Watch Hours</strong> (Asia){" "}
                    </p>
                  </div>
                </div>
                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="bi bi-globe"></i>
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="17"
                      data-purecounter-duration="1"
                      className="purecounter"
                    >17</span>
                    <p>
                      <strong>Excellent CTR %</strong> (Asia)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counts;
