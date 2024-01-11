
import { Navbar, Nav, Container,Badge } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchByProduct } from '../Redux/Slices/productSlice'

function Header({insideHome}) {
  const wishlist=useSelector((state)=>state.wishlistReducer)
  const cart=useSelector(state=>state.cartReducer)
  const dispatch=useDispatch()
  // const[wishlistCount,setWishlistCount]=useState(0)
  // useEffect(()=>{
  //   setWishlistCount(wishlist?.length)},[wishlist]
  // )
  return (
    <div><Navbar style={{zIndex:2, top:'0'}} expand="lg" className="bg-info w-100 position-fixed" >
    <Container>
      <Navbar.Brand><Link to={'/'} style={{textDecoration:'none', color:'white'}} className='fw-bolder'><i className="fa-solid fa-cart-arrow-down"></i>Daily cart</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
        {insideHome&&<Nav.Link><input onChange={e=>dispatch(searchByProduct(e.target.value.toLowerCase()))} type='text' className='rounded'placeholder='search product here'/></Nav.Link>}
          <Nav.Link><Link to={'/wishlist'} style={{textDecoration:'none', color:'white'}}><i className="fa-solid fa-heart"></i>wishlist<Badge className='bg-black'>{wishlist?.length}</Badge></Link></Nav.Link>
          <Nav.Link><Link to={'/cart'} style={{textDecoration:'none', color:'white'}}><i className="fa-solid fa-cart-shopping"></i>cart<Badge className='bg-black'>{cart?.length}</Badge></Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}

export default Header