import React, { useState } from "react";
import {
    TouchableOpacity,
    View,
} from "react-native";

import Arrow from "../../../../imgs/icons/Arrow";
import DefaultText from "../../Text/DefaultText";
import If from "../../If/If";

import styles from "./styles";
import Colors from "../../../utils/AssetsReferences/Colors";

import { DropDownItem, } from "./DropDownItem";
import OptionList from "./OptionsList/OptionsList";

export interface DropDowProps {
    label: string;
    placeholder?: string;
    value?: DropDownItem<any>;
    options: DropDownItem<any>[];
}

export const DropDow: React.FC<DropDowProps> = (
    props: DropDowProps
) => {
    const [IsModalOpen, setIsModalOpen] = useState<boolean>(false);

    const toggleModal = () => {
        setIsModalOpen(!IsModalOpen);
    };

    return (
        <View>
            <DefaultText style={styles.Label}>
                {props.label}
            </DefaultText>
            <TouchableOpacity style={styles.InputContainer}>
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
            <OptionList
                options={props.options}
                ListStyle={styles.List}
                OptionContainerStyle={styles.OptionsContainer}
                TextStyle={styles.OptionText}
            />
        </View>
    );
};
