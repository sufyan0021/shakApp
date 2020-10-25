import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';


const MachineDowntimeMenu = () =>{

    return(

        <View style = {styles.container}>
            <Text style={{fontWeight:'bold'}}>Manage Machine Down Time</Text>
                <View>
                    <Button title= 'Record Start Down Time'                    
                    style={{paddingTop: 10,paddingBottom: 10,}}/>
                    <Button title= 'Attend Machine'
                    style={{paddingTop: 10}}/>
                    <Button title= 'Resolve Issue'
                    style={{paddingTop: 10}}/>
                    <Button title= 'Close Machine Issue'
                    style={{paddingTop: 10}}/>
                    <Button title= 'Return Back'
                    style={{paddingTop: 10}}/>

                </View>




        </View>
    )
}

const styles = StyleSheet.create({
container:{
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
}

   })

export default MachineDowntimeMenu