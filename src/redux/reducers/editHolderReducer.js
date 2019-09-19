

//Reducer holds and changes the state of the objects in the addSpot.js and displays the current values
const editHolderReducer = (state = [], action) => {
    switch (action.type) {
        case 'EDIT_OVERLAY':
            return action.payload;
        case 'EDIT_DETAIL_SPOT_NAME':
            return { ...state, spot_name: action.payload };
        case 'EDIT_DETAIL_FISH_CAUGHT':
            return { ...state, fish_caught: action.payload };
        case 'EDIT_DETAIL_IMAGES':
            return { ...state, images: action.payload };
        case 'EDIT_DETAIL_TIME_OF_YEAR':
            return { ...state, time_of_year: action.payload };
        case 'EDIT_DETAIL_LURE_USED':
            return { ...state, lure_used: action.payload };
        case 'EDIT_DETAIL_TYPE_OF_FISHING':
            return { ...state, type_of_fishing: action.payload };
        case 'EDIT_DETAIL_WATER_DEPTH':
            return { ...state, water_depth: action.payload };
        case 'EDIT_DETAIL_WEATHER':
            return { ...state, weather: action.payload };
        default:
            return state;
    }
};


export default editHolderReducer;