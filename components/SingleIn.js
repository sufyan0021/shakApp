import React,{Component} from 'react'
import {View,Text,TextInput,Button,StyleSheet} from 'react-native'

export default class SingleIn extends Component{
    render(){
        return(
                <View>
                    <Text>Input to Machine (Single Entry)</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text>Barcode</Text>
                        <TextInput placeholder= 'Barcode'  style={{borderWidth:1}}/>
                        <Button title = 'Scan'/>
                    </View>
                    <View>
                        <Text placeholder = 'Item Detail'  style={{borderWidth:1}}/>
                    </View>
                    <View>
                        <Text>Output Item Detail</Text>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <TextInput placeholder='output Item Code'
                             style={{borderWidth:1}}/>
                            <TextInput placeholder='output Item Description'
                              style={{borderWidth:1}}/>
                        </View>   
                        <Button title = 'Save'/>                      
                    </View>
                    
                </View>
        )
    }
}
