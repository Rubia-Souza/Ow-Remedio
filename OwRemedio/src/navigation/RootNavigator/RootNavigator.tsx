import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MainStackNavigator from "../MainStackNavigator";

interface RootNavigatorProps {}

const RootNavigator: React.FC<RootNavigatorProps> = ({}) => {
    return (
        <NavigationContainer>
            <MainStackNavigator />
        </NavigationContainer>
    );
}

export default RootNavigator;
