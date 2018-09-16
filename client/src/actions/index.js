import axios from "axios";
export const SHOW_MOBILES = "SHOW_MOBILES";
export const SHOW_DETAILS = "SHOW_DETAILS"

export function showMobiles() {
    return (dispatch, getState) => {
        axios.get("/api/catalog").then(response => {
            dispatch({ type: SHOW_MOBILES, payload: response.data });
        });
    }
}

export function showMoreDetails(event) {
    return (dispatch, getState) => {
        const phoneCards = event.querySelector(".mobile-details").classList.toggle('hidden')
        dispatch({ type: SHOW_DETAILS, payload: phoneCards });
    };
}






