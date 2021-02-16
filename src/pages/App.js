import React, { Component } from 'react'
import Layout from 'Layout'
import ToolBox from 'components/ToolBox'
import Carousel from 'components/Carousel'
import ProductsScreen from 'components/ProductsScreen'

export default class App extends Component {
    render() {
        return (
            <Layout >
                <ToolBox />
                <Carousel />
                <ProductsScreen />
            </Layout>
        )
    }
}


