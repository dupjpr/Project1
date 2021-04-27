const mainReducer = (state, action) => {

    switch (action.type) {
        case 'Data_Set':
            return {
                ...state,
                data: action.task
            }

        default:
            return state
    }


}

export default mainReducer;