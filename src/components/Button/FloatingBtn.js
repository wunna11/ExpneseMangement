import React from "react";
import { StyleSheet, Text, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { PRIMARY } from "../../utils/styles/color";

export const FloatingBtn = ({title, onPress}) => {
    return (
        <TouchableOpacity
            style={FloatingBtnStyle.btnStyle}
            onPress={() => {
                onPress()
            }}
        >
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

const FloatingBtnStyle = StyleSheet.create({
    btnStyle: {
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        backgroundColor: PRIMARY,
        elevation: 5,
        padding: 10
    }
})

