/// <reference types="react" />

declare module 'react-native-picker-select' {
    export interface Item<T = any> {
        label: string;
        value: T;
        key?: string | number;
        color?: string;
    }
    export interface PickerProps<T = any> {
        onValueChange: (value: T, index: number) => void;
        items: Item<T>[];
        value?: T;
        placeholder?: Item<T> | {};
        disabled?: boolean;
        itemKey?: string | number;
        style?: object;
        children?: any;
        placeholderTextColor?: string;
        useNativeAndroidPickerStyle?: boolean;
        hideDoneBar?: boolean;
        doneText?: string;
        onDonePress?: () => void;
        onUpArrow?: () => void;
        onDownArrow?: () => void;
        onOpen?: () => void;
        onClose?: () => void;
        modalProps?: object;
        textInputProps?: object;
        pickerProps?: object;
        Icon?: React.ReactNode;
    }
    class Picker<T = any> extends React.Component<PickerProps<T>> { }
    export default Picker;
}
