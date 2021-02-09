import React, { Component } from 'react'
import Header from 'components/Header'
import ProductsScreen from 'components/ProductsScreen'


export default class App extends Component {
    render() {
        return (
            <div className="main">
                <Header username='Admin' />
                <ProductsScreen />
            </div>
        )
    }
}
