import { combineReducers } from 'redux'
import apiRequest from '../slices/requestSlice';
import notification from '../slices/notification';

const rootReducer = combineReducers({
    notification,
    apiRequest
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;