import React from 'react';
import {View,Text,TextInput,StyleSheet,Button} from 'react-native';
import {RadioButton} from 'react-native-paper'

const RecordDowntime = () =>{

    return(
        <View style = {styles.container}>
            <Text>Please select machine to open downtime or close down time</Text>
            <View>
                <Text>Select Machine</Text>
                <TextInput placeholder='Select Machine'/>
                <View style={{flexDirection:'row'}}>
                    <RadioButton></RadioButton>
                    <Text>Self Maintenance</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <RadioButton></RadioButton>
                    <Text>Send to Maintenance Department</Text>
                </View>
                    <Button title='Return to Record or Close downtime'/>
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
  });

export default RecordDowntime