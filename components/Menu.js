import * as React from 'react';
import { Button, View } from 'react-native';
//import * as WebBrowser from 'expo-web-browser';

export default class Menu extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="GRN"
          //onPress={() => {
           // WebBrowser.openBrowserAsync('https://expo.io');
         // }}
        />
         <Button
          title="Loading"
          //onPress={() => {
           // WebBrowser.openBrowserAsync('https://expo.io');
         // }}
        />
         <Button
          title="Issue to Machine"
          //onPress={() => {
           // WebBrowser.openBrowserAsync('https://expo.io');
         // }}
        />
         <Button
          title="Input to Machine"
          //onPress={() => {
           // WebBrowser.openBrowserAsync('https://expo.io');
         // }}
        />
         <Button
          title="Output from Machine"
          //onPress={() => {
           // WebBrowser.openBrowserAsync('https://expo.io');
         // }}
        />
        <Button
          title="Update Barecode Identity"
          //onPress={() => {
           // WebBrowser.openBrowserAsync('https://expo.io');
         // }}
        />
        <Button
          title="Remove Coil from WM#2"
          //onPress={() => {
           // WebBrowser.openBrowserAsync('https://expo.io');
         // }}
        />
        <Button
          title="Return coil"
          //onPress={() => {
           // WebBrowser.openBrowserAsync('https://expo.io');
         // }}
        />
        <Button
          title="Search Item"
          //onPress={() => {
           // WebBrowser.openBrowserAsync('https://expo.io');
         // }}
        />
        <Button
          title="Machine Downtime"
          //onPress={() => {
           // WebBrowser.openBrowserAsync('https://expo.io');
         // }}
        />
        <Button
          title="Change Input Barcode Status"
          //onPress={() => {
           // WebBrowser.openBrowserAsync('https://expo.io');
         // }}
        />
        <Button
          title="Offline GRN"
          //onPress={() => {
           // WebBrowser.openBrowserAsync('https://expo.io');
         // }}
        />
        <Button
          title="Manual Inventory"
          //onPress={() => {
           // WebBrowser.openBrowserAsync('https://expo.io');
         // }}
        />
        <Button
          title="Change Plan"
          //onPress={() => {
           // WebBrowser.openBrowserAsync('https://expo.io');
         // }}
        />
        <Button
          title="Multiple In"
          //onPress={() => {
           // WebBrowser.openBrowserAsync('https://expo.io');
         // }}
        />
        <Button
          title="Multiple Out"
          //onPress={() => {
           // WebBrowser.openBrowserAsync('https://expo.io');
         // }}
        />
        <Button
          title="GRN For Existing Materials"
          //onPress={() => {
           // WebBrowser.openBrowserAsync('https://expo.io');
         // }}
        />
        <Button
          title="Logout"
          //onPress={() => {
           // WebBrowser.openBrowserAsync('https://expo.io');
         // }}
        />
      </View>
    );
  }
}
export default Menu;