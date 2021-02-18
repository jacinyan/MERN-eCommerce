import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Panel from 'components/Panel'
import Profile from './Profile'

const Header = ({ user, user: { username } }) => {

    const toProfile = () => {
        Panel.open({
            child: Profile,
            props: {
                user
            },
            callback: data => {
                console.log(data);
            }
        })
    }

    return (
        <div className='header'>
            <div className='grid'>
                <div className="start">
                    <Link to="/">Home</Link>
                </div>
                <div className="end">
                    {username ?
                        <span className='username' onClick={toProfile}>
                            <i className="far fa-user"></i>
                            {username}
                        </span>
                        :
                        <Fragment>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </Fragment>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header


