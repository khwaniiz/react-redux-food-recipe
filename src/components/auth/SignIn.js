import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

const SignIn = () => {
    const { firebase } = useSelector((state) => ({ ...state }))
    const dispatch = useDispatch()
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const { email, password } = values
    console.log("sign in", firebase)

    const handleChange = (name) => (e) => {
        setValues({
            ...values,
            [name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(signIn(values))
        // console.log(values)
    }

    if (firebase.auth.uid) return <Redirect to='/' />

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' value={email || ''} onChange={handleChange('email')} />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' value={password || ''} onChange={handleChange('password')} />
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Login</button>
                    <div className="red-text center">
                        {firebase.auth.authError ? <p>{firebase.auth.authError}</p> : null}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignIn

