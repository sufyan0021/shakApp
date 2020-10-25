import React from 'react'
import {View,Text,TextInput,StyleSheet,Button} from 'react-native'
import { RadioButton } from 'react-native-paper'
//import DropDownPicker from 'react-native-dropdown-picker'

const IssueToMachine = () =>{
    return(

        <View style={styles.container}>
            <View style={styles.innerView}>
                <Text>Input to Machine</Text>
            </View>
            <View style={{flexDirection:'row',paddingBottom:15}}>
                <Text>Machine</Text>
                <TextInput 
                style={styles.input}
                />
            </View>
           
            <View style={{flexDirection:'row',paddingBottom:15}}>
                <Text >Production Type</Text>
                <Text> need DropDownPicker </Text>
            </View>
            <View style={{flexDirection:'row',paddingBottom:15}}>
                <Text >Select Machine</Text>
                <Text>need DropDownPicker</Text>
            </View>
            <View style={{flexDirection:'row',paddingBottom:15}}>
                <Text>Select Shift</Text>
                <RadioButton></RadioButton>
                <Text>Day</Text>
                <RadioButton></RadioButton>
                <Text>Night</Text>
            </View>
            <View style={{flexDirection:'row',paddingBottom:15}}>
                <Text >Select Spool</Text>
                <Text>need DropDownPicker</Text>
            </View>
            <View style={{flexDirection:'row',paddingBottom:15}}>
                <Text >Bar Code</Text>
                <TextInput></TextInput>
                <Button title='Scan'/>
            </View>
            <View style={{flexDirection:'row',paddingBottom:15}}>
                <Text>Input Code</Text>
                <TextInput></TextInput>
            </View>
            <View style={{flexDirection:'row',paddingBottom:15}}>
                <Text>Output Code</Text>
                <TextInput ></TextInput>
            </View>

        </View>
    )
}
export default IssueToMachine

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ff7',
      alignItems: 'center',
      justifyContent: 'center',
      width:'100%'
  
    },
    input: {
        width: 200,
        height: 24,
        padding: 10,
        borderWidth: 1,
        borderColor: '#777',
        marginBottom: 10,        
    },
    innerView:{
        paddingBottom:15
    }
  });