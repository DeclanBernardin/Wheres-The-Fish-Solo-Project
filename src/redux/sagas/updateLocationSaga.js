import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* updateFishingSpot(action) {
    try{
        yield axios.put('/fishing', action.payload);
        yield put({
            type: 'GET_FISHING_SPOTS', // POST WILL AUTOMATICALLY TRIGGER THE GET 
        })
    } catch (error) {
        console.log(error);
    }
}

function* updateLocationSaga() {
    yield takeLatest('UPDATE_FISHING_SPOT', updateFishingSpot)
}
export default updateLocationSaga;