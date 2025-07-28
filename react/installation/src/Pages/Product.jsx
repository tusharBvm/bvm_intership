import React from 'react'

function Product({img,name,desc,price}) {
  return (
    <>
    <div className='box'>
       <img src={img}  />
        <h4>{name}</h4>
        <p>{desc}</p>
        <h4>{price}</h4>
    </div>
    </>
 
  )
}

export default Product
