import React,{Component} from 'react'
import {View,Text,TextInput,StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';

export default class SingleIn extends Component{
    render(){
        return(
                <View style={styles.container}>
                    <Text>Input to Machine (Single Entry)</Text>
                    <View style={styles.inputDiv}>
                        <Text>Barcode</Text>
                        <TextInput placeholder= 'Barcode'  style={styles.input}/>
                        <Button title = 'Scan'/>
                    </View>
                    <View style={styles.inputDiv}>
                        <Text placeholder = 'Item Detail' style={styles.input}/>
                    </View>
                    <View>
                        <Text>Product Detail</Text>
                        <View style={styles.inputDiv}>
                            <TextInput placeholder='Output Item Code'
                             style={styles.input}/>
                            <TextInput placeholder='Output Item Description'
                              style={styles.input}/>
                        </View>   
                        <Button title = 'Save'/>                      
                    </View>
                    
                </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexWrap:'wrap',
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:10
    },
    inputDiv:{
        marginVertical:15,
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

