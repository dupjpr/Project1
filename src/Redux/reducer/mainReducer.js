const mainReducer = (state, action) => {

    
    console.log(state);

    switch (action.type) {
        case 'DATA_SET':
            return {
                ...state,
                data: action.payload,
                filterInfo: action.payload,
            }
        case 'LOADING':
            return {
                ...state,
                loading: action.payload
            }
        case 'FILTER':
            return {
                ...state,
                filterData: state.data.filter((item) => item.types[0].type.name === action.payload)
            }

        default:
            return state
    }


}

export default mainReducer;