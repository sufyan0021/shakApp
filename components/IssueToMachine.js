import React,{useState} from 'react'
import {View,Text,TextInput,StyleSheet,Picker} from 'react-native'
import { RadioButton } from 'react-native-paper';
import { Button } from 'react-native-elements';
//import DropDownPicker from 'react-native-dropdown-picker'

const IssueToMachine = () =>{
    const [selectedValue, setSelectedValue] = useState("java");
    return(

        <View style={styles.container}>
            <View style={styles.innerView}>
                <Text>Input to Machine</Text>
            </View>
            <View style={styles.inputDiv}>
                <Text style={styles.inputText}>Machine</Text>
                <TextInput 
                style={styles.input}
                />
                <View></View>
            </View>
           
            <View style={styles.inputDiv}>
                <Text style={styles.inputText}>Production Type</Text>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
            </View>
            <View style={styles.inputDiv}>
                <Text style={styles.inputText}>Select Machine</Text>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
            </View>
            <View style={styles.inputDiv}>
            <RadioButton.Group>
                <Text style={styles.inputText}>Select Shift</Text>
                <RadioButton style={styles.inputText}></RadioButton>
                <Text style={styles.inputText}>Day</Text>
                <RadioButton style={styles.inputText}></RadioButton>
                <Text style={styles.inputText}>Night</Text>
            </RadioButton.Group>
            </View>
            <View style={styles.inputDiv}>
                <Text style={styles.inputText}>Select Spool</Text>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
            </View>
            <View style={styles.inputDiv}>
                <Text style={styles.inputText}>Bar Code</Text>
                <TextInput style={styles.input}></TextInput>
                <Button title="Scan" buttonStyle={styles.multiButtons}/>
            </View>
            <View style={styles.inputDiv}>
                <Text style={styles.inputText}>Input Code</Text>
                <TextInput style={styles.input}></TextInput>
            </View>
            <View style={styles.inputDiv}>
                <Text style={styles.inputText}>Product Details</Text>
                <TextInput style={styles.input}></TextInput>
            </View>
            <View style={styles.multiButtonContainer}>                        
                    <Button title="Save" buttonStyle={styles.multiButtons}/>
                    <Button title="Clear" buttonStyle={styles.multiButtons}/>
                    <Button title="Show" buttonStyle={styles.multiButtons}/>
                    <Button title="Detail" buttonStyle={styles.multiButtons}/>           
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
    inputDiv:{
        flexDirection:'row',
        paddingBottom:15,
        justifyContent:'space-evenly'
    },
    input: {
        flexGrow:2,
        width: 200,
        height: 24,
        borderWidth: 1,
        borderColor: '#777',
        marginBottom: 10,
        marginHorizontal:10, 
        borderTopWidth:0,
        borderRightWidth:0,
        borderLeftWidth:0
    },
    innerView:{
        paddingBottom:15
    },
    inputText:{
       marginHorizontal:10,
       flexGrow:1,
       alignSelf:'center'
    },
    multiButtonContainer:{
        flexDirection:'row'
    },
    multiButtons:{
        marginHorizontal:10,
        paddingHorizontal:20,
        borderRadius:5
    }
  });