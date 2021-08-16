import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createRecipe } from '../../store/actions/recipeActions'
import { Redirect } from 'react-router-dom'

const CreateRecipe = () => {
    const dispatch = useDispatch()
    const { firebase } = useSelector((state) => ({ ...state }))

    const [values, setValues] = useState({
        title: '',
        content: ''
    })

    const { title, content } = values

    const handleChange = (name) => (e) => {
        setValues({
            ...values,
            [name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createRecipe(values))
    }

    if (!firebase.auth.uid) return <Redirect to='/signin/' />

    return (

        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Create Recipe</h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id='text' value={title || ''} onChange={handleChange('title')} />
                </div>
                <div className="input-field">
                    <label htmlFor="content">Content</label>
                    <textarea type="text" id='content' className="materialize-textarea" value={content || ''} onChange={handleChange('content')} />
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Create</button>
                </div>
            </form>
        </div>
    )
}

export default CreateRecipe

