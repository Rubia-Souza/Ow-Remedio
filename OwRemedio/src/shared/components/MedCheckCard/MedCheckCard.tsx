import React from "react";
import {
    View,
} from "react-native";

import BellFill from "../../../imgs/icons/BellFill";

import Med, { MedUtils } from "../../dto/Med";
import NotificationTypes from "../../dto/NotificationTypes";

import If from "../If/If";
import RadioButton from "../RadioButton/RadioButton";
import DefaultText from "../Text/DefaultText";
import styles from "./styles";

interface MedCheckCardProps {
    medInfo: Med;
}

const MedCheckCard: React.FC<MedCheckCardProps> = ({
    medInfo,
}) => {
    return (
        <View style={styles.container}>
            <RadioButton>
                <View style={styles.textContainer}>
                    <View style={styles.medNameContainer}>
                        <DefaultText style={styles.medName}>
                            {medInfo.name}
                        </DefaultText>
                        <If isTrue={medInfo.notificationType === NotificationTypes.Alarm}>
                            <BellFill width="30" height="30" />
                        </If>
                    </View>
                    <DefaultText>
                        {`Horário: ${MedUtils.renderTime(medInfo)} - ${MedUtils.renderTime(medInfo)}`}
                    </DefaultText>
                </View>
            </RadioButton>
        </View>
    );
};

export default MedCheckCard;
