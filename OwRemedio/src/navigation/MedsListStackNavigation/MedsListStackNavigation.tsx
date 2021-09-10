import React from "react";
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import { MedsListNavScreenParams } from "./MedsListNavScreenParams";
import MedsList from "../../features/MedsList";
import AddEditMed from "../../features/AddMed";

const Stack = createStackNavigator<MedsListNavScreenParams>();

interface MedsListStackNavigationProps {}

const MedsListStackNavigation: React.FC<MedsListStackNavigationProps> = ({}) => {
    const defaultOptions: StackNavigationOptions = {
        headerShown: false,
    };

    return (
        <Stack.Navigator 
            screenOptions={defaultOptions}
            initialRouteName="AddEditMed">

            <Stack.Screen name="MedsList" component={MedsList} />
            <Stack.Screen name="AddEditMed" children={AddEditMed} />
        </Stack.Navigator>
    );
};

export default MedsListStackNavigation;
