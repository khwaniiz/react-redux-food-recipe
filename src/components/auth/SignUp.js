import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp } from '../../store/actions/authActions'

const SignUp = () => {
    const { auth, firebase } = useSelector((state) => ({ ...state }))
    const dispatch = useDispatch()
    const [values, setValues] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    })

    const { email, password, firstName, lastName } = values
    console.log("signup firebase", firebase)

    if (firebase.auth.uid) return <Redirect to='/' />

    const handleChange = (name) => (e) => {
        setValues({
            ...values,
            [name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(signUp(values))
        console.log(values)
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign Up</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' value={email || ''} onChange={handleChange('email')} />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' value={password || ''} onChange={handleChange('password')} />
                </div>
                <div className="input-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" value={lastName || ''} onChange={handleChange('lastName')} />
                </div>
                <div className="input-field">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" value={firstName || ''} onChange={handleChange('firstName')} />
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Signup</button>
                    {auth.authError ? <p className='red-text center'>{auth.authError}</p> : null}
                </div>
            </form>
        </div>
    )
}

export default SignUp

