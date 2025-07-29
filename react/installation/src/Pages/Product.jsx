import React from 'react'
import Stall from './Stall'

function Product({img,name,desc,price}) {
  return (
    <>
    <div className='box'>
       <img src={img}  />
        <h4>{name}</h4>
        <p>{desc}</p>
        <h4>{price}</h4>
        
    </div>
    <Stall product="Shoes" brand="addidas" price="3499"/>
    </>
 
  )
}

export default Product
