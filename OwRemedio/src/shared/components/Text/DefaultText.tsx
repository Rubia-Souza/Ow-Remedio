import React from "react";
import { Text } from "react-native";

import styles from "./styles";

interface DefualtTextProps {
    style?: any;
    children?: any;
}

const DefualtText: React.FC<DefualtTextProps> = ({
    style = {},
    children = null,
}) => {
    return (
        <Text style={[styles.DefualtText, {...style}]}>
            {children}
        </Text>
    );
};

export default DefualtText;
