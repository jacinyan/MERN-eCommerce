import React, { useState, useMemo } from 'react'
import { formatPrice } from 'utils/formatPrice'
import axios from 'config/axios'

const CartItem = ({ cart = {}, cart: { id, name, image, price, quantity: initQuantity }, updateCart, deleteCartUpdate }) => {

    const [quantity, setQuantity] = useState(initQuantity)

    const subTotal = useMemo(() => {
        return formatPrice(quantity * parseInt(price))
    }, [quantity, price])

    const handleQuantity = e => {
        const _quantity = parseInt(e.target.value)
        setQuantity(_quantity)
        const newCart = {
            ...cart,
            quantity: _quantity
        }
        axios.put(`/carts/${id}`, newCart)
            .then(() => {
                updateCart(newCart)
            })
    }

    const deleteCart = () => {
        axios.delete(`/carts/${id}`)
            .then(() => {
                deleteCartUpdate(cart)
            })
    }

    return (
        <div className="columns is-vcentered">
            <div className="column is-1 ">
                <span className="close" onClick={deleteCart}>x</span>
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
                    min={1}
                    onChange={handleQuantity}
                />
            </div>
            <div className="column is-1">
                <span className="sub-total">{subTotal}</span>
            </div>
        </div>
    )
}

export default CartItem
