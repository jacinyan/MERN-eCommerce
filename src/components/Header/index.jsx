import React from 'react'
import './index.scss'

// simplify Header
const Header = ({username}) => (//{
    // return (
        <div className="header">
                <div className="grid">
                    <div className="start">
                        <a href="/">Home</a>
                    </div>
                    <div className="end">
                        {username ?
                            <span className="username">
                                <i className="far fa-user"></i>
                                {username}
                            </span>
                            :
                            <>
                                <a href="/">Login</a>
                                <a href="/">Register</a>
                            </>
                        }
                    </div>
                </div>
            </div>
    // )
//}
)

export default Header


