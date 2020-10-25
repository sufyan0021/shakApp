import React from 'react';
import {View,Text,TextInput,StyleSheet,Button} from 'react-native';

const CloseMachineIssue = () => {
    return(
        <View>
            <Text style = {{fontWeight:'bold'}}>Close Down Time</Text>
            <View>
                <TextInput title = 'Slect Machine'
                style={{borderWidth:1}}
                />
            </View>
            <View style={{flexDirection:'row'}}>
                <Text>Machine</Text>
                <TextInput title= 'Machine Details'
                style={{borderWidth:1}}
                />
            </View>
            <View>
                <Button title = 'Close'/>
            </View>
        </View>
    );}

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
      
        },
      });

      export default CloseMachineIssue