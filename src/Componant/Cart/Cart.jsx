import React from 'react'

import "../Css/Cart.css"
function Cart({ title, img }) {
    return (
        <div className='cart'>
            <h1>{title}</h1>
            <div className="hover">
                <img src={img} alt="" />
            </div>
        </div>
    )
}

export default Cart
