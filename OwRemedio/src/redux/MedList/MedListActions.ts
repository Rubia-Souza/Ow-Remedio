import { ActionCreator } from "redux";
import Med from "../../shared/dto/Med/Med";
import { AddMedAction, ADD_MED } from "./MedListActionsInterfaces";

export const addMed: ActionCreator<AddMedAction> = (med: Med) => {
    return { type: ADD_MED, payload: med };
};
