import React, { Component } from 'react';
import {View,Text,TouchableOpacity,TextInput,StyleSheet,Button} from 'react-native';
import {RadioButton} from 'react-native-paper'



export default class MultyIn extends Component{
        
    render(){
            return(
                <View>
                    <Text style={{fontWeight:'bold'}}>Multiple Input Raw Material </Text>

                    <View>
                        <Text>Machine</Text>
                        <TextInput placeholder='Machine Code'/>                
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <RadioButton key='1' /><Text>Day</Text>
                        <RadioButton key='2' /><Text>Night</Text>
                    </View>
                    <View><Button title='Show'/></View>

                </View>				
        )
    }
}
const styles = StyleSheet.create({
	container: {
        marginBottom: 35,
        alignItems: 'center',
        flexDirection: 'row',
		justifyContent: 'space-between',
	},
    radioText: {
        marginRight: 35,
        fontSize: 20,
        color: '#000',
        fontWeight: '700'
    },
	radioCircle: {
		height: 30,
		width: 30,
		borderRadius: 100,
		borderWidth: 2,
		borderColor: '#3740ff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	selectedRb: {
		width: 15,
		height: 15,
		borderRadius: 50,
		backgroundColor: '#3740ff',
    },
    result: {
        marginTop: 20,
        color: 'white',
        fontWeight: '600',
        backgroundColor: '#F3FBFE',
    },
});