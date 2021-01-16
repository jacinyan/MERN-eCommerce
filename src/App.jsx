import React, { Component } from 'react'
import Header from './components/Header'
import Products from './components/Products'

import "./App.scss";

export default class App extends Component {
    render() {
        return (
            <div className="main">
                <Header username='Admin'/>
                <Products />
            </div>
        )
    }
}

// Header(props){...}