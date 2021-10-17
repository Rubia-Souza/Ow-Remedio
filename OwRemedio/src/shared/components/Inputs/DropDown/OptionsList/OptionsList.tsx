import React, { useState, } from "react";
import {
    ScrollView,
    StyleProp,
    TextStyle,
    ViewStyle,
} from "react-native";

import { DropDownItem, } from "../DropDownItem";
import OptionsItem, { ItemData } from "../OptionItem/OptionItem";
import { createDumbKey, } from "../../../../utils/Utils";

import styles from "./styles";

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

interface OptionListState {
    OptionListData: ItemData[];
}

const optionListInitialState: OptionListState = {
    OptionListData: [],
};

const OptionList: React.FC<OptionListProps> = (
    props: OptionListProps
) => {
    const [OptionListData, setOptionListData] = useState<ItemData[]>(optionListInitialState.OptionListData);

    const handleOptionSelection = (id: string, data: DropDownItem<any>): void => {
        const updatedListdata = [...OptionListData];

        const indexPriviousSelection = updatedListdata.findIndex(item => item.isSelected === true);
        const hasAnySelection = !!updatedListdata[indexPriviousSelection];
        if (hasAnySelection) {
            updatedListdata[indexPriviousSelection].isSelected = false;
        }   

        const indexSelectedItem = updatedListdata.findIndex(item => item.id === id);
        updatedListdata[indexSelectedItem].isSelected = true;

        setOptionListData(updatedListdata);
    };

    const renderOptionItemElements = () => {
        const optionElements = [];

        for (let i = 0; i < props.options.length; i++) {
            const elementId: string = createDumbKey();
            const elementData = props.options[i];

            const elementItemData: ItemData = {
                id: elementId,
                optionData: elementData,
                isSelected: false,
            };

            OptionListData.push(elementItemData);

            const optionElement = (
                <OptionsItem
                    key={elementItemData.id}
                    data={OptionListData[i]}
                    onPress={handleOptionSelection}
                    textStyle={props.TextStyle}
                    containerStyle={props.OptionContainerStyle}
                />
            );

            optionElements.push(optionElement);
        }

        return optionElements;
    };

    return (
        <ScrollView
            nestedScrollEnabled={true}
            style={[props.ListStyle, styles.List]}
        >
            { renderOptionItemElements() }
        </ScrollView>
    );
};

OptionList.defaultProps = defaultProps;

export default OptionList;
