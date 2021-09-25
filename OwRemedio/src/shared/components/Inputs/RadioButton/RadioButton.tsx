import React, { useState } from "react";
import {
    TouchableOpacity,
    View,
} from "react-native";

import styles, { 
    RadioButtonStyles,
} from "./styles";

import If from "../../If/If";
import { hasSetFunctionValue, } from "../../../utils/ComponentsFunctions";

interface RadioButtonProps {
    onCheck?: any;
    onUncheck?: any;
    children?: any;
    elementsStyles?: RadioButtonStyles,
}

const defaultProps: RadioButtonProps = {
    onCheck: null,
    onUncheck: null,
    children: null,
    elementsStyles: {},
};

interface RadioButtonState {
    isChecked: boolean;
}

const intialState: RadioButtonState = {
    isChecked: false,
};

export const RadioButton: React.FC<RadioButtonProps> = (
    props: RadioButtonProps
) => {
    const [isChecked, setIsChecked] = useState<boolean>(intialState.isChecked);

    const toggleState = (): void => {
        setIsChecked(!isChecked);

        if (isChecked && hasSetFunctionValue(props.onCheck)) {
            props.onCheck();
        }
        else if (!isChecked && hasSetFunctionValue(props.onUncheck)) {
            props.onUncheck();
        }
    };

    return (
        <TouchableOpacity style={[styles.container, props.elementsStyles?.Container]} onPress={toggleState}>
            <View style={[styles.radioButtonBorder, props.elementsStyles?.RadioButtonBorder]}>
                <If isTrue={isChecked}>
                    <View style={[styles.radioButtonCircle, props.elementsStyles?.RadioButtonCircle]}/>
                </If>
            </View>
            {props.children}
        </TouchableOpacity>
    );
};

RadioButton.defaultProps = defaultProps;
