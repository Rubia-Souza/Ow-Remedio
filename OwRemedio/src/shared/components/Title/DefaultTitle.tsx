import React from "react";
import { 
    Text,
    TextProps,
} from "react-native";

import styles from "./styles";

interface DefualtTitleProps extends TextProps {
    style?: any;
    children?: any;
}

const initialState: DefualtTitleProps = {
    style: {},
    children: null,
};

const DefualtTitle: React.FC<DefualtTitleProps> = (
    props: DefualtTitleProps
) => {
    return (
        <Text style={[{...styles.DefualtTitle}, {...props.style}]} {...props}>
            {props.children}
        </Text>
    );
};

DefualtTitle.defaultProps = initialState;

export default DefualtTitle;
