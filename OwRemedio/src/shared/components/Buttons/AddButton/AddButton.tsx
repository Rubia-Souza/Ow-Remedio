import React from "react";
import { GestureResponderEvent, TouchableOpacity } from "react-native";

import styles from "./styles";

import Plus from "../../../../imgs/icons/Plus";

import Colors from "../../../utils/AssetsReferences/Colors";

interface AddButtonProps {
    onClick: Function;
}

export const AddButton: React.FC<AddButtonProps> = ({
    onClick,
}) => {
    return (
        <TouchableOpacity style={styles.Background} onPress={(event: GestureResponderEvent) => onClick(event)}>
            <Plus width="32" height="32" color={Colors.whiteFE} />
        </TouchableOpacity>
    );
};
