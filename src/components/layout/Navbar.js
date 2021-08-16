import React from 'react';
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';

const Navbar = () => {
    const { auth, firebase } = useSelector((state) => ({ ...state }))
    // console.log("nav", auth, firebase)
    const links = firebase.auth.uid ? <SignedInLinks /> : <SignedOutLinks />
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo left">FoodRecipe</Link>
                {isLoaded(auth) && links}
            </div>
        </nav>
    )
}

export default Navbar;