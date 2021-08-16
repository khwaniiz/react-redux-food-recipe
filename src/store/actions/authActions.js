import { LOGIN_SUCCESS, LOGIN_ERROR, SIGNOUT_SUCCESS, SIGNUP_SUCCESS, SIGNUP_ERROR } from './type'

export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: LOGIN_SUCCESS })
        }).catch((err) => {
            dispatch({ type: LOGIN_ERROR, err })
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()

        firebase.auth().signOut().then(() => {
            dispatch({ type: SIGNOUT_SUCCESS })
        })
        firebase.logout()
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((res) => {
            return firestore.collection('users').doc(res.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            }) // don't generate another uid but get it from firebase.auth() when sign up
        }).then(() => {
            dispatch({ type: SIGNUP_SUCCESS })
        }).catch(err => {
            console.log("err", err)
            dispatch({ type: SIGNUP_ERROR, err })
        })
    }
}