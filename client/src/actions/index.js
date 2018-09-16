import axios from "axios";
export const SHOW_MOBILES = "SHOW_MOBILES";

export function showMobiles() {
    return (dispatch, getState) => {
        axios.get("/api/catalog").then(response => {
            dispatch({ type: SHOW_MOBILES, payload: response.data });
        });
    }
}


