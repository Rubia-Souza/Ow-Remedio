import React from "react";
import { FlatList, View } from "react-native";
import { useSelector } from "react-redux";
import MedInfoCard from "../../shared/components/MedInfoCard/MedInfoCard";

import Med from "../../shared/dto/Med";
import { RootState } from "../../store/Reducers";
import styles from "./styles";

interface MedsListProps {}

const MedsList: React.FC<MedsListProps> = ({}) => {
    const medList: Med[] = useSelector((state: RootState) => state.MedListReducer.medList);

    const renderMedInfoCard = (medData: Med) => {
        return (
            <View style={styles.MedInfoCardContainer}>
                <MedInfoCard medInfo={medData} />
            </View>
        );
    };

    return (
        <View>
            <FlatList 
                data={medList}
                keyExtractor={(medData: Med) => medData.id}
                renderItem={
                    ({item: medData}) => renderMedInfoCard(medData)
                }
            />
        </View>
    );
};

export default MedsList;
