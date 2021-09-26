import React from "react";
import { 
    StyleProp,
    TextStyle,
    TouchableOpacity,
    ViewStyle,
} from "react-native";

import DefaultText from "../../../Text/DefaultText";

import { DropDownItem, } from "../DropDownItem";

interface OptionItemProps {
    item: DropDownItem<any>;
    textStyle?: StyleProp<TextStyle>;
    containerStyle?: StyleProp<ViewStyle>;
}

const OptionsItem: React.FC<OptionItemProps> = (
    props: OptionItemProps
) => {
    return (
        <TouchableOpacity style={props?.containerStyle}>
            <DefaultText style={props?.textStyle}>
                {props.item.text}
            </DefaultText>
        </TouchableOpacity>
    );
};

export default OptionsItem;
