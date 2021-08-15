import React from "react";
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import { createBottomTabNavigator, BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

import TodayMeds, { TodayMedsScreenData } from "../../features/TodayMeds";
import Header from "../../shared/components/Header/Header";
import { TabNavScreensParams } from "./TabNavScreensParams";

interface TabNavigatorProps {}

const Tab = createBottomTabNavigator<TabNavScreensParams>();

const TabNavigator: React.FC<TabNavigatorProps> = ({}) => {

    const renderCustomHeader = (props: BottomTabHeaderProps) => <Header ScreenTitle={props.options.title} />;

    const tabNavigationOptions: BottomTabNavigationOptions = {
        tabBarHideOnKeyboard: true,
        header: renderCustomHeader,
    };

    return (
        <React.Fragment>
            <Tab.Navigator
                screenOptions={tabNavigationOptions}
                initialRouteName="Hoje">

                <Tab.Screen name="Hoje" component={TodayMeds} options={TodayMedsScreenData.getTabOptions()} />
            </Tab.Navigator>
        </React.Fragment>
    );
}

export default TabNavigator;
