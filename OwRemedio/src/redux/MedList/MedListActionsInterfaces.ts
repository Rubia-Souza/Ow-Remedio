import Med from "../../shared/dto/Med";

export const ADD_MED = "medList/addMed";

export interface AddMedAction {
    type: typeof ADD_MED,
    payload: Med,
}

export type MedListAction = AddMedAction;
