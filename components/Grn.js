import React from 'react';
import {View,Text,TextInput,Button,StyleSheet} from 'react-native';
//import Format from './Format';



    const Grn = ()=> {
        return (
            <View style={styles.container}>
                <View style={{flexDirection:'row'}}>  
                    <Text style={{height:34}}>Date:</Text>
                    <TextInput style={styles.inputBorder}></TextInput>        
                </View>
                <View style={{flexDirection:'row'}}>  
                    <Text>Supplier:</Text>
                    <TextInput style={styles.inputBorder}></TextInput>
                </View>
                <View style={{flexDirection:'row'}}>  
                    <Text> Supplier Name</Text>
               </View>
               <View style={{flexDirection:'row'}}>  
                    <Text style={{height:34}}>Item Code</Text>
                    <TextInput style={styles.inputBorder}></TextInput>
                </View>
                <View style={{flexDirection:'row'}}>  
                    <Text style={{height:34}}>Coil Weight</Text>
                    <TextInput style={styles.inputBorder}></TextInput>
                </View>
                <View style={{flexDirection:'row'}}>    
                    <Text style={{height:34}}>Supplier Barcode</Text>
                    <TextInput style={styles.inputBorder}></TextInput>
                </View>
                <View style={{flexDirection:'row'}}>  
                    <Text style={{height:34}}>Pieces</Text>
                    <TextInput style={{height:34}}></TextInput>
                </View>
                <View style={{flexDirection:'row'}}>  
                    <Text style={{height:34}}>Barcode</Text>
                    <TextInput style={styles.inputBorder}></TextInput>
                </View>
               
                <View style={{flexDirection:'row'}}>
                    <Text style={{height:34}}>Location</Text>
                    <TextInput style={styles.inputBorder}></TextInput>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{height:34,fontStyle:'bold'}}>Goods Type</Text>
                    <TextInput style={styles.inputBorder}></TextInput>
                </View> 
                    <View style={styles.multiButtonContainer}>                        
                        <Button title='Add' ></Button>
                        <Button title='Clear' ></Button>            
                        <Button title='Confirm Unloading'></Button>            
                    </View>           
               
        </View>
        );
    };
   export default Grn;

   const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
        
    },
    multiButtonContainer: {  
        margin: 20,  
        flexDirection: 'row',  
        justifyContent: 'space-between'  
    } ,
      inputBorder:{
          borderLeftWidth:1,
          height:34
      } 
  });