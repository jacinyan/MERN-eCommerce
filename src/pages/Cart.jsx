import React from 'react'
import Layout from 'Layout'
import CartItem from 'components/CartItem'

const Cart = () => (
    <Layout>
        <div className="cart-screen">
            <span className="cart-title">Your Cart</span>
            <div className="cart-list">
                <CartItem/>
            </div>
            <div className="cart-total">
                Total:
                <span className="total-price">$1234</span>
            </div>
        </div>
    </Layout>
)

export default Cart



