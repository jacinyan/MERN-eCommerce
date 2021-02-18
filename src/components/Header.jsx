import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Header = ({ user: { username } }) => (
    <div className='header'>
        <div className='grid'>
            <div className="start">
                <Link to="/">Home</Link>
            </div>
            <div className="end">
                {username ?
                    <span className='username'>
                        <i className="far fa-user"></i>
                        {username}
                    </span>
                    :
                    <Fragment>
                        <Link to="/login">Login</Link>
                        <Link to="/">Register</Link>
                    </Fragment>
                }
            </div>
        </div>
    </div>
)

export default Header


