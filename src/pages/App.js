import React, { Component } from 'react'
import Header from 'components/Header'
import ToolBox from 'components/ToolBox'
import Carousel from 'components/Carousel'
import ProductsScreen from 'components/ProductsScreen'


export default class App extends Component {

    render() {
        return (
            <div className="main">
                <Header username='Admin' />
                <ToolBox />
                <Carousel />
                <ProductsScreen />
            </div>
        )
    }
}
