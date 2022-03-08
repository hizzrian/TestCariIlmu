const initialState = {
  instructure: [],
  detailInstructure: {},
  isLoading: false,
  error: null,
};
const listInstructureReducer = (state=initialState, action) => {
  switch(action.type){
    default:
      return state
    case "LIST_INSTRUCTURE_REQUEST":
      return{
        ...state,
        instructure: [],
        isLoading: true,
        error: null
      }
    case "GET_LIST_INSTRUCTURE_SUCCESS":
      return{
        isLoading: false,
        instructure: action.payload.data,
        error: null
      }
      case "REQUEST_DETAIL_INSTRUCTURE":
        return{
          ...state,
          detailInstructure: {},
          isLoading: true,
          error: null
        }
      case "GET_DETAIL_INSTRUCTURE_SUCCESS":
        return{
          isLoading: false,
          detailInstructure: action.payload,
          error: null
        }
  }
}

export default listInstructureReducer