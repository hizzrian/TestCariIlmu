const initialState = {
  class: [],
  detailClass:{},
  isLoading: false,
  error: null,
};
const listClassReducers = (state=initialState, action) => {
  switch(action.type){
    default:
      return state
    case "LIST_CLASS_REQUEST":
      return{
        ...state,
        class: [],
        isLoading: true,
        error: null
      }
    case "GET_LIST_CLASS_SUCCESS":
      return{
        isLoading: false,
        class: action.payload.data,
        error: null
      }
    case "REQUEST_DETAIL_CLASS":
      return{
        ...state,
        detailClass: {},
        isLoading: true,
        error: null
      }
    case "GET_DETAIL_CLASS_SUCCESS":
      return{
        isLoading: false,
        detailClass: action.payload,
        error: null
      }
  }
}

export default listClassReducers