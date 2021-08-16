import React from 'react';
import moment from 'moment'

const RecipeSummary = ({ recipe }) => {
    console.log("recipe", recipe)
    return (
        <div className="card z-depth-0 recipe-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{recipe.title}</span>
                <p>Posted by {recipe.authorFirstName}</p>
                <p className="grey-text">{moment(recipe.createdAt.toDate().toDateString()).calendar()}</p>
            </div>
        </div>
    )
}

export default RecipeSummary