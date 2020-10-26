import React, { Component } from 'react';
import {View,Button,Text,TextInput,StyleSheet} from 'react-native';
import {RadioButton} from 'react-native-paper'

export default class MultyOut extends Component{
    render(){

        return(
            <View>
                <Text style={{fontWeight:'bold',padding:10}}>Output from Machine</Text>
                <View style = {styles.innerDiv}>
                    <Text>Machine</Text>
                    <TextInput placeholder = 'Machine'
                    style = {{borderWidth:1}}
                    />
                    <Button title = 'Scan'/>
                </View>
                <View style = {styles.innerDiv}>
                    <Text>Shift</Text>
                    <RadioButton></RadioButton><Text>Day</Text>
                    <RadioButton></RadioButton><Text>Night</Text>
                </View>
                <View style = {styles.innerDiv}>
                    <Text>Select Spool</Text>
                    <TextInput placeholder='Spool'/>
                    <Button title = 'Refresh'/>
                </View>
                <View>
                    <Text>Production Detail</Text>                    
                </View>
                <View style = {styles.innerDiv}>
                    <TextInput placeholder='Item Code'
                    style = {{borderWidth:1}}
                    />
                    <TextInput placeholder = 'Item Description'
                    style = {{borderWidth:1}}
                    />
                </View>
                <View>
                    <Text>New product if needed</Text>
                </View>
                <View style = {styles.innerDiv}>
                    <TextInput placeholder = 'Item Code'
                    style = {{borderWidth:1}}
                    />
                    <TextInput placeholder = 'Item Detail'
                    style = {{borderWidth:1}}
                    />
                </View>
                <View style = {styles.innerDiv}>
                    <Text>Out Barcode</Text>
                    <TextInput placeholder = 'Output Barcode'/>                    
                    <Button title='Scan'/>
                </View>
                <View style = {styles.innerDiv}>
                    <Text>Coil Weight</Text>
                    <TextInput placeholder = 'Coil Weight'
                    style = {{borderWidth:1}}
                    />
                    <Button title='From Scale'/>
                </View>
                <View style = {styles.innerDiv}>
                    <Text>Piece</Text>
                    <TextInput placeholder = 'Peice'
                    style = {{borderWidth:1}}
                    />
                    <Button title='Resume'/>
                </View>
                <View style = {styles.innerDiv}>
                    <Text>Sample Weight</Text>
                    <TextInput placeholder = 'Sample Weight'
                    style = {{borderWidth:1}}
                    />                    
                </View>
                <View style = {styles.buttonDiv}>
                    <Button title='Save'/>
                    <Button title='Clear'/>
                    <Button title='Show'/>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  
    },
    innerDiv:{
        flexDirection:'row', 
        alignItems:'center',
        padding:5,
        justifyContent:'flex-start'      
    },
    inputFormat:{
            borderStyle:'solid',
            borderWidth: 1
    },
    buttonDiv:{
        flexDirection:'row',
        justifyContent:'space-between'
    }
  });