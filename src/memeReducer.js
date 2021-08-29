const FORM_INITIAL_STATE = {
  imageURL: "",
  topText: "",
  bottomText: "",
};
const INITIAL_STATE = {
  memeList: [],
  formData: FORM_INITIAL_STATE,
};

function memeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "addMeme":
      return { ...state, memeList: [...state.memeList, action.payload] };
    case "delete":
      return {
        ...state,
        memeList: state.filter((m) => m.id !== action.payload.id),
      };
    case "formChange":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.name]: action.payload.value,
        },
      };
    case "formClear":
      return {
        ...state,
        formData: FORM_INITIAL_STATE,
      };
    case "removeMeme":
      return {
        ...state,
        memeList: state.memeList.filter((m) => m.id !== action.payload.id),
      };
    default:
      return state;
  }
}

export default memeReducer;
