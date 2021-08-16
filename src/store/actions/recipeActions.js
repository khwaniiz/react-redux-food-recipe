import { CREATE_RECIPE, CREATE_RECIPE_ERROR } from './type'

export const createRecipe = (recipe) => {
    return (dispatch, getState, { getFirestore }) => {
        // pause a dispatch and make async call to db (using thunk to return a function like this)
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid
        firestore.collection('recipes').add({
            ...recipe,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: CREATE_RECIPE, recipe });
            window.location.reload('/')
        }).catch(err => {
            console.log(err)
            dispatch({ type: CREATE_RECIPE_ERROR, err })
        })

    }
}


