import { all, call, fork, put, takeEvery } from "redux-saga/effects"
import axios from "axios"
import {api} from "../../services/api"

function* getListClass() {
  try{
    const res = yield axios.get(`${api.getListClass}`)
    yield put({ type: "GET_LIST_CLASS_SUCCESS", payload: res.data })
    console.log(res.data,'res')
  }catch(e){
    console.log(e)
  }
}
function* getDetailClass(action) {
	try {
		const res = yield axios.get(
			`${api.getDetailClass(action.id)}`
		);
    const delay = time => new Promise(resolve => setTimeout(resolve, time))
    yield call(delay, 1)
		yield put({ type: 'GET_DETAIL_CLASS_SUCCESS', payload: res.data });
	} catch (e) {
		console.log(e);
	}
}

function* watchGetListClass(){
  yield takeEvery("LIST_CLASS_REQUEST", getListClass)
}
function* wacthGetDetailClass(){
  yield takeEvery("REQUEST_DETAIL_CLASS", getDetailClass)
}

function* classSaga() {
  yield all([
    fork(watchGetListClass),
    fork(wacthGetDetailClass)
  ])
}

export default classSaga



