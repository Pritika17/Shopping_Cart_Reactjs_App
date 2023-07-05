import React from 'react'
import "../styles/Card.css"

const Card = ({item, handleClick}) => {
  const {title, price, img} = item
  return (
    <div className="card">
        <div className='image-box'>
            <img src={img} alt="product" />
        </div>
        <div className='details'>
            <p className='title'>{title}</p>
            <p>Price - ₹{price}</p>
            <button onClick={() => handleClick(item)}>Add To Cart</button>
        </div>
    </div>
  )
}

export default Card