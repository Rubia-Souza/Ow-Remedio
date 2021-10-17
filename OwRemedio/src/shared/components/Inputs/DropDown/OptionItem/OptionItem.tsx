import React from "react";
import {
    StyleProp,
    TextStyle,
    TouchableOpacity,
    ViewStyle,
} from "react-native";

import DefaultText from "../../../Text/DefaultText";

import { DropDownItem, EmptyDropDownItem, } from "../DropDownItem";
import { OptionItemStyles, Styles, } from "./styles";

import { hasSetFunctionValue, } from "../../../../utils/ComponentsFunctions";

export interface ItemData {
    id: string;
    optionData: DropDownItem<any>;
    isSelected: boolean;
}

interface OptionItemProps {
    data: ItemData;
    onPress?: any;
    textStyle?: StyleProp<TextStyle>;
    containerStyle?: StyleProp<ViewStyle>;
}

const defaultProps: OptionItemProps = {
    data: {
        id: "",
        optionData: EmptyDropDownItem,
        isSelected: false,
    },
    onPress: undefined,
    textStyle: {},
    containerStyle: {},
};

const OptionsItem: React.FC<OptionItemProps> = (
    props: OptionItemProps
) => {
    const getStylesProps = (): OptionItemStyles => {
        return {
            isSelected: props.data.isSelected,
        };
    };

    const handlePress = (): void => {
        if (hasSetFunctionValue(props.onPress)) {
            props.onPress(props.data.id, props.data.optionData);
        }
    };

    return (
        <TouchableOpacity 
            onPress={handlePress}
            style={[props?.containerStyle, Styles.getSheet(getStylesProps()).OptionsContainer]}
        >
            <DefaultText style={[props?.textStyle, Styles.getSheet(getStylesProps()).OptionText]}>
                {props.data.optionData.text}
            </DefaultText>
        </TouchableOpacity>
    );
};

OptionsItem.defaultProps = defaultProps;

export default OptionsItem;
