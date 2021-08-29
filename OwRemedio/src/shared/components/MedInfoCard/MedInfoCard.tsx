import React from "react";
import {
    TouchableOpacity,
    View,
} from "react-native";

import styles, {
    getButtonsIconsColor,
    getCirclePlusColor,
    MedInfoCardStyleProps,
} from "./styles";

import If from "../If/If";
import DefualtText from "../Text/DefaultText";

import Bell from "../../../imgs/icons/Bell";
import BellFill from "../../../imgs/icons/BellFill";
import Edit from "../../../imgs/icons/Edit";
import CirclePlus from "../../../imgs/icons/CirclePlus";
import Exclamation from "../../../imgs/icons/Exclamation";
import Check from "../../../imgs/icons/Check";

import Med, { MedUtils, } from "../../dto/Med";
import Colors from "../../utils/AssetsReferences/Colors";

interface MedInfoCardProps {
    medInfo: Med;
}

const MedInfoCard: React.FC<MedInfoCardProps> = ({
    medInfo,
}) => {
    const getStyleProps = (): MedInfoCardStyleProps => {
        return {
            medStatus: MedUtils.getMedStatus(medInfo),
        };
    };

    return (
        <View style={styles(getStyleProps()).container}>
            <View style={styles(getStyleProps()).textsContainer}>
                <View style={styles(getStyleProps()).medName}>
                    <If isTrue={MedUtils.isInLowStock(medInfo) && !MedUtils.hasReachFinalDate(medInfo)}>
                        <View style={styles(getStyleProps()).exclamationContainer}>
                            <Exclamation width="18" height="18" color={Colors.brightRed} />
                        </View>
                    </If>

                    <If isTrue={MedUtils.hasReachFinalDate(medInfo)}>
                        <View style={styles(getStyleProps()).checkContainer}>
                            <Check width="18" height="18" color={Colors.brightGreen} />
                        </View>
                    </If>
                    
                    <DefualtText style={styles(getStyleProps()).medNameText} numberOfLines={2} lineBreakMode="tail" >
                        {medInfo.name}
                    </DefualtText>
                </View>

                <DefualtText style={styles(getStyleProps()).medTime}>
                    {`às: ${MedUtils.renderTime(medInfo)}`}
                </DefualtText>

                <TouchableOpacity style={styles(getStyleProps()).stock}>
                    <CirclePlus width="24" height="24" color={getCirclePlusColor(MedUtils.getMedStatus(medInfo))} />

                    <DefualtText numberOfLines={1} lineBreakMode="tail" style={styles(getStyleProps()).medStockText}>
                        {`Remédios: ${MedUtils.renderStock(medInfo)}`}
                    </DefualtText>
                </TouchableOpacity>
            </View>

            <View style={styles(getStyleProps()).buttonsContainer}>
                <View>
                    <If isTrue={medInfo.hasSound}>
                        <TouchableOpacity>
                            <BellFill width="32" height="32" rotation={-30} color={getButtonsIconsColor(MedUtils.getMedStatus(medInfo))} />
                        </TouchableOpacity>
                    </If>
                    <If isTrue={!medInfo.hasSound}>
                        <TouchableOpacity>
                            <Bell width="32" height="32" color={getButtonsIconsColor(MedUtils.getMedStatus(medInfo))} />
                        </TouchableOpacity>
                    </If>
                </View>

                <TouchableOpacity>
                    <Edit width="32" height="32" color={getButtonsIconsColor(MedUtils.getMedStatus(medInfo))} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default MedInfoCard;
