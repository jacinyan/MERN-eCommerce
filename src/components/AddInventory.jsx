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
                    <button className="button" onClick={() => close('invent')}>Cancel</button>
                </div>
            </div>
        )
    }
}

