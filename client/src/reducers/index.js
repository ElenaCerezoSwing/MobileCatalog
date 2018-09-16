import { combineReducers } from 'redux'
import { showMobiles } from './mobiles'
import { showMoreDetails } from './mobiles'

const rootReducer = combineReducers({
    mobile: showMobiles,
    visibility: showMoreDetails,

});


export default rootReducer;