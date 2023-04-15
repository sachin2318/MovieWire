import React from "react";

const Footer = () => {
  console.log("done");
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Owner</h4>
            <ul>
              <li>
                <a href="#">
                  <i>Made By Shubham</i> 😊
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;