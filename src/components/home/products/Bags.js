import React from "react";
import "./products.css";
import { Link } from "react-router-dom";

const Bags = () => {
  const products = [
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
  ];
  return (
    <>
      <div style={{}}>
        <div class="productContainerMargin">
          <div class="card">
            <div
              class="flexRow align-center flexSpaceBetween bottom-border"
              style={{ padding: "1rem 1.5rem" }}
            >
              <h4 class="bold">BAGS</h4>
              <button class="bt ripple">View More</button>
            </div>
            <div>
              <div class="productList productContainerProductList">
                {products.map((product, index) => (
                  <div class="product border">
                    <Link to={""} style={{ width: "100%" }}>
                      <img
                        class="productImage"
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
                        <span class="productName block">
                          {product.productName}
                        </span>
                        <div class="flexRow flexSpaceBetween align-center mt05 priceSoldContainer">
                          <span class="productPrice block">
                            ৳ {product.price}
                          </span>
                          <span class="block soldBadge">
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
      </div>
    </>
  );
};

export default Bags;
