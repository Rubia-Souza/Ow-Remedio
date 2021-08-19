import React from "react";
import { FlatList, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../store/Reducers";

import AddButton from "../../shared/components/AddButton/AddButton";
import MedInfoCard from "../../shared/components/MedInfoCard/MedInfoCard";

import Med from "../../shared/dto/Med";

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

    const handleAddButtonClick = () => {

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

            <View style={styles.AddButtonContainer}>
                <AddButton onClick={handleAddButtonClick} />
            </View>
        </View>
    );
};

export default MedsList;
