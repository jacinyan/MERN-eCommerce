import React, { Component } from 'react'

export default class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    handleSubmit = e => {
        e.preventDefault()
        // const formData = {

        // }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        return (
            <div className="login-wrapper">
                <form className="box login-box" onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input 
                            className="input" 
                            type="text" 
                            name="email"
                            placeholder="Email"
                            value = {this.state.email} 
                            onChange = {this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input 
                            className="input" 
                            type="password" 
                            name="password"
                            placeholder="Password" 
                            value = {this.state.password} 
                            onChange = {this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="control">
                        <button className="button is-fullwidth is-primary">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}
