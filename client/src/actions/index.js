import axios from "axios";
export const SHOW_MOBILES = "SHOW_MOBILES";
export const SHOW_DETAILS = "SHOW_DETAILS";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000'
})
export function showMobiles() {
    return (dispatch, getState) => {
        axiosInstance.get("/api/catalog").then(response => {
            dispatch({ type: SHOW_MOBILES, payload: response.data });
        });
    }
}

export function showMoreDetails(event) {
    return (dispatch, getState) => {
        const phoneCards = event.querySelector(".mobile-details").classList.toggle('hidden')
        dispatch({ type: SHOW_DETAILS });
    };
}






