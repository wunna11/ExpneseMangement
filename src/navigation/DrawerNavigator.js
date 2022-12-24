import react from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StackNavigator from "./StackNavigator";
import AnalysisScreen from "../screens/user/Analysis/AnalysisScreen";
import TaxScreen from "../screens/user/Tax/TaxScreen";


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={StackNavigator} />
            <Drawer.Screen name="Analysis" component={AnalysisScreen} />
            <Drawer.Screen name="Tax" component={TaxScreen} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator