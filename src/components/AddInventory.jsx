import React, { Component } from 'react'

export default class AddInventory extends Component {

    render() {

        const { close } = this.props

        return (
            <div className="inventory">
                <p className="title has-text-centered">
                    Inventory
                </p>
                <br />
                <div className="control">
                    <input type="text" className="input" />
                </div>
                <br />
                <div className="control">
                    <button className="button" onClick={() => { close('Panel gave AddInventory its close method as a cb too to control closing') }}>Cancel</button>
                </div>
            </div>
        )
    }
}

