import React from "react";
import { FlatList, View } from "react-native";
import { useSelector } from "react-redux";

import MedCheckCard from "../../shared/components/MedCheckCard/MedCheckCard";

import Med from "../../shared/dto/Med/Med";
import { RootState } from "../../store/Reducers";
import sytles from "./styles";

interface TodayMedsProps {}

const TodayMeds: React.FC<TodayMedsProps> = ({}) => {
    const medsList: Med[] = useSelector((state: RootState) => state.MedListReducer.medList);
    
    const renderMedCheckCard = (medData: Med) => {
        return (
            <View style={sytles.MedCheckCardContainer}>
                <MedCheckCard medInfo={medData} />
            </View>
        );
    };

    return (
        <FlatList 
            data={medsList} 
            keyExtractor={(med: Med) => med.name}
            renderItem={
                ({item: med}) => renderMedCheckCard(med)
            }
        />
    );
};

export default TodayMeds;
