import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class ToolBox extends Component {

    state = {
        searchText: ''
    }

    handleChange = e => {
        const value = e.target.value
        this.setState({ searchText: value })
        PubSub.publish('search', value)
    }

    clearSearchText = () => {
        this.setState({ searchText: '' })
        PubSub.publish('search', '')
    }

    render() {
        return (
            <div className='tool-box'>
                <div className="logo-text">R-SN'S</div>
                <div className="search-box">
                    <div className="field has-addons">
                        <div className="control">
                            <input
                                type="text"
                                className="input search-input"
                                placeholder="Search Products.."
                                value={this.state.searchText}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="control">
                            <button className="button" onClick={this.clearSearchText}>X</button>
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
