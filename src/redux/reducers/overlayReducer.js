const  overlayReducer= (state = [], action) => {
    switch (action.type) {
        case 'SET_OVERLAY_ID':
            return action.payload;
        case 'CLEAR_REDUCER':
            return state = [];
        default:
            return state;
    }
};

// loginMode will be on the redux state at:
// state.loginMode
export default overlayReducer;