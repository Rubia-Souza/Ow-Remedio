import React from "react";
import { 
    Text,
    TextProps,
} from "react-native";

import styles from "./styles";

interface DefaultTitleProps extends TextProps {
    style?: any;
    children?: any;
}

const initialState: DefaultTitleProps = {
    style: {},
    children: null,
};

const DefaultTitle: React.FC<DefaultTitleProps> = (
    props: DefaultTitleProps
) => {
    return (
        <Text {...props} style={[styles.DefaultTitle, props.style]}>
            {props.children}
        </Text>
    );
};

DefaultTitle.defaultProps = initialState;

export default DefaultTitle;
