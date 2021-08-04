import React from "react";

interface IfProps {
    isTrue: boolean;
    children: any;
}

const If: React.FC<IfProps> = ({
    isTrue = false,
    children,
}) => {
    if(isTrue){
        return children;
    }

    return null;
};

export default If;
