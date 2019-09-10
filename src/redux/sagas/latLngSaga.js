import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* createFishingSpot(action) {
    try {
        // POST THE ITEMS TO THE SERVER 
        yield axios.post('/fishing',  action.payload );
        // yield put({
        //     type: 'FETCH_SPOTS', // POST WILL AUTOMATICALLY TRIGGER THE GET 
        // })
    } catch (error) {
        console.log(error);
    }
}

function* latLngSaga(){
    yield takeLatest('CREATE_FISHING_SPOT', createFishingSpot)
}
export default latLngSaga;