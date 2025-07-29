import React from 'react'

const Stall = ({price,brand,product}) => {
  return (
    <div>
      <h1>Product Details</h1>

      <p>{price}</p>
      <p>{brand}</p>
      <p>{product}</p>

    </div>
  )
}

export default Stall
