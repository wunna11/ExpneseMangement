import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from "../screens/user/Detail/DetailScreen";
import HomeScreen from "../screens/user/Home/HomeScreen";
import CreateExpense from "../screens/user/Expense/CreateExpense/CreateExpense";


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Create" component={CreateExpense} />
            <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
    )
    
}


export default StackNavigator