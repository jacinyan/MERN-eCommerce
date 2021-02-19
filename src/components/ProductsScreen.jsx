import React, { Component } from 'react'
import axios from "config/axios";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Product from 'components/Product'
import PubSub from 'pubsub-js'
import Panel from 'components/Panel'
import AddInventory from "components/AddInventory";

export default class ProductsScreen extends Component {


    state = {
        products: [],
        sourceProducts: []
    }

    componentDidMount() {
        axios.get('/products')
            .then(response => response.data)
            .then(data => {
                this.setState(state => ({
                    products: [...data, ...state.products],
                    sourceProducts: [...data, ...state.products]
                }))
            })
            .catch(error => {
                console.log(error);
            })

        // get itemNum on a new render
        this.updateItemNum()

        this.token = PubSub.subscribe('search', (_, text) => {
            try {
                let _products = [...this.state.sourceProducts]
                // console.log('before filtering', _products);

                _products = _products.filter(product => {
                    const matchedArray = product.name.match(new RegExp(text, 'gi'))
                    return matchedArray !== null
                })

                // console.log('after filtering', _products);
                this.setState({
                    products: _products
                })
            } catch (error) {
                console.log(error);
            }
        })
    }

    toAdd = () => {
        Panel.open({
            child: AddInventory,
            callback: data => {
                if (data) {
                    this.add(data)
                }
            }
        })
    }

    add = product => {
        const _products = [...this.state.products]
        _products.push(product)
        const _sProducts = [...this.state.sourceProducts]
        _sProducts.push(product)

        this.setState({
            products: _products,
            sourceProducts: _sProducts
        })
    }

    update = product => {
        const _products = [...this.state.products]
        const _index = _products.findIndex(_product => _product.id === product.id)
        _products.splice(_index, 1, product)

        const _sProducts = [...this.state.sourceProducts]
        const _sIndex = _products.findIndex(_sProduct => _sProduct.id === product.id)
        _sProducts.splice(_sIndex, 1, product)

        this.setState({
            products: _products,
            sourceProducts: _sProducts
        })
    }

    delete = id => {
        const _products = this.state.products.filter(product => product.id !== id)
        const _sProducts = this.state.sourceProducts.filter(product => product.id !== id)
        this.setState({
            products: _products,
            sourceProducts: _sProducts
        })
    }

    updateItemNum = () => {
        const user = global.auth.getUser() || {}
        axios.get('/carts', {
            params: {
                userId: user.email
            }
        })
            .then(response => response.data)
            .then(data => {
                const carts = data || []
                const itemNum = carts.map(cart => cart.quantity).reduce((prev, curr) => prev + curr, 0)
                PubSub.publish('itemNum', itemNum)
            })
            .catch(error => {
                console.log(error);
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
                        <TransitionGroup component={null}>
                            {this.state.products.map((product) =>
                            (
                                <CSSTransition classNames='product-fade' timeout={300} key={product.id}>
                                    <div className="column is-3" key={product.id}>
                                        <Product
                                            product={product}
                                            update={this.update}
                                            delete={this.delete}
                                            updateItemNum={this.updateItemNum}
                                        />
                                    </div>
                                </CSSTransition>
                            )
                            )}
                        </TransitionGroup>
                    </div>
                    {
                        (global.auth.getUser() || {}).role === 1 && (
                            <button className="button is-primary add-btn" onClick={this.toAdd}>add</button>
                        )
                    }
                </div>
            </div>
        )
    }
}
