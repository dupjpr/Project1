const mainReducer = (state, action) => {

    switch (action.type) {
        case 'DATA_SET':
            return {
                ...state,
                data: action.task
            }
        case 'LOADING':
            return {
                ...state,
                loading: action.task
            }
        // case 'POKE_STATES':
        //     return {
        //         ...state,
        //         poke_states: state?.data.map(item => item.types)
        //     }

        default:
            return state
    }


}

export default mainReducer;