import React from 'react'
import { formatPrice } from 'utils/formatPrice'

const CartItem = ({ cart: { name, image, price, quantity } = {} }) => {

    const handleChange = () => {
        
    }

    return (
        <div className="columns is-vcentered">
            <div className="column is-1 ">
                <span className="close">x</span>
            </div>
            <div className="column is-3 is-offset-1">
                <img src={image} alt={name} width="150" />
            </div>
            <div className="column item-name is-2">
                {name}
            </div>
            <div className="column is-2">
                <span className="price">{formatPrice(price)}</span>
            </div>
            <div className="column is-2">
                <input 
                type="number" 
                className="input num-input" 
                value={quantity} 
                onChange={handleChange} 
                />
            </div>
            <div className="column is-1">
                <span className="sub-total">{formatPrice(quantity * parseInt(price))}</span>
            </div>
        </div>
    )
}

export default CartItem
