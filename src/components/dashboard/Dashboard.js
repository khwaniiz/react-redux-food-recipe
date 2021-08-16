import React from 'react';
import Notifications from './Notification';
import RecipeList from '../Recipes/RecipeList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

const Dashboard = (props) => {
    const { recipes, auth } = props
    // if (!auth.uid) return <Redirect to='/signin/' />
    return (
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m">
                    <RecipeList recipes={recipes} />
                </div>
                {/* <div className="col s12 m5 offset-m1">
                    <Notifications recipes={recipes} />
                </div> */}
            </div>
        </div>
    )
}

// get state from store to use as a prop in this component
const mapStateToProps = (state) => {
    //console.log(state)
    return {
        recipes: state.firestore.ordered.recipes,
        auth: state.firebase.auth
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'recipes' }
    ])
)(Dashboard);