import React from "react";

import {
  SafeAreaView,
} from "react-native";

import RootNavigator from "../navigation/RootNavigator";
import styles from "./styles";

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.MainBackground}>
      <RootNavigator />
    </SafeAreaView>
  );
};

export default App;
