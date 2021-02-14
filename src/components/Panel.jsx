import React, { Component } from 'react'
import ReactDOM from "react-dom";
import { nanoid } from "nanoid";

const _div = document.createElement('div')
document.body.appendChild(_div)

class Panel extends Component {

    state = {
        active: false,
        child: null,
        callback: () => {
              
        }
    }

    open = ({ child, callback }) => {
        const _key = nanoid()
        const _addInventory = React.createElement(child, { close: this.close, key: _key })
        this.setState({
            active: true,
            child: _addInventory,
            callback: callback
        })
    }

    close = data => {   
        this.setState({ active: false }),
        this.state.callback(data)
    }

    render() {

        const _class = {
            true: "panel-wrapper active",
            false: "panel-wrapper"
        }

        const { active, child } = this.state

        return (
            <div className={_class[active]} >
                <div className="overlay" onClick={this.close}></div>
                <div className="panel">
                    <div className="head">
                        <span className="close" onClick={this.close}>x</span>
                        {child}
                    </div>
                </div>
            </div>
        )
    }
}

const _panel = ReactDOM.render(<Panel />, _div)

export default _panel