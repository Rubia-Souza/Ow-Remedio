import React from "react";
import { 
    TouchableOpacity, 
    TouchableOpacityProps,
} from "react-native";

import DefaultText from "../../Text/DefaultText";

import styles, { 
    GhostButtonElementsStyles,
} from "./styles";

interface GhostButtonProps extends TouchableOpacityProps {
    children: any;
    elementsStyles?: GhostButtonElementsStyles;
}

const defaultProps: GhostButtonProps = {
    children: null,
    elementsStyles: {},
};

export const GhostButton: React.FC<GhostButtonProps> = (
    props: GhostButtonProps,
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

GhostButton.defaultProps = defaultProps;
