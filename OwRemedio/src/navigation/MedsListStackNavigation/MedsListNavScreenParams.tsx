import { RouteProp, } from "@react-navigation/native";
import { NativeStackNavigationProp, } from "@react-navigation/native-stack";
import Med from "../../shared/dto/Med";

export type MedsListNavScreenParams = {
    MedsList: undefined;
    AddEditMed: { MedData: Med } | undefined;
};

export type MedListNavigationProps = NativeStackNavigationProp<MedsListNavScreenParams, "MedsList">;
export type MedListRouteProps = RouteProp<MedsListNavScreenParams, "MedsList">;

export type AddEditMedNavigationProps = NativeStackNavigationProp<MedsListNavScreenParams, "AddEditMed">;
export type AddEditMedRouteProps = RouteProp<MedsListNavScreenParams, "AddEditMed">;
