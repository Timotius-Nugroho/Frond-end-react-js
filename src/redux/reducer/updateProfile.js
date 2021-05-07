const initialState = {
  isLoading: false,
  isError: false,
  msg: "",
};

const update = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: "",
      };
    case "UPDATE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg,
      };
    case "UPDATE_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.data.msg,
      };
    default:
      return state;
  }
};

export default update;
