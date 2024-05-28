import React from 'react';
import { NavLink } from 'react-router-dom';
import DATA from '../Data';
import '../App.css'
const Product = () => {
  const cardItem = (item) => {
    return (
      <div className="col-md-3 mb-4  cardsi  " key={item.id}>
        <div className="card cardsi h-100 text-center p-4 shadow-sm p-3 mb-5 bg-white rounded">
          <img src={item.img} height="250px" className="card-img-top" alt={item.title} />
          <div className="card-body">
            <h5 className="card-title mb-0">{item.title.substring(0, 20)}...</h5>
            <p className="card-text lead fw-bold">${item.price}</p>
            <NavLink to={`/products/${item.id}`} className="btn btn-outline-dark">
              Buy Now
            </NavLink>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
          <hr></hr>
        </div>
      </div>
      <div className="row justify-content-center">
        {DATA.map(cardItem)}
      </div>
    </div>
  );
};

export default Product;
