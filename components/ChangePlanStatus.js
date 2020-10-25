import React, {useState,Component} from 'react';
import {View,Text,TextInput,StyleSheet,Button} from 'react-native';
import {Picker} from '@react-native-community/picker';

export default class  ChangePlanStatus extends Component{
    state= {
        production: 'Planned'
       };
    render(){     
         return(
     
             <View style={styles.container}>
                 <Text>Change Machine Plan Status</Text>
     
                 <View>
                    <Picker
                        selectedValue={this.state.production}
                        style={{height: 30, width: 200}}
            
                        onValueChange={(itemValue, itemIndex) => this.setState({production: itemValue})}
                        >
                        <Picker.Item label="WCR-1" value="WCR-1" />
                        <Picker.Item label="WCR-2" value="WCR-2" />
                    </Picker>     
                 </View>
                 <View>

                 </View>
                 <View style={styles.buttonContainer}>
                     <Button title = 'Save'/>
                 </View>
                 <View style={styles.buttonContainer}>    
                     <Button title = 'Return'/>
                 </View>
     
             </View>
         )
     };
    
}
//const ChangePlanStatus = () =>{
    
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  
    },
    textStyle:{  
        margin: 24,  
        fontSize: 25,  
        fontWeight: 'bold',  
        textAlign: 'center',  
    },  
    pickerStyle:{  
        height: 150,  
        width: "80%",  
        color: '#344953',  
        justifyContent: 'center',  
    },
    buttonContainer: {  
        margin: 5  
    },  
    multiButtonContainer: {  
        margin: 20,  
        flexDirection: 'row',  
        justifyContent: 'space-between'  
    }    
  });
//export default ChangePlanStatus