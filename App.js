import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View,TouchableWithoutFeedback,Keyboard, Button} from 'react-native';
import Grn from './components/Grn';
import Login from './components/Login';
import Form from './components/Test';
import IssueRM from './components/IssueRM';
import IssueToMachine from './components/IssueToMachine';
import InputOutputRep from './components/InputOutputRep';
import ProductionOutput from './components/ProductionOutput';
import Loading from './components/Loading';
import UpdateBarcodeIdentity from './components/UpdateBarcodeIdentity';
import RemoveCoilFromWirmesh from './components/RemoveCoilFromWirmesh';
import SearchItem from './components/SearchItem';
import MachineDowntimeMenu from './components/Maintenance/MachineDowntimeMenu';
import RecordDowntime from './components/Maintenance/RecordDowntime'
import AttendMachine from './components/Maintenance/AttendMachine';
import ResolveIssue from './components/Maintenance/ResolveIssue';
import CloseMachineIssue from './components/Maintenance/CloseMachineIssue';
import ChangeInBarcodeStatus from './components/ChangeInBarcodeStatus';
import ManualInventory from './components/ManualInventory';
import ChangePlanStatus from './components/ChangePlanStatus';
import MultyIn from './components/MultyIn';
import SingleIn from './components/SingleIn';


export default function App() {
  

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <Grn/>      
    </View>
    </TouchableWithoutFeedback>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
