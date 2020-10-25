import React from 'react';
import {StyleSheet,View,Text,Image} from 'react-native';

export default class Header extends React.Component{

    render(){
        return(
            <View 
            style={{height:'10%',Weidth:'100%',flexDirection:'column',alignItems:'left', backgroundColor:'green'}}
            >
                <Text>Process Automation System (PAS)</Text>             
            </View>            
            );}    
    
}

const styles=StyleSheet.create({
header:{
    
    width:'100%',
    height:'9%',
    alignItems:'left',
    backgroundColor: 'green'
},
stretch: {
    width: '50',
    height: '200',
    resizeMode: 'stretch',
  }
})