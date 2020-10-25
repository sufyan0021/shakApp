import React from 'react';
import {View,Text,TextInput,Button,StyleSheet} from 'react-native';

const RemoveCoilFromWirmesh = () =>{

return(
    <View style={styles.container}>
        <Text style={{fontWeight:'bold'}}>Remove Coil From Wire Mesh#2</Text>
        <View style={{flexDirection:'row'}}>
            <Text>Item Code</Text>
            <TextInput 
            placeholder = 'Item Code'  
            style={{borderStyle:'solid',borderWidth:1}}
            />
        </View>
        <View style={{flexDirection:'row'}}>
            <Text>Spool No</Text>
            <TextInput 
            placeholder = 'Spool No'
            style={{borderStyle:'solid',borderWidth:1}}
            />
        </View>
        <View style={{flexDirection:'row'}}>
            <Text>Coil Weight</Text>
            <TextInput 
            placeholder = 'Coil Weight'
            style={{borderStyle:'solid',borderWidth:1}}
            />
        </View>
        <View style={{flexDirection:'row'}}>
            <Text>Length</Text>
            <TextInput 
            placeholder = 'Length'
            style={{borderStyle:'solid',borderWidth:1}}
            />
        </View>
        <View style={{flexDirection:'row'}}>
            <Text>Sample Weight</Text>
            <TextInput 
            placeholder = 'Sample Weight'
            style={{borderStyle:'solid',borderWidth:1}}
            />
        </View>
        <View style={{flexDirection:'row'}}>
            <Text>Mizan Id</Text>
            <TextInput 
            placeholder = 'Mizan Id'
            style={{borderStyle:'solid',borderWidth:1}}
            />
        </View>
        <View style={{flexDirection:'row'}}>
            <Text>Supplier Barcode</Text>
            <TextInput 
            placeholder = 'Supplier Barcode'
            style={{borderStyle:'solid',borderWidth:1}}
            />
        </View>
        <View style={{flexDirection:'row'}}>
            <Text>Mizan Id</Text>
            <TextInput 
            placeholder = 'Mizan Id'
            style={{borderStyle:'solid',borderWidth:1}}
            />
        </View>
        <View style={{flexDirection:'row'}}>
            <Text>Supplier Barcode</Text>
            <TextInput 
            placeholder = 'Supplier Barcode'
            style={{borderStyle:'solid',borderWidth:1}}
            />
        </View>
        <View style={{flexDirection:'row'}}>
            <Text>Location</Text>
            <TextInput 
            placeholder = 'Location'
            style={{borderStyle:'solid',borderWidth:1}}
            />
        </View>
        <View style={{flexDirection:'row'}}>
            <Text>Pieces</Text>
            <TextInput 
            placeholder = 'Pieces'
            style={{borderStyle:'solid',borderWidth:1}}
            />
        </View>
        <View style={{flexDirection:'row'}}>
            <Text>Theoritical Weight</Text>
            <TextInput 
            placeholder = 'Theoritical Weight'
            style={{borderStyle:'solid',borderWidth:1}}
            />
        </View>
        <View style={{flexDirection:'row'}}>
            <Text>Used Coil Length</Text>
            <TextInput 
            placeholder = 'Used Coil Length'
            style={{borderStyle:'solid',borderWidth:1}}
            />
        </View>
        <View style={{flexDirection:'row'}}>
            <Text>Used Weight</Text>
            <TextInput 
            placeholder = 'Used Weight'
            style={{borderStyle:'solid',borderWidth:1}}
            />
        </View>
        <View>
            <Text style={{bac:'golden'}}>Assign New Barcode</Text>
        </View>
        <View style={{flexDirection:'row'}}>
            <Text>New Barcode</Text>
            <TextInput 
            placeholder = 'New Barcode'
            style={{borderStyle:'solid',borderWidth:1}}
            />
        </View>
        <View style={{flexDirection:'row'}}>
            <Text>New Coil Length</Text>
            <TextInput placeholder = 'New Coil Length'  />
        </View>
        <View style={{flexDirection:'row'}}>
            <Text>New Coil Weight</Text>
            <TextInput 
            placeholder = 'New Coil Weight'
            style={{borderStyle:'solid',borderWidth:1}}
            />
        </View>
        <View><Button title='Apply' /></View>

    </View>

);

}

const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent: 'center'
},


})

export default RemoveCoilFromWirmesh