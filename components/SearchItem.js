import React from 'react';
import {View,Text,TouchableOpacity,TextInput,Button,StyleSheet} from 'react-native';

const SearchItem = () =>{

    return(

        <View>
            <Text>Search Item</Text>
            <View style = {{flexDirection:'row'}}>
            <TouchableOpacity style={styles.circle} >                                 
            </TouchableOpacity>
            <Text>Used</Text>
            <TouchableOpacity style={styles.circle} >                 
            </TouchableOpacity>
            <Text>Not Used</Text>
            <TouchableOpacity style={styles.circle} >                 
            </TouchableOpacity>
            <Text>Both</Text>
            </View>
            <View style = {{flexDirection:'row'}}>
                <Text>Supplier Barcode</Text>
                <TextInput 
                placeholder= 'Supplier Barcode'
                style={{borderWidth: 1,borderStyle:'solid'}}
                />
                <Button title = 'Show'/>
            </View>

            <View style = {{flexDirection:'row'}}>
                <Text>Location</Text>
                <TextInput 
                placeholder= 'Location'
                style={{borderWidth: 1,borderStyle:'solid'}}
                />
                <Button title = 'Show'/>
            </View>
            <View style = {{flexDirection:'row'}}>
                <Text>Item Code</Text>
                <TextInput 
                placeholder= 'Item Code'
                style={{borderWidth: 1,borderStyle:'solid'}}
                />
                <Button title = 'Show'/>
            </View>
            <View><Text style={{fontWeight:'bold'}}>Show By Location and Item</Text></View>

            <View style = {{flexDirection:'row'}}>
                <Text>Intenal Barcode</Text>
                <TextInput 
                placeholder= 'Inernal Barcode'
                style={{borderWidth: 1,borderStyle:'solid'}}
                />
                <Button title = 'Show'/>
            </View>
            


        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    },
    circle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ACACAC',
        alignItems: 'center', // To center the checked circle…
        justifyContent: 'center',
        marginHorizontal: 10
        },
        checkedCircle: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#131313' // You can set it default or with yours one…
        }
})

export default SearchItem