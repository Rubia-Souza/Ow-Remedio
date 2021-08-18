import React from "react";
import { View } from "react-native";

import Bell from "../../../imgs/icons/Bell";
import BellFill from "../../../imgs/icons/BellFill";
import Edit from "../../../imgs/icons/Edit";

import If from "../If/If";
import DefualtText from "../Text/DefaultText";

import Med, { MedUtils } from "../../dto/Med";
import styles from "./styles";
import CirclePlus from "../../../imgs/icons/CirclePlus";

interface MedInfoCardProps {
    medInfo: Med;
}

const MedInfoCard: React.FC<MedInfoCardProps> = ({
    medInfo,
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.textsContainer}>
                <DefualtText style={styles.medNameText}>
                    {medInfo.name}
                </DefualtText>
                <DefualtText style={styles.medTime}>
                    {`às: ${MedUtils.renderTime(medInfo)}`}
                </DefualtText>
                <DefualtText style={styles.medStock}>
                    <CirclePlus width="24" height="24" />
                    {`Remédios: ${MedUtils.renderStock(medInfo)}`}
                </DefualtText>
            </View>
            <View style={styles.buttonsContainer}>
                <If isTrue={medInfo.hasSound}>
                    <BellFill width="32" height="32" />
                </If>
                <If isTrue={!medInfo.hasSound}>
                    <Bell width="32" height="32" />
                </If>
                <Edit width="32" height="32" />
            </View>
        </View>
    );
};

export default MedInfoCard;
