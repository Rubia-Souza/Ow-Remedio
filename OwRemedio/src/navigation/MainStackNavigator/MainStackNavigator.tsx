import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import TabNavigator, { TabNavScreenData } from "../TabNavigator";

interface StackNavigatorProps {}

const Stack = createStackNavigator();

// TODO: Add SplashScreen
const MainStackNavigator: React.FC<StackNavigatorProps> = ({}) => {
    const ScreenOptions = {
        headerShown: false,
    };

    return (
        <React.Fragment>
            <Stack.Navigator 
                screenOptions={ScreenOptions}
                initialRouteName={TabNavScreenData.name}>

                <Stack.Screen name={TabNavScreenData.name} component={TabNavigator} />
            </Stack.Navigator>
        </React.Fragment>
    );
}

export default MainStackNavigator;
