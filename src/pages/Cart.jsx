import React, { useState, useEffect } from 'react'
import Layout from 'Layout'
import CartItem from 'components/CartItem'
import axios from 'config/axios'
import { formatPrice } from 'utils/formatPrice'

const Cart = () => {

    const [carts, setCarts] = useState([])

    useEffect(() => {
        axios.get('/carts')
            .then(response => response.data)
            .then(data => {
                setCarts(data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    const totalPrice = () => carts
                            .map(cart => cart.quantity * parseInt(cart.price))
                            .reduce((prev, curr) => prev + curr, 0)


    return (
        < Layout >
            <div className="cart-screen">
                <span className="cart-title">Your Cart</span>
                <div className="cart-list">
                    {
                        carts.map(cart =>
                            <CartItem key={cart.id} cart={cart} />
                        )
                    }
                </div>
                <div className="cart-total">
                    Total:
                    <span className="total-price">{formatPrice(totalPrice())}</span>
                </div>
            </div>
        </Layout >
    )
}

export default Cart



