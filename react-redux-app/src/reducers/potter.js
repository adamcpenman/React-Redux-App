import {
  FETCH_CHARACTER_START,
  FETCH_CHARACTER_SUCCESS,
  FETCH_CHARACTER_ERROR
} from "../actions/potter";

const initialState = {
  character: [],
  isLoading: false,
  error: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CHARACTER_START:
      return {
        //clone of the state, set isLoading to true
        ...state,
        isLoading: true
      };
    case FETCH_CHARACTER_SUCCESS:
      return {
        ...state,
        character: action.payload,
        isLoading: false
      };
    case FETCH_CHARACTER_ERROR:
      return {
        //clone of state, and set error
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
}
