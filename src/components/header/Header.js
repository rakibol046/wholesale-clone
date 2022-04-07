import React from "react";
import { Link } from "react-router-dom";
import "./text.css";
const TextNav = () => {
  return (
    <>
      <nav>
        <div className="navStart">
          <Link
            to=""
            aria-label="home"
            style={{
              display: "flex",
              justifyContent: "center",
              color: "white",
            }}
          >
            <img src="./images/wholesalecart_logo.2e99595c.svg" alt="" />
          </Link>
        </div>
        <div className="navSearch">
          <div className="searchContainer platformSelect">
            <div className="imageUploaderContainer">
              <img
                className="arrowRight"
                src="./images/camera.27f45331.svg"
                alt=""
                style={{
                  width: "24px",
                  marginLeft: "0.65rem",
                  cursor: "pointer",
                }}
              />
              <label for="inputId" style={{ position: "fixed", top: "-100em" }}>
                Image Search
              </label>
              <input
                name="uploadImage"
                id="inputId"
                type="file"
                style={{ position: "fixed", top: "-100em" }}
              />
            </div>
            <label for="name" style={{ width: "0px", overflow: "hidden" }}>
              Search
            </label>
            <input
              type="text"
              list="suggestions"
              autocomplete="off"
              name="search"
              id="searchprod"
              placeholder="Search By Link"
              value=""
              style={{ borderRadius: "4px 0px 0px 4px", fontSize: "13px" }}
            />
            <datalist id="suggestions">
              <option value="shoes"></option>
              <option value="loafers for men"></option>
              <option value="boots for men"></option>
              <option value="formal shoes for men"></option>
            </datalist>
            <select
              name="platform"
              style={{ marginRight: "0.5rem", fontSize: "13px" }}
            >
              <option value="china">China</option>
              <option value="alibaba">Alibaba</option>
            </select>
            <div className="bt btSearch">
              <img
                className="arrowRight"
                src="./images/search_white.3a327b42.svg"
                alt=""
                style={{ width: " 24px" }}
              />
            </div>
          </div>
        </div>
        <div className="navIconsContainer">
          <Link aria-label="cart" title="Cart" to="">
            <img
              src="./images/cart.e56831e9.svg"
              alt=""
              style={{ padding: "2px" }}
            />
            <span style={{ fontSize: "12px", fontWeight: "bold" }}>0</span>
          </Link>
          <Link aria-label="wishlist" title="Wishlist" to="">
            <img
              src="./images/favourite.2faf520e.svg"
              alt=""
              style={{ padding: "9px" }}
            />
            <span
              style={{
                marginLeft: "-6px",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              0
            </span>
          </Link>
          <Link to="" aria-label="chat" title="Live Chat">
            <img src="./images/chat_white.798f26e3.svg" alt="" />
          </Link>
          <Link aria-label="account" title="Account" to="">
            <div
              style={{
                display: "grid",
                alignItems: "center",
                gridTemplateColumns: "44px 1fr",
              }}
            >
              <img
                src="./images/person.8159e527.svg"
                alt=""
                style={{ padding: "6px" }}
              />
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default TextNav;
