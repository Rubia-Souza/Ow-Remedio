import { Med1, Med2, Med3 } from "../../shared/mocks/MockMed";
import { ADD_MED, MedListAction } from "./MedListActionsInterfaces";
import MedListState from "./MedListState";

// TODO: Remove mock
const InitialState: MedListState = {
    medList: [
        Med1,
        Med2,
        Med3,
    ],
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
