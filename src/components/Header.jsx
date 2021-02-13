import React, { Fragment } from 'react'

const Header = ({ username }) => (
    <div className='header'>
        <div className='grid'>
            <div className="start">
                <a href="/">Home</a>
            </div>
            <div className="end">
                {username ?
                    <span className='username'>
                        <i className="far fa-user"></i>
                        {username}
                    </span>
                    :
                    <Fragment>
                        <a href="/">Login</a>
                        <a href="/">Register</a>
                    </Fragment>
                }
            </div>
        </div>
    </div>
)

export default Header


