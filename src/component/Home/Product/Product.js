import React, { useEffect } from "react";
import Products from "./Products";
let Product = (props) => {
  let ShowProduct = (e) => {
    let result = null;
    if (e.length > 0) {
      result = e.slice(0, 6).map((item, index) => {
        return <Products onClick={() => add_Cart(item)} pid={item._id} img={item.productImage} star={item.star} key={index} sale={item.sale} name={item.name} price={item.price}></Products>;
      });
    }
    return result;
  }
  let { products_, add_Cart } = props;
  return (
    <div className="container row-locations-mansory gray-bg">
      <div className="seamaster" id="seamaster">
        <h5 className="textSenma">SEAMASTER DIVER 300M<br />COLLECTION</h5>
        <p className="Discover_">Discover the new look of an VICTORINOX icon! 25 years after the first Seamaster Diver 300M, the collection<br />has been beautifully updated from the inside out.</p><br />
        <div style={{display : 'flex'}}>
          <button className="btn_ btn_a img-fluid mx-auto d-blockk">Discover the collection</button>
        </div>
      </div>
      <br /><br />
      <div id="product" className="container">
        <div className="row">
          {ShowProduct(products_)}
        </div>
      </div>
    </div>
  );
}
export default Product;