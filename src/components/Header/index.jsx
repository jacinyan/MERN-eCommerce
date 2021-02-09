import React,{Fragment} from 'react'
import style from './index.module.scss'

const Header = ({username}) => (
        <div className={style.header}>
                <div className={style.grid}>
                    <div className="start">
                        <a href="/">Home</a>
                    </div>
                    <div className="end">
                        {username ?
                            <span className={style.username}>
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


