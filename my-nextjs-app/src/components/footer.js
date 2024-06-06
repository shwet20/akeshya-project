const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="Copyright">
            &copy; Copyright <strong>Akeshya</strong>. All Rights Reserved
          </div>
          <div>
            <ul className="d-flex list-unstyled">
              <li className="px-3">
                <a href="#">Terms and conditions</a>
              </li>
              <li className="px-3">
                <a href="#">Refund policy</a>
              </li>
              <li className="px-3">
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
