import React from "react";

import MedCheckCard from "../../shared/components/MedCheckCard/MedCheckCard";
import MedInfoCard from "../../shared/components/MedInfoCard/MedInfoCard";

import Med from "../../shared/dto/Med";
import { Med1 } from "../../shared/mocks/MockMed";

const med: Med = Med1;

interface TodayMedsProps {

}

const TodayMeds: React.FC<TodayMedsProps> = ({

}) => {
    return (
        <React.Fragment>
            <MedCheckCard medInfo={med} />
            <MedInfoCard medInfo={med} />
        </React.Fragment>
    );
}

export default TodayMeds;
