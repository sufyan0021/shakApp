import React,{Component} from 'react';
import { render } from 'react-dom';
import {View,Text,TextInput,StyleSheet,Button} from 'react-native';

export default class OpeningInventory extends Component{
    render(){

        return(
            <View>
                <Text>Make GRN First for Existing Materials</Text>
                <View style = {styles.innerDiv}>
                    <Text>Barcode</Text>
                    <TextInput placeholder = 'Barcode'
                    style = {{borderWidth:1}}
                    />
                    <Button title='Scan'/>
                </View>
                <View style = {styles.innerDiv}>
                <Text>Supplier Barecode</Text>
                    <TextInput placeholder = 'NA'
                    style = {{borderWidth:1}}
                    />
                </View>
                <View style = {styles.innerDiv}>
                <Text>Location</Text>
                    <TextInput placeholder = 'Location'
                    style = {{borderWidth:1}}
                    />
                </View>
                <View style = {styles.innerDiv}>
                <Text>Item Code</Text>
                    <TextInput placeholder = 'Item Code'
                    style = {{borderWidth:1}}
                    />
                </View>
                <View>                
                    <TextInput placeholder = 'Item Description'
                    style = {{borderWidth:1}}
                    />
                </View>
                <View style = {styles.innerDiv}>
                <Text>Unit Weight</Text>
                    <TextInput placeholder = 'Ton'
                    style = {{borderWidth:1}}
                    />
                </View>
                <View style = {styles.innerDiv}>
                <Text>Pieces</Text>
                    <TextInput placeholder = 'Pieces'
                    style = {{borderWidth:1}}
                    />
                </View>
                <View style = {styles.innerDiv}>
                    <Button title= 'Save'/>
                    <Button title= 'Update'/>
                    <Button title= 'Clear'/>
                </View>
                <View style = {styles.innerDiv}>
                <Text>Date From</Text>
                    <TextInput placeholder = 'Date From'
                    style = {{borderWidth:1}}
                    />
                </View>
                <View style = {styles.innerDiv}>
                <Text>Date To</Text>
                    <TextInput placeholder = 'Date To'
                    style = {{borderWidth:1}}
                    />
                </View>
                <View style = {styles.innerDiv}>
                    <Button title= 'Export'/>
                    <Button title= 'Logout'/>                    
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
        justifyContent:'space-between'
    }
  });
  