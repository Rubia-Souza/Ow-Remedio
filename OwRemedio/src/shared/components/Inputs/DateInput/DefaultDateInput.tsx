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
import Calendar from "../../../../imgs/icons/Calendar";

import { 
    DefaultDateOptions,
    DefaultLocale,
} from "../../../dto/Time";
import { hasSetFunctionValue, } from "../../../utils/ComponentsFunctions";
import Colors from "../../../utils/AssetsReferences/Colors";

import styles, { DateInputElementsStyles } from "./styles";

interface DefaultDateInputProps extends BaseProps {
    label: string;
    initialDate?: Date;
    placeholder?: string; 
    onCalendarOpen?: any;
    onCalendarClose?: any;
    elementsStyles?: DateInputElementsStyles;
}

const defaultProps: DefaultDateInputProps = {
    label: "",
    placeholder: "",
    value: new Date(),
    initialDate: new Date(),
    onCalendarOpen: undefined,
    onCalendarClose: undefined,
    elementsStyles: {},
};

interface DefaultDateInputState {
    date: Date;
    calendarIsOpen: boolean;
}

const initialState: DefaultDateInputState = {
    calendarIsOpen: false,
    date: new Date(),
};

export const DefaultDateInput: React.FC<DefaultDateInputProps> = (
    props: DefaultDateInputProps
) => {
    const [Date, setDate] = useState<Date>(initialState.date);
    const [CalendarIsOpen, setCalendarIsOpen] = useState<boolean>(initialState.calendarIsOpen);

    const handleDateTimeSet = (evt: Event, date?: Date) => {
        setCalendarIsOpen(false);
        
        if (!!date) {
            setDate(date);
        }
        
        if (!CalendarIsOpen && hasSetFunctionValue(props.onCalendarClose)){
            props.onCalendarClose();
        }
    };

    const toggleCalendar = () => {
        setCalendarIsOpen(!CalendarIsOpen);

        if (CalendarIsOpen && hasSetFunctionValue(props.onCalendarOpen)){
            props.onCalendarOpen();
        }
    };

    const renderAndroidDatePicker = () => {
        return (
            <View style={[styles.DateTimePickerContainer, props.elementsStyles?.DateInputTextConteiner]}>
                <TouchableOpacity onPress={toggleCalendar}>
                    <TextInput
                        editable={false}
                        placeholder={props.placeholder}
                        placeholderTextColor={Colors.gray9E}
                        value={Date.toLocaleDateString(DefaultLocale, DefaultDateOptions)}
                        style={[styles.FakeDatePicker, props.elementsStyles?.DateInputDisplayText]}
                    />
                </TouchableOpacity>
                <If isTrue={CalendarIsOpen}>
                    <RNDateTimePicker
                        locale={DefaultLocale}
                        placeholderText={props.placeholder}
                        {...props}
                        mode="date"
                        value={Date}
                        onChange={handleDateTimeSet}
                        style={props.elementsStyles?.TimePicker}
                    />
                </If>
            </View>
        );
    };

    const renderIOsDatePicker = () => {
        return (
            <View style={[styles.DateTimePickerContainer, props.elementsStyles?.DateInputTextConteiner]}>  
                <RNDateTimePicker
                    locale={DefaultLocale}
                    placeholderText={props.placeholder}
                    {...props}
                    mode="date"
                    value={Date}
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
            <View style={[styles.InputContainer, props.elementsStyles?.DateInputConteiner]}>
                <If isTrue={Platform.OS === "android"}>
                    {renderAndroidDatePicker()}
                </If>
                <If isTrue={Platform.OS === "ios"}>
                    {renderIOsDatePicker()}
                </If>
                <Calendar height="21" width="21" color={Colors.gray9E} />
            </View>
        </View>
    );
};

DefaultDateInput.defaultProps = defaultProps;
