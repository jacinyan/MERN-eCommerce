import React, { Component } from 'react'

export default class ToolBox extends Component {
    render() {
        return (
            <div className='tool-box'>
                <div className="logo-text">R-SN'S</div>
                <div className="search-box">
                    <div className="field has-addons">
                        <div className="control">
                            <input type="text" className="input search-input" placeholder="Search Products.."/>
                        </div>
                        <div className="control">
                            <button className="button">X</button>
                        </div>
                    </div>
                </div>
                <div className="cart-box">
                    <i className="fas fa-shopping-cart"></i>
                    <span className="cart-num">(0)</span>
                </div>
            </div>
        )
    }
}
