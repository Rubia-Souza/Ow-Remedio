import React from "react";
import { 
    TouchableOpacity,
    View, 
} from "react-native";

import Bell from "../../../imgs/icons/Bell";
import BellFill from "../../../imgs/icons/BellFill";
import Edit from "../../../imgs/icons/Edit";

import If from "../If/If";
import DefualtText from "../Text/DefaultText";

import Med, { MedUtils } from "../../dto/Med";
import styles from "./styles";
import CirclePlus from "../../../imgs/icons/CirclePlus";
import Exclamation from "../../../imgs/icons/Exclamation";
import Colors from "../../utils/AssetsReferences/Colors";
import Check from "../../../imgs/icons/Check";

interface MedInfoCardProps {
    medInfo: Med;
}

const MedInfoCard: React.FC<MedInfoCardProps> = ({
    medInfo,
}) => {
    return (
        <View style={styles.container}>

            <View style={styles.textsContainer}>
                <View style={styles.medName}>
                    <DefualtText style={styles.medNameText}>
                        {medInfo.name}
                    </DefualtText>

                    <If isTrue={MedUtils.isInLowStock(medInfo)}>
                        <View style={styles.exclamationContainer}>
                            <Exclamation width="18" height="18" color={Colors.brightRed} />
                        </View>
                    </If>

                    <If isTrue={MedUtils.hasReachFinalDate(medInfo)}>
                        <View style={styles.checkContainer}>
                            <Check width="18" height="18" color={Colors.brightGreen} />
                        </View>
                    </If>
                </View>

                <DefualtText style={styles.medTime}>
                    {`às: ${MedUtils.renderTime(medInfo)}`}
                </DefualtText>

                <TouchableOpacity style={styles.stock}>
                    <CirclePlus width="24" height="24" />

                    <DefualtText style={styles.medStockText}>
                        {`Remédios: ${MedUtils.renderStock(medInfo)}`}
                    </DefualtText>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonsContainer}>
                <View>
                    <If isTrue={medInfo.hasSound}>
                        <TouchableOpacity>
                            <BellFill width="32" height="32" />
                        </TouchableOpacity>
                    </If>
                    <If isTrue={!medInfo.hasSound}>
                        <TouchableOpacity>
                            <Bell width="32" height="32" />
                        </TouchableOpacity>
                    </If>
                </View>

                <TouchableOpacity>
                    <Edit width="32" height="32" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default MedInfoCard;
