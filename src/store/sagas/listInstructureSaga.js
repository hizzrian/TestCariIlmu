import { all, call, fork, put, takeEvery } from "redux-saga/effects"
import axios from "axios"
import {api} from "../../services/api"

function* getListInstructure() {
  try{
    const res = yield axios.get(`${api.getListInstructure}`)
    yield put({ type: "GET_LIST_INSTRUCTURE_SUCCESS", payload: res.data })
    
  }catch(e){
    console.log(e)
  }
}

function* getDetailInstructure(action) {
	try {
    const res = yield axios.get(
      `${api.getDetailInstructure(action.id)}`
    );
    const delay = time => new Promise(resolve => setTimeout(resolve, time))
    yield call(delay, 1)
    yield put({ type: 'GET_DETAIL_INSTRUCTURE_SUCCESS', payload: res.data });
	} catch (e) {
		console.log(e);
	}
}

function* watchGetListInstructure(){
  yield takeEvery("LIST_INSTRUCTURE_REQUEST", getListInstructure)
}
function* watchGetDetailInstructure(){
  yield takeEvery("REQUEST_DETAIL_INSTRUCTURE", getDetailInstructure)
}


function* instructureSaga() {
  yield all([
    fork(watchGetListInstructure),
    fork(watchGetDetailInstructure)
  ])
}

export default instructureSaga;