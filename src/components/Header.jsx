import React from 'react'

const Header = () => {
  return (
    <div style={{display:'flex', border: "2px solid black", justifyContent: "space-between", fontSize : "20px"}}>
      <div>
        <p>Home</p>
      </div>
      <div>
        <p>Cart</p>
      </div>
    </div>
  )
}

export default Header