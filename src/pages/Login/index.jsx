import React, { Component } from 'react'
import style from './index.module.scss'

export default class Login extends Component {
    render() {
        return (
            <div className={style.loginWrapper}>
                <form className={`box ${style.loginBox}`}>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Email" />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Password" />
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
