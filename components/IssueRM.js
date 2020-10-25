import React from 'react';
import {View,Text,TextInput,StyleSheet,Picker} from 'react-native';
import { Input,Button} from 'react-native-elements';
import { RadioButtonGroup, RadioButton } from 'react-native-paper';
import { Formik,Field } from 'formik';
//import DropDownPicker from 'react-native-dropdown-picker';

const IssueRM = () =>{
    
    return(
      <>
      <View style={styles.mainIssueRMDiv}>
     <Formik
     initialValues={{ requestDate: '',picked:'',selectedValue:''}}
     onSubmit={values => console.log(values)}
   >
     {(props) => (
       <>
       <View style={styles.inputDiv}>
       <Text style={styles.inputText}>Request Date</Text>
       <Text style={styles.inputText}>Shift</Text>
       <Text style={styles.inputText}>Request No.</Text>
       <Text style={styles.inputText}>Machine</Text>
   </View>  
   <View>
       <View style={styles.innerInputs}>
         <TextInput style={styles.input}
          placeholder='Request Date'
          onChangeText={props.handleChange('requestDate')}
          value={props.values.requestDate}
         />
         <TextInput style={styles.input}
         />
         <View></View>
       </View>
       <View style={styles.innerInputs}>
       <RadioButton.Group 
       onValueChange={itemValue => props.setFieldValue('picked',itemValue)}
       value={props.values.picked}
       >
            <View style={{flex:1,flexDirection:'row'}}>              
              <RadioButton                              
              value= "Day"
            />
            <Text style={{padding:5}} >Day</Text>
            </View>
              <View style={{flex:1,flexDirection:'row'}}>                  
                  <RadioButton
                  value="Night" 
                />
                <Text style={{padding:5}}>Night</Text>
              </View>                   
            </RadioButton.Group>
       </View>
       <View style={styles.innerInputs}>
       <Picker
        selectedValue={props.values.selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => props.setFieldValue('selectedValue',itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
         <Button title="Refresh" type="outline"buttonStyle={styles.button}/>
       </View>
       <View style={styles.innerInputsReq}>
         <TextInput style={styles.inputExpand}/>
         
       </View>
       <View style={styles.innerInputsReq}>
         <TextInput style={styles.input}/>
         <TextInput style={styles.input}/>
         <TextInput style={styles.input}/>
       </View>
       <View></View>
   </View>
   </>
     )}
   </Formik>
        
    </View>
    </>
    )
}
export default IssueRM;


const styles = StyleSheet.create({
  mainIssueRMDiv:{
    
    display:'flex',
    flexDirection:'row',
    width:'100%',
    height:'50%',
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    overflow:'hidden',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  input:{
    borderWidth: 1,
    borderLeftColor:'#fff',
    borderRightColor:'#fff',
    borderTopColor:'#fff',
    margin:2,
    height: 30,
    width: '25%',
    paddingHorizontal: 5,
    backgroundColor: 'white',
    marginBottom: 5,
  },
  inputDiv:{
    display:'flex',
  },
  inputExpand:{
    borderWidth: 1,
    flexGrow:1,
    borderLeftColor:'#fff',
    borderRightColor:'#fff',
    borderTopColor:'#fff',
    marginBottom:5
  },
  innerInputs:{
    display:'flex',
    flexDirection:'row'
  },
  innerInputsReq:{
    display:'flex',
    flexDirection:'row',
    flex:1
  },
  inputText:{
    fontSize:12,
    padding: 10,
    flexGrow: 1
  },
  button:{
    height:30,
    padding: 10,
    marginHorizontal:5
  }
});
