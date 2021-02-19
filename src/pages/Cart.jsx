import React, { useState, useEffect, useMemo } from 'react'
import Layout from 'Layout'
import CartItem from 'components/CartItem'
import axios from 'config/axios'
import { formatPrice } from 'utils/formatPrice'
import { CSSTransition, TransitionGroup } from 'react-transition-group';


const Cart = () => {

    const [carts, setCarts] = useState([])

    useEffect(() => {
        const user = global.auth.getUser() || {}
        axios.get(`/carts?userId=${user.email}`)
            .then(response => response.data)
            .then(data => {
                setCarts(data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    const updateCart = cart => {
        const newCarts = [...carts]
        const _index = newCarts.findIndex(newCart => newCart.id === cart.id)
        newCarts.splice(_index, 1, cart)
        setCarts(newCarts)
    }

    const deleteCartUpdate = cart => {
        const _carts = carts.filter(_cart => _cart.id !== cart.id)
        setCarts(_carts)
    }

    const totalPrice = useMemo(() => () => carts
                                           .map(cart => cart.quantity * parseInt(cart.price))
                                           .reduce((prev, curr) => prev + curr, 0), [carts])

    return (
        < Layout >
            <div className="cart-screen">
                <span className="cart-title">Your Cart</span>
                <div className="cart-list">
                    <TransitionGroup component={null}>
                        {
                            carts.map(cart =>
                                <CSSTransition classNames="cart-item" timeout={300} key={cart.id}>
                                    <CartItem key={cart.id} cart={cart} updateCart={updateCart} deleteCartUpdate={deleteCartUpdate} />
                                </CSSTransition>
                            )
                        }
                    </TransitionGroup>
                </div>
                {
                    carts.length === 0 ? <p className="no-cart">No ITEMS</p> : ''
                }
                <div className="cart-total">
                    Total:
                    <span className="total-price">{formatPrice(totalPrice())}</span>
                </div>
            </div>
        </Layout >
    )
}

export default Cart



