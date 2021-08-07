import 'react-native-gesture-handler';
import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";

import {name as appName} from "./src/aplication/app.json";

import App from "./src/aplication/App";
import StoreConfig from "./src/store/ReduxConfig";

const Store = StoreConfig();

const AppRedux: React.FC = () => {
    return (
        <Provider store={Store}>
            <App />
        </Provider>
    );  
};

AppRegistry.registerComponent(appName, () => AppRedux);
