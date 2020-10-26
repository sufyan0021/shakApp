import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
 
export default class MyDatePicker extends Component {
  constructor(props){
    super(props)
    this.state = {date:new Date()}
  }
 
  render(){
    return (
      <DatePicker
        style={{width: 200,flexGrow:2}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate={new Date()}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
            dateIcon: {
              left: 0,
              top: 0,
              marginHorizontal: 5,
            },
            dateInput: {
              marginHorizontal: 5,
              width:200,
              borderLeftWidth:0,
              borderRightWidth:0,
              borderTopWidth:0,
            }
            // ... You can check the source to find the other keys.
          }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
    )
  }
}