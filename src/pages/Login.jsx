import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'config/axios'
import { toast } from 'react-toastify'

const Login = ({history}) => {

    const { register, handleSubmit, errors } = useForm()

    const onSubmit = data => {
        const { email, password } = data

        axios.post('/auth/login', { email, password })
            .then(response => {
                const jwToken = response.data
                // console.log(jwToken);
                global.auth.setToken(jwToken)
                toast.success('Login Successful')
                history.push('/')
            })
            .catch(error => {
                // console.log(error.response.data);
                toast.error(error.response.data.message)
            })
    }

    return (
        <div className="login-wrapper">
            <form className="box login-box" onSubmit={handleSubmit(onSubmit)}>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input
                            className={`input ${errors.email && 'is-danger'}`}
                            type="text"
                            name="email"
                            placeholder="Email"
                            ref={register({
                                required: 'Email is required',
                                pattern: {
                                    value: /^[A-Za-z0-9]+([_\\.][A-Za-z0-9]+)*@([A-Za-z0-9\\-]+\.)+[A-Za-z]{2,6}$/,
                                    message: 'Invalid Email'
                                }
                            }
                            )}
                        />
                        {
                            errors.email && <p className="helper has-text-danger">*{errors.email.message}</p>
                        }
                    </div>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input
                            className={`input ${errors.password && 'is-danger'}`}
                            type="password"
                            name="password"
                            placeholder="Password"
                            ref={register({
                                required: 'Password is required',
                                minLength: {
                                    value: 6,
                                    message: 'Must be at least 6 char long'
                                }
                            }
                            )}
                        />
                        {
                            errors.password && <p className="helper has-text-danger">*{errors.password.message}</p>
                        }
                    </div>
                </div>
                <div className="control">
                    <button className="button is-fullwidth is-primary">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login