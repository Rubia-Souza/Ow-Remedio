import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TodayMeds, { TodayMedsScreenData } from "../../features/TodayMeds";

interface TabNavigatorProps {}

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC<TabNavigatorProps> = ({}) => {
    return (
        <React.Fragment>
            <Tab.Navigator 
                initialRouteName={TodayMeds.name}>

                <Tab.Screen name={TodayMedsScreenData.name} component={TodayMeds} />
            </Tab.Navigator>
        </React.Fragment>
    );
}

export default TabNavigator;
