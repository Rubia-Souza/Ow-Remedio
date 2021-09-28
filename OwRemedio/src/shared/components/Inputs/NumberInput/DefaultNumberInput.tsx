import React, { useState } from "react";
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

interface DefaultNumberState {
    ActualValue: string;
}

const initialState: DefaultNumberState = {
    ActualValue: "0",
};

export const DefaultNumberInput: React.FC<DefaultNumberInputProps> = (
    props: DefaultNumberInputProps
) => {
    const [ActualValue, setActualValue] = useState<string>(initialState.ActualValue);
    const [PreviusEdtingNumberValue, setPreviusEdtingNumberValue] = useState<string>(ActualValue);

    if (!!props.value) {
        setActualValue(props.value);
    }

    const registerBeforeEditingNumber = (): void => {
        setPreviusEdtingNumberValue(ActualValue);
    };

    const handleKeyboardInput = (text: string): void => {
        setActualValue(text);
    };

    const validateKeyboardInput = (): void => {
        const inputNumber: number = parseFloat(ActualValue);

        let isHigherThanMax: boolean = true;
        if (!!props.maxValue) {
            isHigherThanMax = inputNumber >= props.maxValue;
        }

        let isLowerThanMin: boolean = true;
        if (!!props.minValue) {
            isLowerThanMin = inputNumber <= props.minValue;
        }

        if (!isHigherThanMax || !isLowerThanMin) {
            setActualValue(PreviusEdtingNumberValue);
        }
    };

    const handleUpArrowPress = (): void => {
        let newValue: number = parseFloat(ActualValue);

        if (!!props.incrementStep) {
            newValue = parseFloat(ActualValue) + props.incrementStep;
        }

        if (!!!props.maxValue) {
            setActualValue(newValue.toString());
        }
        else if (newValue <= props.maxValue) {
            setActualValue(newValue.toString());
        }
    };
    
    const handleDownArrowPress = (): void => {
        let newValue: number = parseFloat(ActualValue);
        
        if (!!props.incrementStep) {
            newValue = parseFloat(ActualValue) - props.incrementStep;
        }

        if (!!!props.minValue) {
            setActualValue(newValue.toString());
        }
        else if (newValue >= props.minValue) {
            setActualValue(newValue.toString());
        }
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
                    onChangeText={handleKeyboardInput}
                    onEndEditing={validateKeyboardInput}
                    selectTextOnFocus={true}
                    value={ActualValue.toString()}
                    onFocus={registerBeforeEditingNumber}
                    {...props}
                    style={[styles.TextInput, props.elementsStyles?.DisplayTextInput]}
                />
                <View style={styles.ButtonsContainer}>
                    <TouchableOpacity style={styles.UpArrow} onPress={handleUpArrowPress}>
                        <Arrow height="18" width="18" color={Colors.gray9E} rotation={-180} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleDownArrowPress}>
                        <Arrow height="18" width="18" color={Colors.gray9E} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

DefaultNumberInput.defaultProps = defaultProps;
