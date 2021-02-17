import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import PubSub from 'pubsub-js'

class ToolBox extends Component {

    state = {
        searchText: '',
        itemNum: 0
    }

    componentDidMount() {
        this.token = PubSub.subscribe('itemNum', (_, itemNum) => {
            console.log(itemNum);
            this.setState({
                itemNum: itemNum
            })
        })
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


    goToCart = () => {
        this.props.history.push('/cart')
    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.token)
    }

    render() {
        return (
            <div className='tool-box'>
                <div className="logo-text">R-Caps</div>
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
                <div className="cart" onClick={this.goToCart}>
                    <i className="fas fa-shopping-cart"></i>
                    <span className="item">({this.state.itemNum})</span>
                </div>
            </div>
        )
    }
}
export default withRouter(ToolBox)