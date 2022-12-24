import { StyleSheet, Text, View , Button, Touchable, TouchableOpacity, Platform, Switch} from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextField } from '../../../../components/Input/TextField'
import { PrimaryBtn } from '../../../../components/Button/PrimaryBtn'
import { SecondaryBtn } from '../../../../components/Button/SecondaryBtn'
import { CreateExpenseStyle } from './CreateExpenseStyle'

import { firebase } from '../../../../../config'
import { SelectList } from 'react-native-dropdown-select-list'
import moment from 'moment/moment'
import DateTimePickerModal from "react-native-modal-datetime-picker";



const CreateExpense = ({ navigation }) => {
    
    // Firebase
    const expenseDataRef = firebase.firestore().collection("expenses");
    
    // Input Data
    const [expense, setExpense] = useState([]);
    const [title, setTitle] = useState();
    const [amount, setAmount] = useState();
    const [date, setDate] = useState('')
    const [type, setType] = useState('')
    const category = [
        { key: 1, value: "Food", disabled: true },
        { key: 2, value: "Cloth" },
        { key: 3, value: "Drink" },
        { key: 4, value: "Travel" },
        { key: 5, value: "Other" },
    ] 

    const [selected, setSelected] = useState();
    const [isEnabled, setIsEnabled] = useState(false);
    
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
      };
    
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setDate(date)
        console.warn("A date has been picked: ", res);
        hideDatePicker();
    };
   

    // generate id
    const getCustomExpenseId = (timestamp) => {
        var currentDate = moment(timestamp)
          .utcOffset("+06:30")
          .format("YYMMDDhhmmss");
        var filename = "Exp" + currentDate;
        return filename;
      };

    // Create Expense
    const timestamp = firebase.firestore.FieldValue.serverTimestamp();
    const serverTime = firebase.firestore.Timestamp.now().toDate();
    const expenseId = getCustomExpenseId(serverTime)

    const create = () => {
        expenseDataRef
            .doc(expenseId)
            .set({
                title: title,
                amount: amount,
                category: selected,
                type: type,
                date: date,
                createdAt: timestamp,
                updatedAt: timestamp
            })
            .catch((error) => {
                console.log("error", error);
            })
    }
    

    return (
        <View>
            <View style={CreateExpenseStyle.form}>
                <TextField title="Title" onChangeText={text => setTitle(text)} value={title} />

                <TextField title="Amount" onChangeText={number => setAmount(number)} value={amount} />

                <View style={{flexDirection: 'row'}}>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={(text) => setType(text) }
                        value={type}
                    />
                    <Text style={CreateExpenseStyle.switchText}>{ type ? 'Income' : 'Expense'}</Text>
                </View>
                
                
                
                <View style={CreateExpenseStyle.selectBox}>
                    <SelectList 
                        setSelected={(selected) => {
                            setSelected(selected)
                        }} 
                        data={category} 
                        save="value"
                    />
                </View>
                

                <View style={CreateExpenseStyle.btn}>
                    <Button title="Show Date Picker" onPress={showDatePicker} />
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                    />
                </View>
             
                <Text style={date.toString().length == 0 ? {} : CreateExpenseStyle.text}>{ date.toString() }</Text>
            
                <PrimaryBtn title='Create' onPress={() => create()}/>

                <SecondaryBtn title='Back' onPress={() => navigation.navigate('Home')} />
            </View>
        </View> 
    )
}

export default CreateExpense
