import React from 'react';
import {View,Text,TextInput,StyleSheet,Button} from 'react-native';

const ChangeInBarcodeStatus = () =>{

return(

    <View style = {styles.container}>
        <View style={styles.innerDiv}>
            <Text>Barcode</Text>
            <TextInput title = 'Barcode'
            style = {{borderWidth:1}}
            />
            <Button title = 'Scan'/>
        </View>
        <View style={styles.innerDiv}>
            <Text>Current Barcode Status</Text>
            <TextInput title = 'Barcode'
            style = {{borderWidth:1}}
            />            
        </View>
        <View style={styles.innerDiv}>
            <Text>Change Barcode Status</Text>
            <TextInput title = 'Status List' 
            style = {{borderWidth:1}}
            />            
        </View>
        <View><Button title = 'Update Status'/></View>
        
    </View>
)
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  
    },
    innerDiv:{
        flexDirection:'row'
    }
  });

export default ChangeInBarcodeStatus