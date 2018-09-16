import { combineReducers } from 'redux'
import { showMobiles } from './mobiles'

const rootReducer = combineReducers({
    mobile: showMobiles
});


export default rootReducer;