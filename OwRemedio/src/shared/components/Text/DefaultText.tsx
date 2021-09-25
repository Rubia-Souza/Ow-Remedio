import React from "react";
import { 
    Text,
    TextProps,
} from "react-native";

import styles from "./styles";

interface DefaultTextProps extends TextProps {
    style?: any;
    children?: any;
}

const initialState: DefaultTextProps = {
    style: {},
    children: null,
};

const DefaultText: React.FC<DefaultTextProps> = (
    props: DefaultTextProps
) => {
    return (
        <Text {...props} style={[styles.DefaultText, props.style]} >
            {props.children}
        </Text>
    );
};

DefaultText.defaultProps = initialState;

export default DefaultText;
