import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import Colors from "../../shared/utils/AssetsReferences/Colors";

interface PillFillProps extends SvgProps {
    width?: string;
    height?: string;
    color?: string;
}

const initialState: PillFillProps = {
    width: "30",
    height: "30",
    color: Colors.black2E,
};

const PillFill: React.FC<PillFillProps> = (
    props: PillFillProps
) => {
    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 30 30"
            fill="none"
            {...props}
        >
            <Path
                d="M20.086.064c-1.488.176-3 .786-4.266 1.729-.65.48-13.675 13.518-14.103 14.115a8.61 8.61 0 00-1.43 3.07 8.752 8.752 0 00.54 5.854c1.804 3.885 6.064 5.924 10.2 4.88a8.63 8.63 0 003.065-1.429c.598-.428 13.635-13.453 14.115-14.103a8.454 8.454 0 001.506-3.159 8.751 8.751 0 00-.54-5.853A8.88 8.88 0 0020.087.064zm2.56 2.854c2.239.615 3.891 2.291 4.46 4.523.163.657.152 2.309-.024 2.942a6.358 6.358 0 01-.844 1.875c-.304.463-.802.99-3.38 3.58l-3.018 3.035-4.354-4.354-4.353-4.353 2.625-2.625c1.441-1.447 2.865-2.854 3.17-3.123.92-.832 1.828-1.313 2.935-1.553.668-.146 2.162-.117 2.784.053zM9.492 12.656c.2.14.317.451.258.68-.03.117-.762.896-2.338 2.484-1.816 1.84-2.35 2.409-2.566 2.76-.463.744-.645 1.3-.739 2.262-.076.738-.246.955-.744.955-.164 0-.258-.047-.416-.205l-.21-.211.034-.656c.053-1.096.358-2.016.99-2.983.3-.445.75-.931 2.503-2.707 1.177-1.19 2.25-2.238 2.373-2.326.281-.205.61-.229.855-.053z"
                fill={props.color}
            />
        </Svg>
    );
};

PillFill.defaultProps = initialState;

export default PillFill;
