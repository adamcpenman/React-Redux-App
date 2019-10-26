import axios from "axios";

export const FETCH_CHARACTER_START = "FETCH_CHARACTER_START";
export const FETCH_CHARACTER_SUCCESS = "FETCH_CHARACTER_SUCCESS";
export const FETCH_CHARACTER_ERROR = "FETCH_CHARACTER_ERROR";

export function fetchCharacter() {
  return dispatch => {
    dispatch({ type: FETCH_CHARACTER_START });

    axios
      .get("https://www.potterapi.com/v1/characters/", {
        method: "GET",
        params: {
          key: "$2a$10$1sdw09jOfZCj0ChmG9I2g.Q1uMT30My2M/aNAqc.aV3JTyNxb4f2m"
        }
      })
      .then(res => {
        console.log(res.data);
        dispatch({
          type: FETCH_CHARACTER_SUCCESS,
          payload: res.data
        });
      })
      .catch(error => {
        dispatch({ type: FETCH_CHARACTER_ERROR, payload: error });
      });
  };
}
