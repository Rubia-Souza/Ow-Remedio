import React from "react";
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import { MedsListNavScreenParams } from "./MedsListNavScreenParams";
import MedsList from "../../features/MedsList";

const Stack = createStackNavigator<MedsListNavScreenParams>();

interface MedsListStackNavigationProps {}

const MedsListStackNavigation: React.FC<MedsListStackNavigationProps> = ({}) => {
    const defaultOptions: StackNavigationOptions = {
        headerShown: false,
    };

    return (
        <Stack.Navigator 
            screenOptions={defaultOptions}
            initialRouteName="MedsList">

            <Stack.Screen name="MedsList" component={MedsList} />
        </Stack.Navigator>
    );
};

export default MedsListStackNavigation;
