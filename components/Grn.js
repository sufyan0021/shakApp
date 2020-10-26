import React from 'react';
import {View,Text,TextInput,Button,StyleSheet} from 'react-native';
import MyDatePicker from '../components/Utility/MyDatePicker';
import FlatButton from '../components/Utility/Button';
//import Format from './Format';

const Grn = ()=> {
        return (
            <View style={styles.container}>
                <View style={styles.inputDiv}>  
                    <Text style={styles.inputText}>Date:</Text>
                    <MyDatePicker/>       
                </View>
                <View style={styles.inputDiv}>  
                    <Text style={styles.inputText}>Trailer No.:</Text>
                    <TextInput style={styles.inputBorder}></TextInput>
                    <FlatButton text='Show'/>
                </View>
                <View style={styles.inputDiv}>  
                    <Text style={styles.inputText}>Supplier:</Text>
                    <TextInput style={styles.inputBorder}></TextInput>
                    <FlatButton text='Export'/>
                </View>
               <View style={styles.inputDiv}>  
                    <Text style={styles.inputText}>Item Code</Text>
                    <TextInput style={styles.inputBorder}></TextInput>
                    <View style={styles.item}></View>
                </View>
                <View style={styles.inputDiv}>  
                    <Text style={styles.inputText}>Coil Weight</Text>
                    <TextInput style={styles.inputBorder}></TextInput>
                    <View style={styles.item}></View>
                </View>
                <View style={styles.inputDiv}>    
                    <Text style={styles.inputText}>Supplier Barcode</Text>
                    <TextInput style={styles.inputBorder}></TextInput>
                    <View style={styles.item}></View>
                </View>
                <View style={styles.inputDiv}>  
                    <Text style={styles.inputText}>Pieces</Text>
                    <TextInput  style={styles.inputBorder}></TextInput>
                    <View style={styles.item}></View>
                </View>
                <View style={styles.inputDiv}>  
                    <Text style={styles.inputText}>Barcode</Text>
                    <TextInput style={styles.inputBorder}></TextInput>
                    <View style={styles.item}></View>
                </View>
               
                <View style={styles.inputDiv}>
                    <Text style={styles.inputText}>Location</Text>
                    <TextInput style={styles.inputBorder}></TextInput>
                    <View style={styles.item}></View>
                </View>
                <View style={styles.inputDiv}>
                    <Text style={styles.inputText,{fontWeight:'bold'}}>Goods Type</Text>
                    <TextInput style={styles.inputBorder}></TextInput>
                    <View style={styles.item}></View>
                </View> 
                <View style={styles.multiButtonContainer}>                        
                    <FlatButton text="ADD" />
                    <FlatButton text="Clear" />
                    <FlatButton text="Confirm Uploading" />            
                </View>           
               
        </View>
        );
    };
   export default Grn;

   const styles = StyleSheet.create({
    container: {
      width:'100%',
      padding:20,
      flexWrap:'wrap',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',    
    },
    item:{
        width:150,
        height:50
    },
    inputDiv:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'flex-start',
        marginVertical:5
    },
    inputText:{
        alignSelf:'center',
        width:'20%',
    },
    multiButtonContainer: {  
        width:'100%',
        margin:5,  
        flexDirection: 'row',  
        justifyContent: 'space-between'  
    } ,
    inputBorder:{
          width:150,
          flexGrow:1,
          borderBottomWidth:1,
          marginHorizontal:20,
          padding:10
    } 
  });