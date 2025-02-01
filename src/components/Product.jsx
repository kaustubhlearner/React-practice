import React from 'react'

const Product = () => {

  let data = [
    {
      "id": 168,
      "title": "Charger SXT RWD",
      "price": 32999.99,
      "quantity": 3,
      "total": 98999.97,
      "discountPercentage": 13.39,
      "discountedTotal": 85743.87,
      "thumbnail": "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/thumbnail.png"
    },
    {
      "id": 78,
      "title": "Apple MacBook Pro 14 Inch Space Grey",
      "price": 1999.99,
      "quantity": 2,
      "total": 3999.98,
      "discountPercentage": 18.52,
      "discountedTotal": 3259.18,
      "thumbnail": "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png"
    },
    {
      "id": 183,
      "title": "Green Oval Earring",
      "price": 24.99,
      "quantity": 5,
      "total": 124.95,
      "discountPercentage": 6.28,
      "discountedTotal": 117.1,
      "thumbnail": "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Oval%20Earring/thumbnail.png"
    },
    {
      "id": 100,
      "title": "Apple Airpods",
      "price": 129.99,
      "quantity": 5,
      "total": 649.95,
      "discountPercentage": 12.84,
      "discountedTotal": 566.5,
      "thumbnail": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png"
    },
    {
      "id": 98,
      "title": "Rolex Submariner Watch",
      "price": 13999.99,
      "quantity": 1,
      "total": 13999.99,
      "discountPercentage": 16.35,
      "discountedTotal": 11710.99,
      "thumbnail": "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/thumbnail.png"
    },
    {
      "id": 125,
      "title": "Oppo A57",
      "price": 249.99,
      "quantity": 5,
      "total": 1249.95,
      "discountPercentage": 16.54,
      "discountedTotal": 1043.21,
      "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20A57/thumbnail.png"
    },
    {
      "id": 55,
      "title": "Egg Slicer",
      "price": 6.99,
      "quantity": 2,
      "total": 13.98,
      "discountPercentage": 16.04,
      "discountedTotal": 11.74,
      "thumbnail": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Egg%20Slicer/thumbnail.png"
    },
    {
      "id": 62,
      "title": "Ice Cube Tray",
      "price": 5.99,
      "quantity": 2,
      "total": 11.98,
      "discountPercentage": 8.25,
      "discountedTotal": 10.99,
      "thumbnail": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Ice%20Cube%20Tray/thumbnail.png"
    },
    {
      "id": 132,
      "title": "Samsung Galaxy S8",
      "price": 499.99,
      "quantity": 3,
      "total": 1499.97,
      "discountPercentage": 8.84,
      "discountedTotal": 1367.37,
      "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S8/thumbnail.png"
    }
  ]

  return (
    <div style={{display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      justifyContent: "center"}}>{
      data.map((product,id) => {
        return (
          <div key={product.id} style={{width:"300px", height: "400px", border: "2px solid black"}}>
            <div><img src={product.thumbnail} alt="" /></div>
            <div><p>{product.title}</p>
            <p>{product.price}</p>
            </div>
          </div>
        )
      })
    }</div>
  )
}

export default Product