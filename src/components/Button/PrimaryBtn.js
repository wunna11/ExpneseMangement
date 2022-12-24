import react from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { PRIMARY } from "../../utils/styles/color";


export const PrimaryBtn = ({title, onPress}) => {
    return (
        <TouchableOpacity
            style={PrimaryBtnStyle.btn}
            onPress={onPress}
        >
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

const PrimaryBtnStyle = StyleSheet.create({
    btn: {
        alignItems: "center",
        backgroundColor: PRIMARY,
        padding: 10,
        //marginTop: 20,
        marginBottom: 20
    }
})