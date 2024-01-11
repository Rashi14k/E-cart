import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWishlist } from '../Redux/Slices/wishlistSlice';
import { addToCart } from '../Redux/Slices/cartSlice';
import Header from '../components/Header';

function Wishlist() {
  const wishlist=useSelector(state=>state.wishlistReducer)
  console.log(wishlist);
  const dispatch=useDispatch()
  const handleCart=(product)=>{
    dispatch(removeFromWishlist(product.id))
    dispatch(addToCart(product))
  }
  return (
    <>
    <Header />
    <div style={{paddingTop:'100px'}}>
      <div className='container'>
        <Row className='mt-5'>
          {wishlist?.length>0?wishlist?.map(product=>(
        <Col className='mb-3 mt-5'sm={12} m={6} lg={4} xl={3}>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'200px'} src={product?.thumbnail} />
      <Card.Body>
        <Card.Title>{product?.title.slice(0,20)}...</Card.Title>
        <button onClick={()=>dispatch(removeFromWishlist(product?.id))} className='btn btn-link'><i className="fa-solid fa-heart-circle-minus text-danger"></i></button>
        <button onClick={()=>handleCart(product)} className='btn btn-link'><i className="fa-solid fa-cart-plus text-success"></i></button>
        
       
      </Card.Body>
    </Card>
          </Col>
          )):
          <div style={{height:'40vh'}}><h1 className='text-dark text-center'>your wishlist is empty</h1></div>
        }
        </Row>
          

      </div>
    </div>
    </>
  )
}

export default Wishlist