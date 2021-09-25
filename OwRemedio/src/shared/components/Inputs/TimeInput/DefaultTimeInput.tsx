import React, { useState, } from "react";
import { 
    Platform,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import RNDateTimePicker, { 
    BaseProps,
} from "@react-native-community/datetimepicker";

import If from "../../If/If";
import DefaultText from "../../Text/DefaultText";
import Clock from "../../../../imgs/icons/Clock";

import Time, { 
    DefaultLocale,
} from "../../../dto/Time";
import { hasSetFunctionValue, } from "../../../utils/ComponentsFunctions";
import Colors from "../../../utils/AssetsReferences/Colors";

import styles, { 
    DefaultTimeInputElementStyles,
} from "./styles";

interface DefaultTimeInputProps extends BaseProps {
    label: string;
    value: any;
    initialTime?: Time;
    placeholder?: string; 
    onTimerOpen?: any;
    onTimerClose?: any;
    elementsStyles?: DefaultTimeInputElementStyles;
}

const defaultProps: DefaultTimeInputProps = {
    label: "",
    placeholder: "",
    value: new Time(0, 0).asDate(),
    initialTime: new Time(0, 0),
    onTimerOpen: undefined,
    onTimerClose: undefined,
    elementsStyles: {},
};

interface DefaultTimeInputState {
    time: Time;
    TimerIsOpen: boolean;
}

const initialState: DefaultTimeInputState = {
    TimerIsOpen: false,
    time: new Time(0, 0),
};

export const DefaultTimeInput: React.FC<DefaultTimeInputProps> = (
    props: DefaultTimeInputProps
) => {
    const [Time, setTime] = useState<Time>(initialState.time);
    const [TimerIsOpen, setTimerIsOpen] = useState<boolean>(initialState.TimerIsOpen);

    const handleDateTimeSet = (evt: Event, date?: Date) => {
        setTimerIsOpen(false);
        console.log(evt);
        console.log(date);
        
        if (!TimerIsOpen && hasSetFunctionValue(props.onTimerClose)){
            props.onTimerClose();
        }
    };

    const toggleCalendar = () => {
        setTimerIsOpen(!TimerIsOpen);

        if (TimerIsOpen && hasSetFunctionValue(props.onTimerOpen)){
            props.onTimerOpen();
        }
    };

    const renderAndroidDatePicker = () => {
        return (
            <View style={[styles.DateTimePickerContainer, props.elementsStyles?.TimeInputTextContainer]}>
                <TouchableOpacity onPress={toggleCalendar}>
                    <TextInput
                        editable={false}
                        style={[styles.FakeTimePicker, props.elementsStyles?.TimeDisplayText]}
                        placeholder={props.placeholder}
                        placeholderTextColor={Colors.gray9E}
                        value={Time.toString()}
                    />
                </TouchableOpacity>
                <If isTrue={TimerIsOpen}>
                    <RNDateTimePicker
                        placeholderText={props.placeholder}
                        {...props}
                        mode="time"
                        value={Time.asDate()}
                        locale={DefaultLocale}
                        onChange={handleDateTimeSet}
                        style={props.elementsStyles?.TimePicker}
                    />
                </If>
            </View>
        );
    };

    const renderIOsDatePicker = () => {
        return (
            <View style={[styles.DateTimePickerContainer, props.elementsStyles?.TimeInputTextContainer]}>  
                <RNDateTimePicker
                    placeholderText={props.placeholder}
                    {...props}
                    mode="time"
                    value={Time.asDate()}
                    locale={DefaultLocale}
                    onChange={handleDateTimeSet}
                    style={props.elementsStyles?.TimePicker}
                />
            </View>
        );
    };

    return (
        <View style={props.elementsStyles?.Container}>
            <DefaultText style={[styles.Label, props.elementsStyles?.Label]}>
                {props.label}
            </DefaultText>
            <View style={[styles.InputContainer, props.elementsStyles?.InputContainer]}>
                <If isTrue={Platform.OS === "android"}>
                    {renderAndroidDatePicker()}
                </If>
                <If isTrue={Platform.OS === "ios"}>
                    {renderIOsDatePicker()}
                </If>
                <Clock height="21" width="21" color={Colors.gray9E} />
            </View>
        </View>
    );
};

DefaultTimeInput.defaultProps = defaultProps;
