import React, { useState } from "react";
import {
    TouchableOpacity,
    View,
} from "react-native";
import styles from "./styles";

import If from "../../If/If";
import { hasSetFunctionValue } from "../../../utils/ComponentsFunctions";

interface RadioButtonProps {
    onCheck?: any;
    onUncheck?: any;
    children?: any;
    style?: any,
}

interface RadioButtonState {
    isChecked: boolean;
}

const intialState: RadioButtonState = {
    isChecked: false,
};

export const RadioButton: React.FC<RadioButtonProps> = ({
    onCheck = null,
    onUncheck = null,
    children = null,
    style = {},
}) => {
    const [isChecked, setIsChecked] = useState<boolean>(intialState.isChecked);

    const toggleState = (): void => {
        setIsChecked(!isChecked);

        if (isChecked && hasSetFunctionValue(onCheck)) {
            onCheck();
        }
        else if (!isChecked && hasSetFunctionValue(onUncheck)) {
            onUncheck();
        }
    };

    return (
        <TouchableOpacity style={[styles.container, {...style}]} onPress={toggleState}>
            <View style={styles.radioButtonBorder}>
                <If isTrue={isChecked}>
                    <View style={styles.radioButtonCircle}/>
                </If>
            </View>
            {children}
        </TouchableOpacity>
    );
};
