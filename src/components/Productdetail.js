import React from 'react'
import { useParams } from 'react-router'
import { useState } from 'react';
import DATA from '../Data';
import { useDispatch } from 'react-redux';
import {addItem, delItem} from '../redux/actions/index'
import { NavLink } from 'react-router-dom';


const ProductDetail = () => {

    const [showVideo, setShowVideo] = useState(false);

  const toggleContent = () => {
    setShowVideo(!showVideo);
  };
    const [cartBtn, setCartBtn] = useState("Add to Cart")

    {/* Now we need a product id which is pass from the product page. */}
    const proid = useParams();

    const proDetail = DATA.filter(x=>x.id == proid.id)

    const product = proDetail[0];
    
    // console.log(product);
    console.log(proDetail)

    // // We need to store useDispatch in a variable
    const dispatch = useDispatch()

    const handleCart = (product) => {
        if (cartBtn == "Add to Cart") {
            dispatch(addItem(product))
            setCartBtn("Remove from Cart")
        }
        else{
            dispatch(delItem(product))
            setCartBtn("Add to Cart")
        }
    }

   

   
    return (
        <>
        <div className="container py-5">
            <div className="row py-5">
            <div className="col-md-6" style={{position:'relative',bottom:'60px'}}>
            
            {showVideo ? (
        <video width="400" height="600" autoPlay muted loop >
          <source src={product.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          src={product.img}
          style={{marginTop:'50px'}}
          alt="Your Image"
          width='400px' height='500px '
        />
      )}
            <span className='animate__animated animate__heartBeat animate__infinite	infinite  ' onClick={toggleContent} style={{position:'absolute',left:'200px',top:'300px',backgroundColor:'none'}}><i style={{fontSize:'50px',color:'white'}} class="fa fa-play-circle" aria-hidden="true"></i></span>
        </div>
        <div className="col-md-6"> 
        <h4 className="text-uppercase text-black-50">{product.category}</h4>
        <h1 className="display-5">{product.title}</h1>
        <p className="lead fw-bolder" style={{backgroundColor:'none'}}>
            Rating { product.rating.rate}<i style={{backgroundColor:'none'}} class="fa fa-star" aria-hidden="true"></i><i style={{backgroundColor:'none'}} class="fa fa-star" aria-hidden="true"></i><i style={{backgroundColor:'none'}} class="fa fa-star" aria-hidden="true"></i> 
            <i style={{backgroundColor:'none'}} className="fa fa-star"></i>
        </p>
        <h3 className="display-6 fw-bold my-4"> ${product.price}</h3>
        <p className="lead">{product.desc}</p>
        <button className="btn btn-outline-dark px-4 py-2" onClick={()=>handleCart(product)}> {cartBtn}</button>
        <NavLink to='/cart' className="btn btn-outline-dark mx-3 px-2 py-2">Go to Cart</NavLink>
        </div>
            </div>
        </div>
         
        </>
    )
}

export default ProductDetail
