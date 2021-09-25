import React from "react";
import { 
    TouchableOpacity, 
    TouchableOpacityProps,
} from "react-native";

import DefaultText from "../../Text/DefaultText";
import styles, { DefaultButtonElementsStyles } from "./styles";

interface DefaultButtonProps extends TouchableOpacityProps {
    children: any;
    elementsStyles?: DefaultButtonElementsStyles;
}

const defaultProps: DefaultButtonProps = {
    children: null,
    elementsStyles: {},
};

export const DefaultButton: React.FC<DefaultButtonProps> = (
    props: DefaultButtonProps
) => {
    return (
        <TouchableOpacity 
            style={[styles.Background, props.elementsStyles?.Container]}
            {...props}
        >
            <DefaultText style={[styles.Text, props.elementsStyles?.Text]}>
                {props.children}
            </DefaultText>
        </TouchableOpacity>
    );
};

DefaultButton.defaultProps = defaultProps;
