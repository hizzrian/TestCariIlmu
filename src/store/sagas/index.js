import { all } from "redux-saga/effects"
import classSaga from "./listClassSaga"
import instructureSaga from "./listInstructureSaga"
export default function* rootSaga() {
  yield all([
    classSaga(), instructureSaga()
  ])
}