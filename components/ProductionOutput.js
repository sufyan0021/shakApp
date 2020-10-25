import React from 'react';
import {View,StyleSheet,Text,TextInput,Button} from 'react-native';
import {RadioButton} from 'react-native-paper';

const ProductionOutput = () =>{

    return(
            <View style={styles.container}>
                <Text style={{fontWeight:'bold'}}>Production Output</Text>
                <View style={{flexDirection:'row'}}>
                    <Text>Machine</Text> 
                    <TextInput
                    placeholder =  'Machine Code'
                    style = {{borderStyle:'solid',borderWidth: 1}}
                    />           
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text>Select Shift</Text> 
                    <RadioButton                    
                    labelStyle={{paddingRight: 10}}
                    />            
                    <Text>Day</Text>
                    <RadioButton
                    labelStyle={{paddingRight: 10}}
                    />            
                    <Text>Night</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text>Select Spool</Text>
                    <TextInput
                    style = {{borderStyle:'solid',borderWidth: 1}}
                    />
                    <Button title = 'Refresh'/>
                </View>
                <View style={{flexDirection:'row'}}>
                    <TextInput 
                        style = {{borderStyle:'solid',borderWidth: 1}}
                    />
                    <Text>Select Completion Type</Text>
                    <TextInput
                    placeholder = 'Need Drop Down'
                    style = {{borderStyle:'solid',borderWidth: 1}}
                    />
                </View>
                <View>
                    <Text>Input Item</Text> 
                </View>
                <View style={{flexDirection:'row'}}>
                    <TextInput
                        style = {{borderStyle:'solid',borderWidth: 1}}
                    />
                    <Text>Select Complation Type</Text>
                    <TextInput
                        style = {{borderStyle:'solid',borderWidth: 1}}
                    />
                </View>
                <View>
                    <Text>Input Item</Text>                                        
                </View>
                <View style={{flexDirection:'row'}}>
                <Text>Output Details</Text>
                    <TextInput
                    style = {{borderStyle:'solid',borderWidth: 1}}
                    />                   
                    
                </View>
                <View style={{flexDirection:'row'}}>
                <Text>New Product if Needed</Text>
                    <TextInput
                        style = {{borderStyle:'solid',borderWidth: 1}}
                    />
                </View>
                <View style={{flexDirection:'row'}}>
                <Text>Out Barcode</Text>
                    <TextInput
                        style = {{borderStyle:'solid',borderWidth: 1}}
                    />                    
                    <Button title = 'Scan'/>
                </View>
                <View style={{flexDirection:'row'}}>
                <Text>Coil Weight</Text>
                    <TextInput
                        style = {{borderStyle:'solid',borderWidth: 1}}
                    />
                    <Button title = 'From Scale'/>
                </View>
                <View style={{flexDirection:'row'}}>
                <Text>Pieces</Text>
                    <TextInput
                    style = {{borderStyle:'solid',borderWidth: 1}}
                    />
                    <Button title = 'Resume'/>
                </View>
                <View style={{flexDirection:'row'}}>
                <Text>Sample Weight</Text>
                    <TextInput
                    style = {{borderStyle:'solid',borderWidth: 1}}
                    />
                    <Button title = 'Scan'/>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Button 
                    title= 'Save'   
                    style={{paddingRight: 20}}                  
                    />
                    <Button
                    title = 'Clear'  
                    style={{paddingRight: 20}}                   
                        />
                    <Button
                        title='Show'
                    />

                </View>

        </View>
       
    )
}

const styles = StyleSheet.create({
    container:{
                flex: 1,
                backgroundColor:'#fff',
                alignItems: 'center',
                justifyContent: 'center',
    },
    felxView:{
                flexDirection:'row',
                alignItems: 'center',
                justifyContent: 'center',
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
      }
});

export default ProductionOutput