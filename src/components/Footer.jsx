import React from 'react'

import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column bg-info text-light mt-5' style={{width:"100%", height:"300px"}}>
      <div className='"footer-content d-flex justify-content-evenly w-100 flex-wrap'>
        <div style={{width:"400px"}} className='website'>
          <h4><i className="fa-solid fa-cart-arrow-down"></i>E cart</h4>
          <h6>designed to build with all the love in the world by the luminar team with the help of our contributers.</h6>
          <h6>code licensed luminar, docs CC by 3.0.</h6>
          <p>currently v1.0.0</p>
        </div>
        
      </div>
    </div>
  )
}

export default Footer