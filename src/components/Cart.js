import React from 'react'
import Data from './Data'
import Card from './Card'
import "../styles/Cart.css"

const Cart = ({handleClick}) => {
  return (
    <section className='products'>
      {
        Data.map((item)=> (
          <Card item={item} key={item.id} handleClick={handleClick}/>
        ))
      }
    </section>
  )
}

export default Cart