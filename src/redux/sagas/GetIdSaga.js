
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* gettingAnId(action) {
    try {
        let id = action.payload.id
        //GET THE ITEMS FROM OUR SERVER
        const response = yield axios.get(`/getId/${id}`);
        // THEN, SEND TO REDUX
        console.log('saga response!', response.data)
        // PUT IS DISPATCH
        yield put({
            type: 'SET_OVERLAY_ID',
            payload: response.data
        });
    } catch (err) {
        console.log(err)
    }
}

function* getIdSaga() {
    yield takeLatest('GETTING_AN_ID', gettingAnId)
}
export default getIdSaga;