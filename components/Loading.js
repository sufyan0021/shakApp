import React from 'react';
import {View, Text, TextInput, Button,StyleSheet} from 'react-native'



const Loading = () =>{

    return(
        <View Style={styles.container}>
            <Text style = {{fontWeight:'bold'}}> Loading</Text>

            <View style={{flexDirection:'row'}}>
                <Text>Date</Text>
                <TextInput
                    placeholder = 'Need Date picker'
                    style = {{borderWidth:1,borderStyle:'solid'}}
                />
            </View>
            <View style={{flexDirection:'row'}}>
                <TextInput 
                placeholder = 'Loading No'
                style={styles.input}/>
                <Button title = 'Scan'/>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text>Trilor No.</Text>
                <TextInput 
                placeholder = 'Trailor No'
                style={styles.input}/>
            </View>            
           <View style={{flexDirection:'row'}}>
                <TextInput 
                placeholder = 'Barcode'
                style={{borderStyle:'solid', borderWidth:1}}></TextInput>
                <Button title = 'Scan'></Button>
           </View>
            
            <View style={{flexDirection:'row',position:'relative', padding:20}}>
                <Button title= 'Save'></Button>
                <Button title='Exit' />
                <Button title = 'Refresh' />
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  
    },
    input: {
        width: 200,
        height: 24,
        padding: 10,
        borderWidth: 1,
        borderColor: '#777',
        marginBottom: 10,        
    }
  });

export default Loading