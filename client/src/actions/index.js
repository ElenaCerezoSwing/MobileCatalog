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

export function showMoreDetails(event, data) {
    return (dispatch, getState) => {
        const phoneCards = Array.from(document.querySelectorAll(".mobile-details"));

        for (let i = 0; i < phoneCards.length; i++) {
            phoneCards[i].classList.toggle('hidden')
        }


        dispatch({ type: SHOW_DETAILS, payload: phoneCards });
    };
}


// data = event.currentTarget;
// return ({ type: SHOW_DETAILS, payload: data })
// }

// export function moreDetails(event) {
//     return (dispatch, getState) => {
//         const phoneCard = document.querySelector(".mobile-details");
//         const selectedItem = phoneCard.classList.toggle("hidden");
//         dispatch({ type: MORE_DETAILS, payload: selectedItem });
//     };
// }




