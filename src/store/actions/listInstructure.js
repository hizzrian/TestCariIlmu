export const getListInstructure = () => {
  return{
    type: "LIST_INSTRUCTURE_REQUEST"
  }
}

export const getDetailInstructure = (id) => {
  return { type: 'REQUEST_DETAIL_INSTRUCTURE', id };
}
