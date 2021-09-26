import React, { useState } from "react";
import { 
    View,
    TouchableOpacity,
} from "react-native";

import Check from "../../../../imgs/icons/Check";
import DefaultText from "../../Text/DefaultText";
import If from "../../If/If";

import Colors from "../../../utils/AssetsReferences/Colors";
import { hasSetFunctionValue } from "../../../utils/ComponentsFunctions";

import styles, { 
    CheckboxStyleProps,
    CheckboxElementsStyle,
} from "./styles";

interface CheckboxProps {
    children?: any;
    onCheck?: any;
    onUncheck?: any;
    elementsStyles?: CheckboxElementsStyle,
}

const defaultProps: CheckboxProps = {
    children: null,
    onCheck: null,
    onUncheck: null,
    elementsStyles: {},
};

interface CheckboxState {
    isChecked: boolean,
}

const initialState: CheckboxState = {
    isChecked: false,
};

export const Checkbox: React.FC<CheckboxProps> = (
    props: CheckboxProps
) => {
    const [IsChecked, setIsChecked] = useState<boolean>(initialState.isChecked);

    const getStyleProps = (): CheckboxStyleProps => {
        return ({
            isChecked: IsChecked,
        });
    };

    const toggleCheck = (): void => {
        setIsChecked(!IsChecked);

        if (IsChecked && hasSetFunctionValue(props.onCheck)) {
            props.onCheck();
        }
        else if (!IsChecked && hasSetFunctionValue(props.onUncheck)) {
            props.onUncheck();
        }
    };

    return (
        <TouchableOpacity onPress={toggleCheck} style={[styles(getStyleProps()).Container, props.elementsStyles?.Container]}>
            <View style={[styles(getStyleProps()).CheckContainer, props.elementsStyles?.Square]}>
                <If isTrue={IsChecked}>
                    <Check height="21" width="21" color={Colors.whiteFE} />
                </If>
            </View>
            <DefaultText style={[styles(getStyleProps()).Label, props.elementsStyles?.Label]}>
                {props.children}
            </DefaultText>
        </TouchableOpacity>
    );
};

Checkbox.defaultProps = defaultProps;
