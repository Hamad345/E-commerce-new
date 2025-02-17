import { useState } from 'react'
import Collection from "./pages/Collection"
import Home from './pages/Home'
import About from "./pages/About"
import Contact from "./pages/Contact"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import PlaceOrder from "./pages/PlaceOrder"
import Orders from "./pages/Orders"

import './App.css'

import { Routes,Route } from 'react-router'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] '>
  <ToastContainer/>
  <Navbar/>
  <SearchBar/> 
  <Routes>
    <Route path='/'  element={<Home/>} />
     <Route path='/collection'  element={<Collection/>} />
      <Route path='/about'  element={<About/>} />
       <Route path='/contact'  element={<Contact/>} />
       <Route path='/product/:productId'  element={<Product/>} />
        <Route path='/cart'  element={<Cart/>} />
         <Route path='/login'  element={<Login/>} />
          <Route path='/place-order'  element={<PlaceOrder/>} />
           <Route path='/orders'  element={<Orders/>} />

  </Routes>
  <Footer/>

 

</div>
       
    </>
  )
}

export default App
