import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import Colors from "../../shared/utils/AssetsReferences/Colors";

interface ArrowProps extends SvgProps {
    width?: string;
    heigth?: string;
    color?: string;
}

const Arrow: React.FC<ArrowProps> = ({
    width = 512,
    heigth = 512,
    color = Colors.black2E,
}) => {
    return (
        <Svg
            width={width}
            height={heigth}
            viewBox="0 0 15 15"
            fill="none"
        >
            <Path
                d="M.05 4.395c.038.114.492.58 3.536 3.626 3.202 3.208 3.5 3.498 3.644 3.551a.69.69 0 00.54 0c.143-.052.442-.342 3.644-3.55 3.34-3.343 3.495-3.501 3.542-3.654a.756.756 0 00-1.031-.923c-.074.033-1.166 1.105-3.267 3.202L7.5 9.8 4.345 6.647c-2.06-2.053-3.197-3.17-3.267-3.202a.76.76 0 00-1.028.95z"
                fill={color}
            />
        </Svg>
    );
};

export default Arrow;
