import React from 'react'
import {View,Text,TextInput,StyleSheet} from 'react-native'

const ScanBarcodeforManualInventory = () =>{
    return(

        <View style={styles.container}>
                <Text style={{fontWeight: 1}}>Scan Manual Inventory Barcode</Text>
                <View style={{flexDirection:'row'}}>
                    <Text>Barcode</Text>
                    <TextInput placehorder='Barcode'
                    style = {{borderWidth: 1}}
                    />
                    <Button title='Scan'/>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Button title='Summary'/>
                    <Button title = 'Detail'/>
                </View>
                <Text>Here Need DataGridViews</Text>
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
  });

export default ScanBarcodeforManualInventory