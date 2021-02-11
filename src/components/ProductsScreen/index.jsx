import React, { Component } from 'react'
import axios from "config/axios";
import Product from 'components/Product'


export default class ProductsScreen extends Component {

    state = {
        products: []
    }

    componentDidMount() {
        // fetch('http://localhost:9090/products')
        //     .then(response => response.json())
        //     .then(data => {
        //         this.setState(state => ({ products: [...data, ...state.products] }))
        //     })
        axios.get('/products')
            .then(response => {
                console.log(response);
                return response.data
            }
            )
            .then(data => {
                this.setState(state => ({ products: [...data, ...state.products] }))
            })
            .catch(error => {
                console.log(error);
            })

    }

    render() {
        return (
            <div>
                <div className='products-screen'>
                    <div className="columns is-multiline is-desktop">
                        {this.state.products.map((product) => (
                            <div className="column is-3" key={product.id}>
                                <Product product={product} />
                            </div>
                        )
                        )}
                    </div>
                </div>
            </div>
        )
    }
}
