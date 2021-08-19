import React from "react";
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import { createBottomTabNavigator, BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

import styles from "./styles";

import TodayMeds, { TodayMedsScreenData } from "../../features/TodayMeds";
import Header from "../../shared/components/Header/Header";
import { TabNavScreensParams } from "./TabNavScreensParams";
import { MedListScreenData } from "../../features/MedsList";
import MedsListStackNavigation from "../MedsListStackNavigation";

interface TabNavigatorProps {}

const Tab = createBottomTabNavigator<TabNavScreensParams>();

const TabNavigator: React.FC<TabNavigatorProps> = ({}) => {
    const renderCustomHeader = (props: BottomTabHeaderProps) => <Header ScreenTitle={props.options.title} />;

    const tabNavigationOptions: BottomTabNavigationOptions = {
        tabBarHideOnKeyboard: true,
        header: renderCustomHeader,
        tabBarStyle: styles.tabBar,
        tabBarIconStyle: styles.tabIcon,
        tabBarLabelStyle: styles.tabLabel,
        tabBarItemStyle: styles.tabElementContainer,
    };

    return (
        <React.Fragment>
            <Tab.Navigator
                screenOptions={tabNavigationOptions}
                initialRouteName="TodayMeds">

                <Tab.Screen name="TodayMeds" component={TodayMeds} options={{...TodayMedsScreenData.getTabOptions()}} />
                <Tab.Screen name="MedsListStackNavigation" component={MedsListStackNavigation} options={{...MedListScreenData.getTabOptions()}} />
            </Tab.Navigator>
        </React.Fragment>
    );
};

export default TabNavigator;
