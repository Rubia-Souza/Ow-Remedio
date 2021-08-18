import React, { useState } from "react";
import {
    View,
} from "react-native";

import BellFill from "../../../imgs/icons/BellFill";

import Med, { MedUtils } from "../../dto/Med";
import NotificationTypes from "../../dto/NotificationTypes";
import Colors from "../../utils/AssetsReferences/Colors";

import If from "../If/If";
import RadioButton from "../RadioButton/RadioButton";
import DefaultText from "../Text/DefaultText";
import styles from "./styles";

interface MedCheckCardProps {
    medInfo: Med;
}

const initialState = {
    inChecked: false,
};

const MedCheckCard: React.FC<MedCheckCardProps> = ({
    medInfo,
}) => {
    const [isChecked, setIsChecked] = useState(initialState.inChecked);

    const updateIsChecked = (): void => {
        setIsChecked(!isChecked);
    };

    return (
        <View style={styles(isChecked).container}>
            <RadioButton onCheck={updateIsChecked} onUncheck={updateIsChecked} >
                <View style={styles(isChecked).textContainer}>
                    <View style={styles(isChecked).medNameContainer}>
                        <DefaultText style={styles(isChecked).medName}>
                            {medInfo.name}
                        </DefaultText>
                        <If isTrue={medInfo.notificationType === NotificationTypes.Alarm}>
                            <BellFill width="30" height="30" color={isChecked ? Colors.gray64 : Colors.black2E} />
                        </If>
                    </View>
                    <DefaultText style={styles(isChecked).medTimeStock}>
                        {`Horário: ${MedUtils.renderTime(medInfo)} - ${MedUtils.renderStock(medInfo)}`}
                    </DefaultText>
                </View>
            </RadioButton>
        </View>
    );
};

export default MedCheckCard;
