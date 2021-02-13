import React, { Component } from 'react'
import ReactDOM from "react-dom";

const _div = document.createElement('div')
document.body.appendChild(_div)

class Panel extends Component {

    state = {
        active: false,
        child: null
    }

    open = ({ child }) => {
        const _addInventory = React.createElement(child, { close: this.close })
        this.setState({
            active: true,
            child: _addInventory
        })
    }

    close = data => {
        alert(data)
        this.setState({ active: false })
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