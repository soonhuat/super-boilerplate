const initialState = {
  isFetching: false,
  data: [],
  message: null,
};

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQEUST_ADD_POST':
      return Object.assign({}, state, {
        isFetching: true,
      });
    case 'SUCCESS_ADD_POST':
      return Object.assign({}, state, {
        isFetching: false,
      })
    case 'FAILED_ADD_POST':
      return Object.assign({}, state, {
        isFetching: false,
        message: action.message,
      })
    default:
      return state;
  }
}

export default PostReducer;
