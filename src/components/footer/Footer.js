import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footerContainer">
        {/* <div className="footerTrigger onlyMobile">
          <button>Company Info</button>
        </div> */}
        <div className="footerControl">
          <div className="grid gridFrFooter footer">
            <div className="footerAddressInfo">
              <img
                className="footerLogo"
                src="./images/wholesalecart_logo.2e99595c.svg"
                alt=""
                loading="lazy"
              />
              <div className="info">
                <div className="flexRow align-center mt15 mb05">
                  <img
                    src="./images/location.407d3268.svg"
                    alt=""
                    loading="lazy"
                  />
                  <span className="bold uppercase">Head Office: </span>
                </div>
                <span>
                  Floor: 1 &amp; 3, House: 30, Road: 11, Sector: 4, Uttara,
                  Dhaka-1230 Bangladesh
                </span>
              </div>
              <div className="info" style={{ marginTop: "15px" }}>
                <div className="flexRow align-center  mt05 mb05">
                  <img
                    src="./images/email.684d7723.svg"
                    alt=""
                    loading="lazy"
                  />
                  <span className="bold uppercase">Email: </span>
                </div>
                <span>info@wholesalecart.com</span>
              </div>
              <div className="info" style={{ marginTop: "15px" }}>
                <div className="flexRow align-center mt05 mb05">
                  <img src="./images/call.2c221fe6.svg" alt="" loading="lazy" />
                  <span className="bold uppercase">Phone: </span>
                </div>
                <span>+88 09666-799125</span>
              </div>
            </div>
            <div className="information" style={{ fontSize: "14px" }}>
              <h3
                className="mb05 bold uppercase"
                style={{ marginBottom: "15px" }}
              >
                Customer
              </h3>
              <div>
                <a href="/offers">Offers</a>
              </div>
              <div>
                <a href="/account">Account</a>
              </div>
              <div>
                <a href="/cart">Cart</a>
              </div>
              <div>
                <a href="/wishlist">Wishlist</a>
              </div>
              <div>
                <a href="/account/support">Support</a>
              </div>
              <div>
                <a
                  href="https://onesalemart.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="OnesaleMart"
                >
                  Retail Purchase
                </a>
              </div>
            </div>
            <div className="information" style={{ fontSize: "14px" }}>
              <h3
                className="mb05 bold uppercase"
                style={{ marginBottom: "15px" }}
              >
                Information
              </h3>
              <div>
                <a href="/about-us">About us</a>
              </div>
              <div>
                <a href="/contact-us">Contact Us</a>
              </div>
              <div>
                <a href="/privacy-policy">Privacy Policy</a>
              </div>
              <div>
                <a href="/returns-refunds">Returns &amp; Refund</a>
              </div>
              <div>
                <a href="/terms-conditions">Terms &amp; Conditions</a>
              </div>
              <div>
                <a href="/why-believe-us">Why do you believe us?</a>
              </div>
              <div>
                <a href="/certificates">Certificates</a>
              </div>
            </div>
            <div
              className="information flexColumn"
              style={{ fontSize: "14px" }}
            >
              <h3
                className="mb05 bold uppercase"
                style={{ marginBottom: "15px" }}
              >
                Mobile Apps
              </h3>
              <a
                href="https://play.google.com/store/apps/details?id=com.wholesalecartbd.mobileapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="playstore"
              >
                <img
                  src="./images/playstore.c51668c5.png"
                  alt=""
                  loading="lazy"
                  style={{ width: "120px", marginBottom: "0.5rem" }}
                />
              </a>
              <img
                src="./images/applestore.d18aeb33.png"
                alt=""
                loading="lazy"
                style={{ width: "120px" }}
              />
              <div style={{ marginTop: "10px" }}>
                <h3
                  className="bold mb05 mt1 uppercase"
                  style={{ marginBottom: "15px" }}
                >
                  Social Links
                </h3>
                <div style={{ display: "flex", justifyContent: "flex-start" }}>
                  <a
                    href="https://www.facebook.com/Wholesalecard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="socialLink"
                    aria-label="facebook"
                  >
                    <img
                      src="./images/facebook_round.cebbbbea.svg"
                      alt="facebook"
                      loading="lazy"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/wholesalecard"
                    className="socialLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="instagram"
                  >
                    <img
                      src="./images/instagram.6948ea4b.svg"
                      alt="instagram"
                      loading="lazy"
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCzE9yHoLJS9g_NM7wBWKPSg"
                    className="socialLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="youtube"
                  >
                    <img
                      src="./images/youtube.a166d430.svg"
                      alt="youTube"
                      loading="lazy"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/wholesalecart"
                    className="socialLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="linkedin"
                  >
                    <img
                      src="./images/linkedin.8f3ee2e4.svg"
                      alt="linkedin"
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="companyLogos">
            <a
              href="https://acceptglobal.ltd/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="acceptglobal"
            >
              <img
                src="./images/acceptglobal.682a162e.svg"
                alt=""
                loading="lazy"
                style={{ width: "250px", marginBottom: "1.5rem" }}
              />
            </a>
            <div className="sisters">
              <a href="/" aria-label="wholesalecart">
                <img
                  src="./images/wholesalecart_yellow.9757aec6.svg"
                  alt=""
                  loading="lazy"
                />
              </a>
              <a
                href="https://onesalemart.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="OnesaleMart"
              >
                <img
                  src="./images/onesalemart.19866de4.svg"
                  alt=""
                  loading="lazy"
                  style={{ padding: "0.75rem" }}
                />
              </a>
              <a
                href="https://shipbaz.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="shipbaz"
              >
                <img
                  src="./images/shipbaz.02ab2cb0.svg"
                  alt=""
                  loading="lazy"
                />
              </a>
              <a
                href="https://azobshop.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="azobshop"
              >
                <img
                  src="./images/azobshop.e7dbe5ca.svg"
                  alt=""
                  loading="lazy"
                  style={{ padding: "0.75rem" }}
                />
              </a>
            </div>
          </div>
          <div className="companyAddresses" style={{ display: "none" }}>
            <div className="companyAddress">
              <div>Head Office:</div>
              <div>
                Floor: 1&amp;3, House: 30, Road: 11, Sector: 4, Uttara,
                Dhaka-1230 Bangladesh
              </div>
              <div>Phone: (+88) 09666-799125</div>
              <div>Email: info@wholesalecart.com</div>
            </div>
          </div>
          <div
            className="p15 flexRow align-center justify-center"
            style={{ fontSize: "13px" }}
          >
            <a
              href="https://acceptglobal.ltd/"
              target="_blank"
              rel="noopener noreferrer"
              className="bold mr05"
            >
              ACCEPT GLOBAL LIMITED.
            </a>{" "}
            2019- 2022 All rights reserved
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
