
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Wishlist from './pages/Wishlist'
import View from './pages/View'
import Header from './components/Header'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Footer from './components/Footer'


function App() {

  return (
    <div>
   
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/view/:id' element={<View/>} />
        <Route path='/*' element={<Navigate to={'/'}/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
