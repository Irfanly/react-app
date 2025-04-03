const initialState = {
    feathers: null
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'INIT_FEATHERS':
        return {
            ...state,
            feathers: action.payload
        };

        default:
        return state;
    }
}

export default rootReducer;