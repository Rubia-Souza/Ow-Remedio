import { combineReducers } from "redux";
import MedListReducer from "../redux/MedList/MedListReducer";

const Reducers = combineReducers({
    MedListReducer,
});

export default Reducers;

export type RootState = ReturnType<typeof Reducers>;
