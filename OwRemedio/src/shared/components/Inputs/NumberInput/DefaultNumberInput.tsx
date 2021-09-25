import React from "react";
import {
    View,
    TextInput,
    TextInputProps,
    TouchableOpacity,
} from "react-native";

import Arrow from "../../../../imgs/icons/Arrow";
import DefaultText from "../../Text/DefaultText";

import styles, { 
    DefaultNumberInputElementsStyles,
} from "./styles";

import Colors from "../../../utils/AssetsReferences/Colors";

interface DefaultNumberInputProps extends TextInputProps {
    label: string;
    incrementStep?: number;
    maxValue?: number | undefined;
    minValue?: number | undefined;
    elementsStyles?: DefaultNumberInputElementsStyles;
}

const defaultProps: DefaultNumberInputProps = {
    label: "",
    incrementStep: 1,
    maxValue: undefined,
    minValue: undefined,
    elementsStyles: {},
};

export const DefaultNumberInput: React.FC<DefaultNumberInputProps> = (
    props: DefaultNumberInputProps
) => {
    const handleUpArrowPress = () => {

    };

    const handleDownArrowPress = () => {

    };

    return (
        <View style={[styles.Container, props.elementsStyles?.Container]}>
            <DefaultText style={[styles.Label, props.elementsStyles?.Label]}>
                {props.label}
            </DefaultText>
            <View style={[styles.InputRegion, props.elementsStyles?.Input]}>
                <TextInput
                    placeholderTextColor={Colors.gray9E}
                    keyboardType="numeric"
                    {...props}
                    style={[styles.TextInput, props.elementsStyles?.DisplayTextInput]}
                />
                <View style={styles.ButtonsContainer}>
                    <TouchableOpacity style={styles.UpArrow}>
                        <Arrow height="18" width="18" color={Colors.gray9E} rotation={-180} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Arrow height="18" width="18" color={Colors.gray9E} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

DefaultNumberInput.defaultProps = defaultProps;
