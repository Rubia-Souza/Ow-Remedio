import React from "react";

 import {
   SafeAreaView,
   Text
 } from "react-native";

import { Provider } from "react-redux";
import StoreConfig from "../store/ReduxConfig";

const store = StoreConfig();

 const App : React.FC = () => {
   return (
     <Provider store={store}>
      <SafeAreaView>
        <Text>Hello World</Text>
      </SafeAreaView>
     </Provider>
   );
 };

 export default App;
