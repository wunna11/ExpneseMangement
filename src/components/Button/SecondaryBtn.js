import react from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { PRIMARY } from "../../utils/styles/color";


export const SecondaryBtn = ({title, onPress
}) => {
    return (
        <TouchableOpacity
            style={SecondaryBtnStyle.btn}
            onPress={() => onPress()}
        >
            <Text style={SecondaryBtnStyle.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const SecondaryBtnStyle = StyleSheet.create({
    btn: {
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 10,
  },
  
  text: {
    color: PRIMARY
  } 
})