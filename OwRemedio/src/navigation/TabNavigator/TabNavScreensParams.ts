import { RouteProp, } from "@react-navigation/native";
import { BottomTabNavigationProp, } from "@react-navigation/bottom-tabs";

export type TabNavScreensParams = {
    TodayMeds: undefined,
    MedsListStackNavigation: undefined,
};

export type TodayMedsNavigationProps = BottomTabNavigationProp<TabNavScreensParams, "TodayMeds">;
export type TodayMedsRouteProps = RouteProp<TabNavScreensParams, "TodayMeds">;

export type MedListStackNavigationProps = BottomTabNavigationProp<TabNavScreensParams, "MedsListStackNavigation">;
export type MedListStackNavigationRouteProps = RouteProp<TabNavScreensParams, "MedsListStackNavigation">;
