import React from "react";
import { Text } from "react-native";

import styles from "./styles";

interface DefualtTitleProps {
    style?: any;
    children?: any;
}

const DefualtTitle: React.FC<DefualtTitleProps> = ({
    style = {},
    children = null,
}) => {
    return (
        <Text style={[styles.DefualtTitle, {...style}]}>
            {children}
        </Text>
    );
};

export default DefualtTitle;
