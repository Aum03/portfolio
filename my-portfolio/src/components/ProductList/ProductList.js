import React from "react";
import "./ProductList.css";
import { products } from "../../data";
import Product from "../Product/Product";
function ProductList() {
  // console.log(products)
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire , It's Aum</h1>
        <p className="pl-desc">
          {" "}
          I am a skilled and experienced website designer, and I am here to
          offer my services to bring your vision to life. With a keen eye for
          aesthetics and a deep understanding of user experience, I am confident
          in my ability to create a stunning and functional website tailored to
          your specific needs.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
