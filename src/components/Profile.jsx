import React from 'react'

const Profile = ({ close, user: { username, email, role }}) => {

    const logout = () => {
        global.auth.logout()
        close('logout')
    }

    return (
        <div className="profile">
            <p className="title has-text-centered">
                Profile
            </p>
            <fieldset disabled>
                <div className="field">
                    <div className="control">
                        <label className="label">Username</label>
                        <input className="input" type="text" defaultValue={username} />
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <label className="label">Email</label>
                        <input className="input" type="email" defaultValue={email} />
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <label className="label">Role</label>
                        <input className="input" type="email" defaultValue={role === 1 ? 'Admin' : 'User'} />
                    </div>
                </div>
            </fieldset>
            <br />
            <br />
            <div className="field is-grouped is-grouped-centered">
                <div className="control">
                    <button className="button is-danger" onClick={logout} type="button">
                        Logout
                    </button>
                </div>
                <div className="control">
                    <button className="button is-link" type="button" onClick={() => { close() }}>
                        Cancel
                        </button>
                </div>
            </div>
        </div>
    )
}

export default Profile
