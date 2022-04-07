import React from "react";
import "./products.css";
import { Link } from "react-router-dom";

const MoreToLove = () => {
  const products = [
    {
      image: "./images/3664309859_71249081.310x310.jpg",
      productName:
        "Mosquito liquid factory direct wholesale mosquito repellent 无 heater set plug-in home mosquito mosquito mosquitoes",
      price: "81.0",
      sold: "123",
    },
    {
      image: "./images/21113119351_234778583.jpg",
      productName:
        "Mosquito liquid factory direct wholesale mosquito repellent 无 heater set plug-in home mosquito mosquito mosquitoes",
      price: "81.0",
      sold: "123",
    },
    {
      image: "./images/3958279388_773361498.310x310.jpg",
      productName:
        "Mosquito liquid factory direct wholesale mosquito repellent 无 heater set plug-in home mosquito mosquito mosquitoes",
      price: "81.0",
      sold: "123",
    },
    {
      image: "./images/9447256611_129583247.310x310.jpg",
      productName:
        "Mosquito liquid factory direct wholesale mosquito repellent 无 heater set plug-in home mosquito mosquito mosquitoes",
      price: "81.0",
      sold: "123",
    },
    {
      image: "./images/10219894788_884432421.310x310.jpg",
      productName:
        "Mosquito liquid factory direct wholesale mosquito repellent 无 heater set plug-in home mosquito mosquito mosquitoes",
      price: "81.0",
      sold: "123",
    },
    {
      image: "./images/9766257369_1780590117.310x310.jpg",
      productName:
        "Mosquito liquid factory direct wholesale mosquito repellent 无 heater set plug-in home mosquito mosquito mosquitoes",
      price: "81.0",
      sold: "123",
    },
    {
      image: "./images/9637456963_2071911816.310x310.jpg",
      productName:
        "Mosquito liquid factory direct wholesale mosquito repellent 无 heater set plug-in home mosquito mosquito mosquitoes",
      price: "81.0",
      sold: "123",
    },
    {
      image: "./images/9578421426_979647318.310x310.jpg",
      productName:
        "Mosquito liquid factory direct wholesale mosquito repellent 无 heater set plug-in home mosquito mosquito mosquitoes",
      price: "81.0",
      sold: "123",
    },
    {
      image: "./images/11356381628_229078047.310x310.jpg",
      productName:
        "Mosquito liquid factory direct wholesale mosquito repellent 无 heater set plug-in home mosquito mosquito mosquitoes",
      price: "81.0",
      sold: "123",
    },
    {
      image: "./images/11391659761_241429925.310x310.jpg",
      productName:
        "Mosquito liquid factory direct wholesale mosquito repellent 无 heater set plug-in home mosquito mosquito mosquitoes",
      price: "81.0",
      sold: "123",
    },
    {
      image: "./images/10219894788_884432421.310x310.jpg",
      productName:
        "Mosquito liquid factory direct wholesale mosquito repellent 无 heater set plug-in home mosquito mosquito mosquitoes",
      price: "81.0",
      sold: "123",
    },
    {
      image: "./images/9578421426_979647318.310x310.jpg",
      productName:
        "Mosquito liquid factory direct wholesale mosquito repellent 无 heater set plug-in home mosquito mosquito mosquitoes",
      price: "81.0",
      sold: "123",
    },
    {
      image: "./images/11356381628_229078047.310x310.jpg",
      productName:
        "Mosquito liquid factory direct wholesale mosquito repellent 无 heater set plug-in home mosquito mosquito mosquitoes",
      price: "81.0",
      sold: "123",
    },
    {
      image: "./images/11391659761_241429925.310x310.jpg",
      productName:
        "Mosquito liquid factory direct wholesale mosquito repellent 无 heater set plug-in home mosquito mosquito mosquitoes",
      price: "81.0",
      sold: "123",
    },
    {
      image: "./images/3664309859_71249081.310x310.jpg",
      productName:
        "Mosquito liquid factory direct wholesale mosquito repellent 无 heater set plug-in home mosquito mosquito mosquitoes",
      price: "81.0",
      sold: "123",
    },
    {
      image: "./images/21113119351_234778583.jpg",
      productName:
        "Mosquito liquid factory direct wholesale mosquito repellent 无 heater set plug-in home mosquito mosquito mosquitoes",
      price: "81.0",
      sold: "123",
    },
    {
      image: "./images/3958279388_773361498.310x310.jpg",
      productName:
        "Mosquito liquid factory direct wholesale mosquito repellent 无 heater set plug-in home mosquito mosquito mosquitoes",
      price: "81.0",
      sold: "123",
    },
    {
      image: "./images/9447256611_129583247.310x310.jpg",
      productName:
        "Mosquito liquid factory direct wholesale mosquito repellent 无 heater set plug-in home mosquito mosquito mosquitoes",
      price: "81.0",
      sold: "123",
    },

    {
      image: "./images/9766257369_1780590117.310x310.jpg",
      productName:
        "Mosquito liquid factory direct wholesale mosquito repellent 无 heater set plug-in home mosquito mosquito mosquitoes",
      price: "81.0",
      sold: "123",
    },
    {
      image: "./images/9637456963_2071911816.310x310.jpg",
      productName:
        "Mosquito liquid factory direct wholesale mosquito repellent 无 heater set plug-in home mosquito mosquito mosquitoes",
      price: "81.0",
      sold: "123",
    },
    {
      image: "./images/21113119351_234778583.jpg",
      productName:
        "Mosquito liquid factory direct wholesale mosquito repellent 无 heater set plug-in home mosquito mosquito mosquitoes",
      price: "81.0",
      sold: "123",
    },
    {
      image: "./images/10880668247_779755296.jpg",
      productName:
        "Mosquito liquid factory direct wholesale mosquito repellent 无 heater set plug-in home mosquito mosquito mosquitoes",
      price: "81.0",
      sold: "123",
    },
    {
      image: "./images/9637456963_2071911816.310x310.jpg",
      productName:
        "Mosquito liquid factory direct wholesale mosquito repellent 无 heater set plug-in home mosquito mosquito mosquitoes",
      price: "81.0",
      sold: "123",
    },
    {
      image: "./images/16486552484_1691392531.jpg",
      productName:
        "Mosquito liquid factory direct wholesale mosquito repellent 无 heater set plug-in home mosquito mosquito mosquitoes",
      price: "81.0",
      sold: "123",
    },
    {
      image: "./images/12538494035_448473951.jpg",
      productName:
        "Mosquito liquid factory direct wholesale mosquito repellent 无 heater set plug-in home mosquito mosquito mosquitoes",
      price: "81.0",
      sold: "123",
    },
    {
      image: "./images/22251046004_1729996112.jpg",
      productName:
        "Mosquito liquid factory direct wholesale mosquito repellent 无 heater set plug-in home mosquito mosquito mosquitoes",
      price: "81.0",
      sold: "123",
    },
    {
      image: "./images/9637456963_2071911816.310x310.jpg",
      productName:
        "Mosquito liquid factory direct wholesale mosquito repellent 无 heater set plug-in home mosquito mosquito mosquitoes",
      price: "81.0",
      sold: "123",
    },
    {
      image: "./images/21465293072_509821964.jpg",
      productName:
        "Mosquito liquid factory direct wholesale mosquito repellent 无 heater set plug-in home mosquito mosquito mosquitoes",
      price: "81.0",
      sold: "123",
    },
    {
      image: "./images/9447256611_129583247.310x310.jpg",
      productName:
        "Mosquito liquid factory direct wholesale mosquito repellent 无 heater set plug-in home mosquito mosquito mosquitoes",
      price: "81.0",
      sold: "123",
    },
    {
      image: "./images/9393574217_502730278.jpg",
      productName:
        "Mosquito liquid factory direct wholesale mosquito repellent 无 heater set plug-in home mosquito mosquito mosquitoes",
      price: "81.0",
      sold: "123",
    },
  ];
  return (
    <>
      <div style={{}}>
        <div
          className="flexRow align-center card mb1 nombphone mt-4"
          style={{ padding: "0.5rem 1rem", textAlign: "center" }}
        >
          <img
            src="./images/favourite.2faf520e.svg"
            alt=""
            style={{ width: "20px" }}
          />
          <h4
            className="text-center"
            style={{ width: "100%", fontSize: "20px", fontWeight: "bold" }}
          >
            MORE TO LOVE
          </h4>
          <img
            src="./images/favourite.2faf520e.svg"
            alt=""
            style={{ width: "20px" }}
          />
        </div>
        <div className="productContainerMargin">
          <div className="card">
            <div>
              <div className="productList productContainerProductList">
                {products.map((product, index) => (
                  <div className="product border">
                    <Link to={""} style={{ width: "100%" }}>
                      <img
                        className="productImage"
                        src={product.image}
                        loading="lazy"
                        alt=""
                        style={{ marginTop: "1rem" }}
                      />
                      <div
                        style={{
                          width: "100%",
                          padding: "0.5rem 0.5rem 0.275rem",
                        }}
                      >
                        <span className="productName block">
                          {product.productName}
                        </span>
                        <div className="flexRow flexSpaceBetween align-center mt05 priceSoldContainer">
                          <span className="productPrice block">
                            ৳ {product.price}
                          </span>
                          <span className="block soldBadge">
                            SOLD: {product.sold}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flexRow align-center justify-center mt2 mb-5">
          <button className="bt ripple">Load More</button>
        </div>
      </div>
    </>
  );
};

export default MoreToLove;
