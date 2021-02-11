import React, { Component } from 'react'
import Product from 'components/Product'


export default class ProductsScreen extends Component {
    render() {
        return (
            <div>
                <div className='products-screen'>
                    <div className="columns is-multiline is-desktop">
                        <div className="column is-3">
                            <Product />
                        </div>
                        <div className="column is-3">
                            <Product />
                        </div>
                        <div className="column is-3">
                            <Product />
                        </div>
                        <div className="column is-3">
                            <Product />
                        </div>
                        <div className="column is-3">
                            <Product />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
