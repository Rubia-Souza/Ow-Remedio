import React, { useState } from "react";
import {
    StyleProp,
    TextStyle,
    TouchableOpacity,
    View,
    ViewStyle,
} from "react-native";

import Arrow from "../../../../imgs/icons/Arrow";
import DefaultText from "../../Text/DefaultText";
import If from "../../If/If";

import styles from "./styles";
import Colors from "../../../utils/AssetsReferences/Colors";

import { DropDownItem, EmptyDropDownItem, } from "./DropDownItem";
import OptionList from "./OptionsList/OptionsList";

export interface DropDowProps {
    label: string;
    placeholder?: string;
    value?: DropDownItem<any>;
    options: DropDownItem<any>[];
    ListStyle?: StyleProp<ViewStyle>;
    TextStyle?: StyleProp<TextStyle>;
    OptionContainerStyle?: StyleProp<ViewStyle>;
}

interface DropDownState {
    IsModalOpen: boolean;
    SelectedOption: DropDownItem<any>;
}

const initialState: DropDownState = {
    IsModalOpen: false,
    SelectedOption: EmptyDropDownItem,
};

export const DropDown: React.FC<DropDowProps> = (
    props: DropDowProps
) => {
    const [IsModalOpen, setIsModalOpen] = useState<boolean>(initialState.IsModalOpen);
    const [SelectedOption, setSelectedOption] = useState<DropDownItem<any>>(initialState.SelectedOption);

    const toggleModal = (): void => {
        setIsModalOpen(!IsModalOpen);
    };

    const onOptionPress = (selectedOption: DropDownItem<any>): void => {
        
    };

    return (
        <View>
            <DefaultText style={styles.Label}>
                {props.label}
            </DefaultText>
            <TouchableOpacity 
                onPress={toggleModal}
                style={styles.InputContainer}
            >
                <If isTrue={!!!props.value}>
                    <DefaultText style={styles.Placeholder}>
                        {props.placeholder}
                    </DefaultText>
                </If>
                <If isTrue={!!props.value}>
                    <DefaultText style={styles.SelectedValueText}>
                        {props.value?.text}
                    </DefaultText>
                </If>
                <If isTrue={IsModalOpen}>
                    <Arrow height="18" width="18" color={Colors.gray9E} rotation={-180} />
                </If>
                <If isTrue={!IsModalOpen}>
                    <Arrow height="18" width="18" color={Colors.gray9E} />
                </If>
            </TouchableOpacity>
            <If isTrue={IsModalOpen}>
                <OptionList
                    options={props.options}
                    ListStyle={props.ListStyle}
                    OptionContainerStyle={props.OptionContainerStyle}
                    TextStyle={props.TextStyle}
                />
            </If>
        </View>
    );
};
