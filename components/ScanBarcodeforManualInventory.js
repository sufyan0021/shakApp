import React from 'react'
import {View,Text,TextInput,StyleSheet,FlatList,TouchableHighlight} from 'react-native'
import {Button} from 'react-native-elements';

const ScanBarcodeforManualInventory = () =>{
    return(

        <View style={styles.container}>
                <Text style={styles.inputText,{fontWeight: 'bold'}}>Scan Manual Inventory Barcode</Text>
                <View style={styles.inputDiv}>
                    <Text style={styles.inputText}>Barcode</Text>
                    <TextInput placehorder='Barcode'
                    style = {styles.input}
                    />
                    <Button title='Scan'/>
                </View>
                <View style={styles.inputDiv}>
                    <Button title='Summary' style={styles.buttons}/>
                    <Button title = 'Detail' style={styles.buttons}/>
                </View>
                <FlatList
                    ItemSeparatorComponent={
                        Platform.OS !== 'android' &&
                        (({ highlighted }) => (
                        <View
                            style={[
                            style.separator,
                            highlighted && { marginLeft: 0 }
                            ]}
                        />
                        ))
                    }
                    data={[{ title: 'Title Text', key: 'item1' }]}
                    renderItem={({ item, index, separators }) => (
                        <TouchableHighlight
                        key={item.key}
                        onPress={() => this._onPress(item)}
                        onShowUnderlay={separators.highlight}
                        onHideUnderlay={separators.unhighlight}>
                        <View style={{ backgroundColor: 'white' }}>
                            <Text>{item.title}</Text>
                        </View>
                        </TouchableHighlight>
                    )}
/>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:80,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    },
    inputDiv:{
        width:'100%',
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
     },
     buttons:{
        marginHorizontal:10,
        paddingHorizontal:20,
        borderRadius:5
    }
})

export default ScanBarcodeforManualInventory