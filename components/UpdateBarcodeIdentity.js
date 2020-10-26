import React from 'react';
import {View, Text, TextInput,StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

const UpdateBarcodeIdentity = () => {

    return(
        <View style={styles.container}>
            <Text style = {{fontWeight:'bold',marginVertical:10}}>Update Barcode Identity</Text>
            <View style={styles.inputDiv}>
                <Text style={styles.inputText}>Barecode</Text>
                <TextInput
                    placeholder = 'Barcode'
                    style={styles.input}
                />
                <Button 
                title='Load'
                buttonStyle={styles.buttons}/>
            </View>
            <View style={styles.inputDiv}>
                <Text style={styles.inputText}>Mizan Id</Text>
                <TextInput
                    placeholder = 'Mizan Id'
                    style={styles.input}
                />   
                <Button title='Show' buttonStyle={styles.buttons}/>             
            </View>
            <View style={styles.inputDiv}>
                <Text style={styles.inputText}>Supplier Barcode</Text>
                <TextInput
                    placeholder = 'Supplier Barcode'
                    style={styles.input}
                />               
            </View>
            <View style={styles.inputDiv}>
                <Text style={styles.inputText}>Location</Text>
                <TextInput
                    placeholder = 'Location'
                    style={styles.input}
                />                
            </View>
            <View style={styles.inputDiv}>
                <Text style={styles.inputText}>Item</Text>
                <TextInput
                    placeholder = 'Item Detail'
                    style={styles.input}
                />                
            </View>
            <View style={styles.inputDiv}>
                <Text style={styles.inputText}>Coil Weight</Text>
                <TextInput
                    placeholder = 'Coil Weight'
                    style={styles.input}
                />
                <Button 
                title='From Scale'
                buttonStyle={styles.buttons}
                />
            </View>
            <View style={styles.inputDiv}>
                <Text style={styles.inputText}>Pieces</Text>
                <TextInput
                    placeholder = 'Pieces'
                    style={styles.input}
                />                
            </View>
            <View style={styles.inputDiv}>
                <Text style={styles.inputText}>Therotical Weight</Text>
                <TextInput
                    placeholder = 'Therotical Weight'
                    style={styles.input}
                />                
            </View>
            <View style={styles.inputDiv}>
                <Text style={styles.inputText}>Sample Weight</Text>
                <TextInput
                    placeholder = 'Sample Weight'
                    style={styles.input}
                />                
            </View>
            <View style={styles.inputDiv}>
                <Text style={styles.inputText}>New Barcode</Text>
                <TextInput
                    placeholder = 'New Barcode'
                    style={styles.input}
                />                
            </View>
            <View style={styles.inputDiv}>
                <Button title='Add New' buttonStyle={styles.buttons} titleStyle={{fontSize:8}}/>
                <Button title = 'Update' buttonStyle={styles.buttons}/>
                <Button title = 'Clear' buttonStyle={styles.buttons}/>          
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:80,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:20
    },
    inputDiv:{
        width:'100%',
        flexDirection:'row',
        paddingBottom:15,
        justifyContent:'space-evenly'
    },
    input: {
        justifyContent:'center',
        flexGrow:2,
        width: 200,
        height: 24,
        borderWidth: 1,
        borderColor: '#777',
        marginBottom: 10,
        marginHorizontal:20, 
        borderTopWidth:0,
        borderRightWidth:0,
        borderLeftWidth:0
    },
    inputText:{
        marginHorizontal:10,
        flexGrow:1,
        alignSelf:'center'
     },
     buttons:{
        paddingHorizontal:15,
        borderRadius:5
    }
})

export default UpdateBarcodeIdentity