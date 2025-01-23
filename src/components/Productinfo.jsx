import React from 'react'

const Productinfo = () => {

let product ={
    name: "Laptop",
    Price: "$1200",
    availability: "in Stock"
}
  return (
    <>
    <p>{product.name}</p>
    <p>{product.Price}</p>
    <p>{product.availability}</p>
    </>
  )
}

export default Productinfo