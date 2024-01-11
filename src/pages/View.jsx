import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { addToWishlist } from '../Redux/Slices/wishlistSlice';
import { addToCart } from '../Redux/Slices/cartSlice';
import Header from '../components/Header';

function View() {
  const {id}= useParams()
  console.log(id);
  const[product,setProduct]= useState({})
  const wishlist= useSelector(state=>state.wishlistReducer)
  const dispatch=useDispatch()
  useEffect(()=>{
    const allProducts=JSON.parse(sessionStorage.getItem("allProducts"))
    setProduct(allProducts?.find(item=>item.id==id))
  },[])
  //console.log(wishlist)

  const handleWishlist=(product)=>{
    const existingproduct=wishlist?.find(item=>item.id==product.id)
    if(existingproduct){
      alert("already exist")
    }
    else{
      dispatch(addToWishlist(product))
    }
  }
  return (
    <>
    <Header />
    <div style={{paddingTop:'100px'}}>
      <div className='container mt-5 mb-5'>
        <div className='row'>
          <div className='col-lg-4'>
            <img height={"300px"} src={product?.thumbnail} className='' alt=''/>
          </div>
          <div className='col-lg-2'></div>
          <div className='col-lg-6'>
            <h3>PID:{product?.id}</h3>
            <h1>{product?.title}</h1>
            <h3>${product?.price}</h3>
            <p style={{textAlign:'justify'}}>Description:{product?.description}</p>
            <div className='d-flex justify-content-between mt-5'>
              <button onClick={()=>handleWishlist(product)} className='btn btn-outline-dark'><i className="fa-solid fa-heart text-danger"></i>add to wishlist</button>
              <button onClick={()=>dispatch(addToCart(product))} className='btn btn-outline-dark'><i className="fa-solid fa-cart-plus text-success"></i>add to cartt</button>
            </div>
          </div>
        </div>
      </div>


    </div>
    </>
  )
}
export default View