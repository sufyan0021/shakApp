import React from 'react';
import {View, Text, TextInput, Button,StyleSheet} from 'react-native'

const UpdateBarcodeIdentity = () => {

    return(
        <View style={styles.container}>
            <Text style = {{fontWeight:'bold'}}>Update Barcode Identity</Text>
            <View style = {{flexDirection:'row'}}>
                <Text>Barecode</Text>
                <TextInput
                    placeholder = 'Barcode'
                    style={{borderWidth:1,borderStyle:'solid'}}
                />
                <Button 
                title='Load'
                />
            </View>
            <View style = {{flexDirection:'row'}}>
                <Text>Mizan Id</Text>
                <TextInput
                    placeholder = 'Mizan Id'
                    style={{borderWidth:1,borderStyle:'solid'}}
                />                
            </View>
            <View style = {{flexDirection:'row'}}>
                <Text>Supplier Barecode</Text>
                <TextInput
                    placeholder = 'Supplier Barcode'
                    style={{borderWidth:1,borderStyle:'solid'}}
                />               
            </View>
            <View style = {{flexDirection:'row'}}>
                <Text>Location</Text>
                <TextInput
                    placeholder = 'Location'
                    style={{borderWidth:1,borderStyle:'solid'}}
                />                
            </View>
            <View style = {{flexDirection:'row'}}>
                <Text>Item</Text>
                <TextInput
                    placeholder = 'Item Detail'
                    style={{borderWidth:1,borderStyle:'solid'}}
                />                
            </View>
            <View style = {{flexDirection:'row'}}>
                <Text>Coil Weight</Text>
                <TextInput
                    placeholder = 'Coil Weight'
                    style={{borderWidth:1,borderStyle:'solid'}}
                />
                <Button 
                title='From Scal'
                />
            </View>
            <View style = {{flexDirection:'row'}}>
                <Text>Pieces</Text>
                <TextInput
                    placeholder = 'Pieces'
                    style={{borderWidth:1,borderStyle:'solid'}}
                />                
            </View>
            <View style = {{flexDirection:'row'}}>
                <Text>Therotical Weight</Text>
                <TextInput
                    placeholder = 'Therotical Weight'
                    style={{borderWidth:1,borderStyle:'solid'}}
                />                
            </View>
            <View style = {{flexDirection:'row'}}>
                <Text>Sample Weight</Text>
                <TextInput
                    placeholder = 'Sample Weight'
                    style={{borderWidth:1,borderStyle:'solid'}}
                />                
            </View>
            <View style = {{flexDirection:'row'}}>
                <Text>New Barcode</Text>
                <TextInput
                    placeholder = 'New Barcode'
                    style={{borderWidth:1,borderStyle:'solid'}}
                />                
            </View>
            <View style = {{flexDirection:'row'}}>
                <Button title='Add New'/>
                <Button title = 'Update'/>
                <Button title = 'Clear'/>          
            </View>





        </View>

    );
}

const styles= StyleSheet.create({
container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#fff'
}



}

)

export default UpdateBarcodeIdentity