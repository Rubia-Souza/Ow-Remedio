import React from "react";
import {
    View,
    TextInput,
    TextInputProps,
} from "react-native";
import Colors from "../../../utils/AssetsReferences/Colors";

import DefualtText from "../../Text/DefaultText";

import styles, { 
    DefaultTextInputElementsStyles,
} from "./styles";

interface DefaultTextInputProps extends TextInputProps {
    label: string;
    elementsStyles?: DefaultTextInputElementsStyles;
}

const defaultProps: DefaultTextInputProps = {
    label: "",
    elementsStyles: {},
};

export const DefaultTextInput: React.FC<DefaultTextInputProps> = (
    props: DefaultTextInputProps
) => {
    return (
        <View style={[styles.Container, props.elementsStyles?.Container]}>
            <DefualtText style={[styles.Label, props.elementsStyles?.Label]}>
                {props.label}
            </DefualtText>
            <TextInput
                placeholderTextColor={Colors.gray9E}
                {...props}
                style={[styles.TextInput, props.elementsStyles?.TextInput]}
            />
        </View>
    );
};

DefaultTextInput.defaultProps = defaultProps;
