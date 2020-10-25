import React from 'react';
import {View,Text,TextInput,StyleSheet,Button} from 'react-native'

const ResolveIssue = () => {
    return(

        <View>
            <Text>Resolve Machine Issue</Text>
            <View style = {styles.innerDiv}>
                <Text>Machine</Text>
                <TextInput title = 'Machine Code'/>
                <TextInput title = 'Description' />    
            </View>
            <View style = {styles.innerDiv}>
                <Text>Machine Down Time</Text>
                <TextInput />
                <Text>Down Time</Text>
                <TextInput />    
            </View>    
            <View style = {styles.innerDiv}>
                <Text>Operator</Text>
                <TextInput title = 'Operator Code'/>
                <TextInput title = 'Operator Name'/>    
            </View>
            <View style = {styles.innerDiv}>
                <Text>Remarks</Text>
                <TextInput title = 'Remarks'/>                
            </View>
            <View><Button title = 'Save'/></View>
            
            
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

export default ResolveIssue