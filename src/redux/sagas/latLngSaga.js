import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* createFishingSpot(action) {
    try {
        // POST THE ITEMS TO THE SERVER 
        yield axios.post('/fishing',  action.payload );
        yield put({
            type: 'GET_FISHING_SPOTS', // POST WILL AUTOMATICALLY TRIGGER THE GET 
        })
    } catch (error) {
        console.log(error);
    }
}

// gets each fishing spot and it details
function* getFishingSpots() {
    try {
        //GET THE ITEMS FROM OUR SERVER
        const response = yield axios.get('/fishing');
        // THEN, SEND TO REDUX
        console.log('saga response!', response.data)
        // PUT IS DISPATCH
        yield put({
            type: 'SET_SPOTS',
            payload: response.data
        });
    } catch (err) {
        console.log(err)
    }
}

function* latLngSaga(){
    yield takeLatest('CREATE_FISHING_SPOT', createFishingSpot)
    yield takeLatest('GET_FISHING_SPOTS', getFishingSpots)
}
export default latLngSaga;