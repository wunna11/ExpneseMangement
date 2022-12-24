import react from "react";
import { StyleSheet, TextInput } from "react-native";
import { InputColor } from "../../utils/styles/color";

export const TextField = ({title, name, value, setValue, onChangeText}) => {
    return (
        <TextInput
            style={TextFieldStyle.inputStyle}
            placeholder={title}
            name={name}
            value={value}
            setValue={setValue}
            onChangeText={onChangeText}
        />
    )
}


const TextFieldStyle = StyleSheet.create({
    inputStyle: {
        height: 40,
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        backgroundColor: InputColor,
        marginBottom: 20
    }
})