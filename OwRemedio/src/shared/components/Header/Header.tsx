import React from "react";
import { View } from "react-native";

import DefualtTitle from "../Title/DefaultTitle";

import styles from "./styles";

interface HeaderProps {
    ScreenTitle?: string,
}

const Header: React.FC<HeaderProps> = ({
    ScreenTitle = "",
}) => {

    return (
        <View style={styles.Background}>
            <DefualtTitle style={styles.PageText}>
                {ScreenTitle}
            </DefualtTitle>
        </View>
    );
};

export default Header;
