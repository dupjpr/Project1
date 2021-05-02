const mainReducer = (state, action) => {

    console.log(action);

    
    switch (action.type) {
        case 'DATA_SET':
            return {
                ...state,
                data: action.payload
            }
        case 'OPTIONS':
            return {
                ...state,
                options: action.payload
            }
        case 'LOADING':
            return {
                ...state,
                loading: action.payload
            }
        case 'FILTER':
            return {
                ...state,
                data: state.data.filter((item) => item.types[0].type.name === action.payload)
            }

        default:
            return state
    }


}

export default mainReducer;