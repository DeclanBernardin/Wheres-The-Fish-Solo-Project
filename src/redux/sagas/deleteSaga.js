import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deleteSpot(action) {
    try {
        // DELETE FROM THE SERVER 
        console.log('saga', action.payload);
        console.log(action.payload);
        
        let id = action.payload.id
        yield axios.delete(`/fishing/${id}`);
        yield put({
            type: 'GET_FISHING_SPOTS', // POST WILL AUTOMATICALLY TRIGGER THE GET 
        })
    } catch (error) {
        console.log(error);
    }
}

function* deleteSaga() {
    yield takeLatest('DELETE_SPOT', deleteSpot)
}
export default deleteSaga;