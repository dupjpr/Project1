const mainReducer = (state, action) => {

    
    console.log(state);

    switch (action.type) {
        case 'DATA_SET':
            return {
                ...state,
                data: action.payload,
                filterInfo: action.payload,
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
                pak: state.filterInfo.filter((item) => item.name === 'ditto')
            }

        default:
            return state
    }


}

export default mainReducer;