import { combineReducers } from "redux"
import listClassReducers from "./listClassReducers"
import listInstructureReducer from "./listInstructureReducer"

export default combineReducers({
  listClassReducers, listInstructureReducer
})