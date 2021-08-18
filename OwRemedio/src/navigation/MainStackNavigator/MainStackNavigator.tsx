import React from "react";

import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";

import TabNavigator from "../TabNavigator";
import { MainStackNavScreensParams } from "./MainStackNavScreensParams";

interface StackNavigatorProps {}

const Stack = createStackNavigator<MainStackNavScreensParams>();

// TODO: Add SplashScreen
const MainStackNavigator: React.FC<StackNavigatorProps> = ({}) => {
    const ScreenOptions: StackNavigationOptions = {
        headerShown: false,
    };

    return (
        <React.Fragment>
            <Stack.Navigator 
                screenOptions={ScreenOptions}
                initialRouteName="TabNav">

                <Stack.Screen name="TabNav" component={TabNavigator} />
            </Stack.Navigator>
        </React.Fragment>
    );
}

export default MainStackNavigator;
