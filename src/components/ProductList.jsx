import React from 'react'

const ProductList = () => {

    const products =[
        {id:1,  name:"phone", price:"$699"},
        {id:2,  name:"Laptop", price:"$1200"},
        {id:3,  name:"Headphones", price:"$199"},

    ]
  return (
   <>
   {products.map((products)=>(
<div key={products.id}>
    <p>{products.name}</p>
    <p>{products.price}</p>

</div>
   ))}
   </>
  )
}
export default ProductList