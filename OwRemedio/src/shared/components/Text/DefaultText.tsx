import React from "react";
import { 
    Text,
    TextProps,
} from "react-native";

import styles from "./styles";

interface DefualtTextProps extends TextProps {
    style?: any;
    children?: any;
}

const initialState: DefualtTextProps = {
    style: {},
    children: null,
};

const DefualtText: React.FC<DefualtTextProps> = (
    props: DefualtTextProps
) => {
    return (
        <Text style={[{...styles.DefualtText}, {...props.style}]} {...props}>
            {props.children}
        </Text>
    );
};

DefualtText.defaultProps = initialState;

export default DefualtText;
