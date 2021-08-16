import React from 'react';
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = () => {
    const dispatch = useDispatch()
    const { firebase } = useSelector((state) => ({ ...state }))
    const { profile } = firebase;
    //console.log("firebase signedin", firebase)

    return (
        <ul className="right">
            <li><NavLink to='/create'>New Recipe</NavLink></li>
            <li><a onClick={() => dispatch(signOut())}>Log out</a></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>{profile.initials}</NavLink></li>
        </ul>
    )
}

export default SignedInLinks;