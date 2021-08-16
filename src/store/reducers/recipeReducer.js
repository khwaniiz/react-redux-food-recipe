import { CREATE_RECIPE, CREATE_RECIPE_ERROR } from '../actions/type'

const initState = {
    recipes: [
        { id: '1', title: 'Som Tom', content: 'dsdfsd poksdf asdofjsdf' },
        { id: '2', title: 'Pad kra paw', content: 'dsdfsd poksdf asdofjsdf' },
        { id: '3', title: 'Nam Prik Ong', content: 'dsdfsd poksdf asdofjsdf' },
    ]
}

const recipeReducer = (state = initState, action) => {
    switch (action.type) {
        case CREATE_RECIPE:
            console.log('created recipe from reducer', action.recipe)
            return state;

        case CREATE_RECIPE_ERROR:
            console.log('create recipe error', action.err)
            return state;
        default:
            return state;
    }
}

export default recipeReducer;