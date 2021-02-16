import React from 'react'

const CartItem = () => {
    return (
        <div className="columns is-vcentered">
            <div className="column is-1">
                <span className="close">x</span>
            </div>
            <div className="column is-3">
                <img src="images/products/1.png" alt="" width="100" />
            </div>
            <div className="column item-name is-3">
                Be polite
            </div>
            <div className="column is-2">
                <span className="price">$288</span>
            </div>
            <div className="column is-2">
                <input type="number" className="input num-input"/>
            </div>
            <div className="column is-1">
                <span className="sub-total">$299</span>
            </div>
        </div>
    )
}

export default CartItem
