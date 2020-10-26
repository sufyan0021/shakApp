import React,{useState} from 'react';
import {View,Text,TouchableOpacity,TextInput,StyleSheet,Picker} from 'react-native';
import { Button } from 'react-native-elements';
import RadioGroup from 'react-native-radio-buttons-group';

const SearchItem = () =>{
    const [selectedValue, setSelectedValue] = useState("java");
    const [data,setData] = useState([
        {
          label: 'Used',
          value:'Used'
         },
         {
          label: 'Not Used',
          value:'Not Used'
         },
         {
            label: 'All',
            value:'All'
           }
        ]);
       const  onRadioButtonSelect = data => setData({data});
    return(

        <View>
            <Text>Search Any Item</Text>
            <View style={styles.inputDiv}>
                <Text style={styles.inputText}>Is Used?</Text>
                <RadioGroup radioButtons={data} onPress={onRadioButtonSelect} flexDirection='row' />
            </View>
            <View style={styles.inputDiv}>
                <Text style={styles.inputText}>Supplier Barcode</Text>
                <TextInput 
                placeholder= 'Supplier Barcode'
                style={styles.input}
                />
                <Button title = 'Show'/>
            </View>

            <View style={styles.inputDiv}>
                <Text style={styles.inputText}>Location</Text>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
                <Button title = 'Show'/>
            </View>
            <View style={styles.inputDiv}>
                <Text style={styles.inputText}>Item Code</Text>
                <TextInput 
                placeholder= 'Item Code'
                style={styles.input}
                />
                <Button title = 'Show'/>
            </View>
            <View><Text style={{fontWeight:'bold',paddingVertical:15}}>Show By Location and Item</Text></View>

            <View style={styles.inputDiv}>
                <Text style={styles.inputText}>Internal Barcode</Text>
                <TextInput 
                placeholder= 'Internal Barcode'
                style={styles.input}
                />
                <Button title = 'Show'/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
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
    inputText:{
        marginHorizontal:10,
        flexGrow:1,
        alignSelf:'center'
     }
})

export default SearchItem