export const getListClass = () => {
  return{
    type: "LIST_CLASS_REQUEST"
  }
}
export const getDetailClass = (id) => {
	return { type: 'REQUEST_DETAIL_CLASS', id };
};
