import React from "react";
import { 
    ScrollView,
    StyleProp,
    TextStyle,
    ViewStyle,
} from "react-native";

import { DropDownItem } from "../DropDownItem";
import OptionsItem from "../OptionItem/OptionItem";
import { createDumbKey } from "../../../../utils/Utils";

interface OptionListProps {
    options: DropDownItem<any>[];
    ListStyle?: StyleProp<ViewStyle>;
    TextStyle?: StyleProp<TextStyle>;
    OptionContainerStyle?: StyleProp<ViewStyle>;
}

const defaultProps: OptionListProps = {
    options: [],
    ListStyle: {},
    TextStyle: {},
    OptionContainerStyle: {},
};

const OptionList: React.FC<OptionListProps> = (
    props: OptionListProps
) => {
    const renderOptionItemElements = () => {
        const optionElements = [];

        for (const data of props.options) {
            optionElements.push(
                <OptionsItem 
                    item={data} 
                    key={createDumbKey()} 
                    textStyle={props.TextStyle}
                    containerStyle={props.OptionContainerStyle}
                />
            );
        }

        return optionElements;
    };

    return (
        <ScrollView
            nestedScrollEnabled={true}
            style={props.ListStyle}
        >
            { renderOptionItemElements() }
        </ScrollView>
    );
};

OptionList.defaultProps = defaultProps;

export default OptionList;
