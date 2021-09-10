import React from "react";
import {
    SafeAreaView, View,
} from "react-native";
import DefualtText from "../../shared/components/Text/DefaultText";
import styles from "./styles";

interface AddEditMedProps {

}

const AddEditMed: React.FC<AddEditMedProps> = ({

}) => {
    return (
        <SafeAreaView style={styles.Background}>
            <View style={styles.FormGroup}>
                <View style={styles.TitleGroup}>
                    <DefualtText style={styles.TitleNumber}>
                        1
                    </DefualtText>
                    <DefualtText style={styles.Title}>
                        Remédio
                    </DefualtText>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default AddEditMed;
