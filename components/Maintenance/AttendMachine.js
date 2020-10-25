import React from 'react';
import {View,Text,TextInput,Button,StyleSheet} from 'react-native';

const AttendMachine = () =>{
    return(
        <View><Text style = {{fontWeight:'bold'}}>Attend Machine Fault</Text>
            <View style={styles.innerDiv}>
                <Text>Machine</Text>
                <TextInput placeholder = 'Machine Code'/>
                <TextInput placeholder='Machine Name' />
            </View>
            <View style={styles.innerDiv}>
                <Text>Machine Down Time</Text>
                <TextInput placeholder = 'Auto Time'/>
                <TextInput placeholder='Enter Time' />
            </View>
            <View style={styles.innerDiv}>
                <Text>Operator</Text>
                <TextInput placeholder = 'Operator Code'/>
                <TextInput placeholder='Operator Name' />
            </View>
            <View style={styles.innerDiv}>
                <Text>Remarks</Text>
                <TextInput placeholder = 'Remarks'/>                
            </View>
            <View style={styles.innerDiv}>
                <Text>Fault</Text>
                <TextInput placeholder = 'Fault Code'/>
                <TextInput placeholder='Fault Description' />
            </View>
            <View style={styles.innerDiv}>
                <Button title = 'Add Fult'/>
                <Button title = 'Save and Email'/>
                <Button title = 'Clear'/>
            </View>

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
export default AttendMachine