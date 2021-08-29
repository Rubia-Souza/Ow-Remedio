import React from "react";
import { 
    FlatList, 
    View,
} from "react-native";
import { useSelector } from "react-redux";

import HappyPills from "../../imgs/icons/HappyPills";
import If from "../../shared/components/If/If";

import MedCheckCard from "../../shared/components/MedCheckCard/MedCheckCard";
import DefualtText from "../../shared/components/Text/DefaultText";

import Med from "../../shared/dto/Med/Med";
import Colors from "../../shared/utils/AssetsReferences/Colors";
import { RootState } from "../../store/Reducers";
import styles from "./styles";

interface TodayMedsProps {}

const TodayMeds: React.FC<TodayMedsProps> = ({}) => {
    const medsList: Med[] = useSelector((state: RootState) => state.MedListReducer.medList);
    
    const renderMedCheckCard = (medData: Med) => {
        return (
            <View style={styles.MedCheckCardContainer}>
                <MedCheckCard medInfo={medData} />
            </View>
        );
    };

    return (
        <React.Fragment>
            <If isTrue={medsList.length > 0}>
                <FlatList 
                    data={medsList} 
                    keyExtractor={(med: Med) => med.id}
                    renderItem={
                        ({item: med}) => renderMedCheckCard(med)
                    }
                />
            </If>
            <If isTrue={medsList.length === 0}>
                <View style={styles.NoMedsContainer}>
                    <HappyPills width="258" height="258" color={Colors.grayDA} />
                    <DefualtText style={styles.AllMedsTakenText}>
                        {">.<"} Você não tem nenhum remédio para hoje ^.^
                    </DefualtText>
                </View>
            </If>
        </React.Fragment>
    );
};

export default TodayMeds;
