import { useContext } from "react"
import React from 'react'
import { ShopContext } from "../context/ShopContext"

const LatestCollection = () => {
    const {products}=useContext(ShopContext)
   
  return (
    <div>LatestCollection</div>
  )
}

export default LatestCollection