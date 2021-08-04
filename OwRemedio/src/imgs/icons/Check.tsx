import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import Colors from "../../shared/utils/AssetsReferences/Colors";

interface CheckProps extends SvgProps {
    width?: string;
    heigth?: string;
    color?: string;
}

const Check: React.FC<CheckProps> = ({
    width = 512,
    heigth = 512,
    color = Colors.black2E,
}) => {
    return (
        <Svg
            width={width}
            height={heigth}
            viewBox="0 0 21 21"
            fill="none"
        >
            <Path
                d="M18.129 2.838c-.115.029-1.157 1.054-5.07 4.96l-4.926 4.921-2.514-2.543c-1.73-1.751-2.572-2.572-2.686-2.63a.842.842 0 00-.669-.02C2.059 7.613.184 9.475.078 9.7a.766.766 0 000 .657c.102.233 7.506 7.674 7.735 7.776.21.099.448.099.657 0 .233-.11 12.378-12.268 12.469-12.481a.778.778 0 00-.017-.628c-.107-.225-1.981-2.087-2.186-2.173a.952.952 0 00-.607-.013z"
                fill={color}
            />
        </Svg>
    );
};

export default Check;
