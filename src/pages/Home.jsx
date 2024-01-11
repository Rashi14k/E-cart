import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, navigateToNextPage, navigateToPreviousPage } from '../Redux/Slices/productSlice'
import { Card, Col, Row, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

function Home() {
  const dispatch=useDispatch()
  const {allProducts,loading,error, productPerPage,currentPage}=useSelector(state=>state.productReducer)
  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
  const totalPage=Math.ceil(allProducts?.length/productPerPage)
  const lastProductIndex=currentPage*productPerPage
  const firstProductIndex=lastProductIndex-productPerPage
  const visibleProductCard=allProducts?.slice(firstProductIndex,lastProductIndex)
  const handleNextPage=()=>{
    if(currentPage!=3){
      dispatch(navigateToNextPage())

    }  
  }
  const handlePrevPage=()=>{
   if(currentPage!=1){
    dispatch(navigateToPreviousPage())

   }
  }

  return (
    <>
    <Header insideHome />
    <div style={{paddingTop:'100px'}}>
      {
        loading?<div className='mt-5  text-center'><Spinner animation="border" variant="dark" />LOADING</div>:
        <Row className='m-5'>
          {allProducts?.length>0?visibleProductCard?.map((product,index)=>(
          <Col key={index} className='mb-3'sm={12} m={6} lg={4} xl={3}>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'200px'} src={product?.thumbnail} />
      <Card.Body>
        <Card.Title>{product?.title.slice(0,20)}...</Card.Title>
        
       <div> <Link to={`/view/${product?.id}`} className='btn btn-link'>view</Link>  </div>
      </Card.Body>
    </Card>
          </Col>
          )):<div className='fw-bolder text-center mt-5 text-danger'><h1>Product Not Found</h1></div>
         }
        </Row>
      }
      <div className='d-flex justify-content-center'>
        <span onClick={handlePrevPage} style={{cursor:'pointer'}}><i class="fa-solid fa-backward"></i></span>
        <span style={{cursor:'pointer'}}>{currentPage} of {totalPage}</span>
        <span onClick={handleNextPage} style={{cursor:'pointer'}}><i class="fa-solid fa-forward"></i></span>
      </div>
        
        </div>
        </>
  )
}

export default Home