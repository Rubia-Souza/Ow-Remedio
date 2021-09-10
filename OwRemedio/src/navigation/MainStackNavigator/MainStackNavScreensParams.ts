import { RouteProp, } from "@react-navigation/native";
import { BottomTabNavigationProp, } from "@react-navigation/bottom-tabs";

export type MainStackNavScreensParams = {
    TabNav: undefined;
};

export type TabNavNavigationProps = BottomTabNavigationProp<MainStackNavScreensParams, "TabNav">;
export type TabNavRouteProps = RouteProp<MainStackNavScreensParams, "TabNav">;
