import { ADD_MED, MedListAction } from "./MedListActionsInterfaces";
import MedListState from "./MedListState";

const InitialState: MedListState = {
    medList: [],
};

const MedListReducer = (state: MedListState = InitialState, action: MedListAction) => {
    switch (action.type) {
        case ADD_MED: {
            return {
                ...state,
                medList: state.medList.concat(action.payload),
            };
        }
        default: {
            return state;
        }
    }
};

export default MedListReducer;
