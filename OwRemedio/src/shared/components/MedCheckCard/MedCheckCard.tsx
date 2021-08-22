import React, { useState } from "react";
import {
    View,
} from "react-native";

import BellFill from "../../../imgs/icons/BellFill";

import Med, { MedUtils } from "../../dto/Med";
import NotificationTypes from "../../enums/NotificationTypes";
import Colors from "../../utils/AssetsReferences/Colors";

import If from "../If/If";
import RadioButton from "../RadioButton/RadioButton";
import DefaultText from "../Text/DefaultText";
import styles, { MedCheckCardStyleProps } from "./styles";

interface MedCheckCardProps {
    medInfo: Med;
}

const initialState = {
    inChecked: false,
};

const MedCheckCard: React.FC<MedCheckCardProps> = ({
    medInfo,
}) => {
    const [isChecked, setIsChecked] = useState<boolean>(initialState.inChecked);
    const getStyleProps = (): MedCheckCardStyleProps => {
        return {
            isChecked: isChecked,
        };
    };

    const updateIsChecked = (): void => {
        setIsChecked(!isChecked);
    };

    return (
        <View style={styles(getStyleProps()).container}>
            <RadioButton onCheck={updateIsChecked} onUncheck={updateIsChecked} >
                <View style={styles(getStyleProps()).textContainer}>
                    <View style={styles(getStyleProps()).medNameContainer}>
                        <DefaultText style={styles(getStyleProps()).medName}>
                            {medInfo.name}
                        </DefaultText>
                        <If isTrue={medInfo.notificationType === NotificationTypes.Alarm}>
                            <BellFill width="21" height="21" color={isChecked ? Colors.gray64 : Colors.black2E} rotation={-30} />
                        </If>
                    </View>
                    <DefaultText style={styles(getStyleProps()).medTimeStock}>
                        {`Horário: ${MedUtils.renderTime(medInfo)} - ${MedUtils.renderStock(medInfo)}`}
                    </DefaultText>
                </View>
            </RadioButton>
        </View>
    );
};

export default MedCheckCard;
