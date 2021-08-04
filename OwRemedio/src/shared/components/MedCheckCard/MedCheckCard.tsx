import React from "react";
import {
    View,
} from "react-native";
import Med from "../../dto/Med";

import RadioButton from "../RadioButton/RadioButton";
import DefaultText from "../Text/DefaultText";

interface MedCheckCardProps {
    medInfo: Med;
}

const MedCheckCard: React.FC<MedCheckCardProps> = ({
    medInfo,
}) => {
    const renderTime = (): string => {
        return `${medInfo.time.getHours()}:${medInfo.time.getMinutes()}`;
    };

    const renderStock = (): string => {
        return `${medInfo.actualStock}/${medInfo.maxStock}`;
    };

    return (
        <View>
            <RadioButton>
                <View>
                    <DefaultText>
                        { medInfo.name }
                    </DefaultText>
                    <DefaultText>
                        {`Horário: ${renderTime()} - ${renderStock()}`}
                    </DefaultText>
                </View>
            </RadioButton>
        </View>
    );
};

export default MedCheckCard;
