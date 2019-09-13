import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addDetails(action) {
    try {
        console.log(action.payload);
        let id = action.payload.id
        yield axios.put(`/spotDetails/${id}`, action.payload);
        yield put({
            type: 'GET_FISHING_SPOTS', // POST WILL AUTOMATICALLY TRIGGER THE GET 
        })
    } catch (error) {
        console.log(error);
    }
}


function* addDetailsSaga() {
    yield takeLatest('ADD_DETAILS_TO_SPOT', addDetails)
}
export default addDetailsSaga;