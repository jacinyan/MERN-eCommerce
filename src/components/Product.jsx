import React, { Component } from 'react'
import { formatPrice } from "utils/formatPrice";
import Panel from 'components/Panel'
import EditInventory from 'components/EditInventory'
import axios from 'config/axios'
import { toast } from 'react-toastify'


export default class Product extends Component {

    toEdit = () => {
        Panel.open({
            child: EditInventory,
            pProps: {
                product: this.props.product,
                deleteProduct: this.props.delete
            },
            callback: data => {
                if (data) {
                    this.props.update(data)
                }
            }
        })
    }

    addToCart = async () => {

        try {
            const { id, name, price, image } = this.props.product

            const response = await axios.get(`/carts?productId=${id}`)

            const carts = response.data
            console.log(carts);

            if (carts && carts.length > 0) {
                const cart = carts[0]
                cart.quantity += 1
                await axios.put(`/carts/${cart.id}`, cart)
            } else {
                const cart = {
                    productId: id,
                    name,
                    image,
                    price,
                    quantity: 1
                }
                await axios.post('/carts', cart)
            }
            toast.success('Successfully added to cart')
            this.props.updateItemNum()
        } catch (error) {
            toast.error('Failed to add to cart')
        }
    }

    render() {

        const { image, name, tags, price, status } = this.props.product
        const _pClass = {
            available: 'product',
            unavailable: 'product out-stock'
        }

        return (
            <div className={_pClass[status]}>
                <div className="product-content">
                    <div className="head has-text-right" onClick={this.toEdit}>
                        <span className="icon edit-btn">
                            <i className="fas fa-sliders-h"></i>
                        </span>
                    </div>
                    <div className="img-wrapper">
                        <div className="out-stock-text">
                            Out of Stock
                        </div>
                        <figure className="image is-4by3">
                            <img src={image} alt={name} />
                        </figure>
                    </div>
                    <p className="tags">
                        {tags}
                    </p>
                    <p className="name">
                        {name}
                    </p>
                </div>
                <div className="product-footer">
                    <p className="price">{formatPrice(price)}</p>
                    <button className="add-cart" disabled={status === 'unavailable'} onClick={this.addToCart}>
                        <i className="fas fa-shopping-cart"></i>
                        <i className="fas fa-exclamation"></i>
                    </button>
                </div>
            </div>
        )
    }
}
