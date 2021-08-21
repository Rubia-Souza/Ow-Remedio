import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import Colors from "../../shared/utils/AssetsReferences/Colors";

interface PlusProps extends SvgProps {
    width?: string;
    height?: string;
    color?: string;
}

const initialState: PlusProps = {
    width: "30",
    height: "30",
    color: Colors.black2E,
};

const Plus: React.FC<PlusProps> = (
    props: PlusProps
) => {
    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 32 32"
            fill="none"
            {...props}
        >
            <Path
                d="M15.444.069c-1.144.225-2.088 1.231-2.257 2.4-.037.256-.062 2.481-.062 5.381v4.944l-.162.168-.17.163H7.85c-2.9 0-5.125.025-5.381.063-1.55.218-2.669 1.718-2.419 3.23a2.878 2.878 0 002.419 2.395c.262.037 2.4.062 5.381.062h4.944l.168.163.163.168v4.944c0 2.9.025 5.125.063 5.381.218 1.544 1.718 2.669 3.225 2.419 1.256-.206 2.224-1.188 2.4-2.419.037-.256.062-2.481.062-5.381v-4.944l.163-.168.168-.163h4.944c2.981 0 5.119-.025 5.381-.063 1.556-.225 2.669-1.712 2.419-3.23a2.878 2.878 0 00-2.419-2.395c-.262-.037-2.4-.062-5.381-.062h-4.944l-.168-.162-.163-.17V7.85c0-2.981-.025-5.119-.063-5.381-.237-1.613-1.78-2.713-3.368-2.4z"
                fill={props.color}
            />
        </Svg>
    );
};

Plus.defaultProps = initialState;

export default Plus;
