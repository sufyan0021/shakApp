import React from 'react';
import {View,Text,TextInput,Button,StyleSheet} from 'react-native';

const ManualInventory = () =>{

    return(
        <View style = {styles.container}>
            <Text style = {{fontWeight:'bold'}}>Manual Inventory</Text>

            <View style={styles.innerDiv}>
                <Text>Select Location</Text>
                <TextInput title = 'Location'
                style= {{borderWidth:1}}
                />
            </View>

            <View style={styles.innerDiv}>
                <Text>Id</Text>
                <TextInput title = 'Material'
                style= {{borderWidth:1}}
                />
            </View>

            <View style={styles.innerDiv}>
                <Text>Item Code</Text>
                <TextInput title = 'Item Code'
                style= {{borderWidth:1}}
                />
            </View >
            <View><Text>Item Detail</Text></View>            

            <View style={styles.innerDiv}>
                <Text>Number Of Unit</Text>
                <TextInput title = '0'
                style= {{borderWidth:1}}
                />
            </View>

            <View style={styles.innerDiv}>
                <Text>Unit Weight</Text>
                <TextInput title = '0'
                style= {{borderWidth:1}}
                />
            </View>

            <View style={styles.innerDiv}>
                <Text>Qty. In Ton</Text>
                <TextInput title = '0'
                style= {{borderWidth:1}}
                />
            </View>

            <View style={styles.innerDiv}>
                <Text>Pieces</Text>
                <TextInput title = '0'
                style= {{borderWidth:1}}
                />
            </View>

            <View style={styles.innerDiv}>
                <Button title = 'Steel Inventory'/>
                <Button title = 'Spare Parts Inventory'/>
            </View>

            <View style={styles.innerDiv}>
                <Button title = 'Save Unit'/>
                <Button title = 'Clear'/>
            </View>
            <View><Button title = 'Delete'/> </View>
            
            <View style={styles.innerDiv}>
                <Text>Date From</Text>
                <TextInput placeholder='Date From'/>
            </View>
            <View style = {styles.innerDiv}>
                <Text>Date To</Text>
                <TextInput placeholder='Date To'
                style= {{borderWidth:1}}
                />
            </View>
            <Button title = 'Export to Excel'
            style= {{borderWidth:1}}
            />        
        
        </View>
    )
};

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

export default ManualInventory