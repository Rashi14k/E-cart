import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { decQuantity, emptyCart, incQuantity, removeCart } from '../Redux/Slices/cartSlice'
import Header from '../components/Header'

function Cart() {
  const cart=useSelector(state=>state.cartReducer)
  const [totalCartAmount,setTotalCartAmount]=useState(0)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  useEffect(()=>{
    if(cart?.length>0)
  {
  setTotalCartAmount(cart?.map(item=>item.totalPrice)?.reduce((p1,p2)=>p1+p2))
  }
  else{
    setTotalCartAmount(0)
  }
    
  })
  const handleCheckout=()=>{
    alert("oerder placed successfully ...thank you for shopping")
    dispatch(emptyCart())
    navigate('/')

  }
  const handleDecrement=(product)=>{
    if(product.quantity==1){
      dispatch(removeCart(product.id))
    }
    else{
      dispatch(decQuantity(product))
    }
  }
  
  return (
    <>
    <Header />
    <div style={{marginTop:'100px'}}>
      {cart?.length>0?<div className='container'>
          <h1>cart summery</h1>
          <div className='row'>
            <div className='col-lg-8'>
              <table className='table'>
                <thead>
                  <tr>
                  <th>#</th>
                  <th>title</th>
                  <th>image</th>
                  <th>quantity</th>
                  <th>price</th>
                  <th>...</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cart?.map((product,index)=>(
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td>{product?.title}</td>
                        <td><img height={'60px'} width={'60px'} src={product.thumbnail} alt='' /></td>
                        <td><div className='d-flex'>
                          <span onClick={()=>handleDecrement(product)} style={{cursor:'pointer'}} className='fw-bolder'>-</span>
                          <input style={{width:'50px'}} type='text' className='me-4 ms-4' value={product?.quantity} readOnly />
                          <span onClick={()=>dispatch(incQuantity(product))} style={{cursor:'pointer'}} className='fw-bolder'>+</span>
                          
                          </div></td>
                        <td>${product?.totalPrice}</td>
                        <td><button onClick={()=>dispatch(removeCart(product?.id))} className='btn btn-link'><i className='fa-solid fa-trash text-danger'></i></button></td>

                      </tr>
                    ))
                  }
                </tbody>
              </table>
              <div className='float-end mt-3'>
                <button onClick={()=>dispatch(emptyCart())} className='btn btn-danger me-3'>empty cart</button>
                <Link to={'/'} className='btn btn-success'>shop more</Link>
              </div>

            </div>
            <div className='col-lg-4 mt-3'>
              <div className='shadow border rounder p-4'>
                <h5>total product:<span className='fw-bolder text-danger'>{cart?.length}</span></h5>
                <h4>total amount:<span className='fw-bolder text-danger'>{totalCartAmount}</span></h4>
                <br />
                <div className='d-grid mt-4'>
                  <button onClick={handleCheckout} className='btn btn-success'>checkout</button>
                </div>
              </div>
              
            </div>
          </div>
        </div>:
        <div style={{height:'40vh'}}><h1 className='text-dark text-center mt-5'>your cart is empty</h1></div>

      }
    
    </div>
    </>
  )
  
  
}

export default Cart