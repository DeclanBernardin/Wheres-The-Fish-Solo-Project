import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* updateFishingSpot(action) {
    try{
        console.log(action.payload);
    
        let id = action.payload.id
        yield axios.put(`/fishing/${id}`, action.payload);
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