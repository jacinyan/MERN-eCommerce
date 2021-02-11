import React, { Component } from 'react'
import axios from "config/axios";
import Product from 'components/Product'
import PubSub from 'pubsub-js'


export default class ProductsScreen extends Component {

    state = {
        products: [],
        sourceProducts: []
    }

    componentDidMount() {
        axios.get('/products')
            .then(response => {
                return response.data
            }
            )
            .then(data => {
                this.setState(state => ({ 
                    products: [...data, ...state.products],
                    sourceProducts:[...data, ...state.products]
                }))
            })
            .catch(error => {
                console.log(error);
            })

        this.token = PubSub.subscribe('toolbox searched', (_, text) => {
            console.log(text);
            // 1.Get New Array
            let _products = [...this.state.sourceProducts]

            // 2. Filter New Array
            _products = _products.filter(product => {
                // name: ABcd, text: ab ====> ['AB']
                // text: '', ===> ["", "","","",""]
                const matchedArray = product.name.match(new RegExp(text, 'gi'))
                // return matchedArray !== null
                return !!matchedArray
            })

            // 3. Set State
            this.setState({
                products: _products
            })
        })
    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.token)
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
