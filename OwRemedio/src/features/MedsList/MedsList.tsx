import React from "react";
import { 
    FlatList, 
    View,
} from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../store/Reducers";

import styles from "./styles";

import { AddButton, } from "../../shared/components/Buttons";
import MedInfoCard from "../../shared/components/MedInfoCard/MedInfoCard";
import If from "../../shared/components/If/If";
import DefualtTitle from "../../shared/components/Title/DefaultTitle";
import DefualtText from "../../shared/components/Text/DefaultText";
import SurprisedPills from "../../imgs/icons/SurprisedPills";

import Med from "../../shared/dto/Med";

import Colors from "../../shared/utils/AssetsReferences/Colors";

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
        <React.Fragment>
            <If isTrue={medList.length !== 0}>
                <View>
                    <FlatList 
                        data={medList}
                        keyExtractor={(medData: Med) => medData.id}
                        renderItem={
                            ({item: medData}) => renderMedInfoCard(medData)
                        }
                    />
                </View>
            </If>
            <If isTrue={medList.length === 0}>
                <View style={styles.NoMedsContainer}>
                    <SurprisedPills width="258" height="258" color={Colors.grayDA} />
                    <DefualtTitle style={styles.NoMedsTitleText}>
                        Você não tem nenhum remédio cadastrado! O_O
                    </DefualtTitle>
                    <DefualtText style={styles.NoMedsDirectionsText}>
                        Pressione o mais para adicionar
                    </DefualtText>
                </View>
            </If>

            <View style={styles.AddButtonContainer}>
                <AddButton onClick={handleAddButtonClick} />
            </View>
        </React.Fragment>
    );
};

export default MedsList;
