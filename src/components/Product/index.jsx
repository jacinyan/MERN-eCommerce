import React, { Component } from 'react'
import { formatPrice } from "utils/formatPrice";

export default class Product extends Component {

    render() {

        const {image, name, tags, price, status} = this.props.product
        const _pClass = {
            available: 'product',
            unavailable: 'product out-stock'
        }

        return (
            <div className={_pClass[status]}>
                <div className="p-content">
                    <div className="img-wrapper">
                        <div className="out-stock-text">
                            Out of Stock
                        </div>
                        <figure className="image is-4by3">
                            <img src={image} alt={name} />  
                        </figure>
                    </div>
                    <p className="p-tags">
                            {tags}
                        </p>
                        <p className="p-names">
                            {name}
                        </p>
                </div>
                <div className="p-footer">
                    <p className="price">{formatPrice(price)}</p>
                    <button className="add-cart" disabled={status === 'unavailable'}>
                        <i className="fas fa-shopping-cart"></i>
                        <i className="fas fa-exclamation"></i>
                    </button>
                </div>
            </div>
        )
    }
}
