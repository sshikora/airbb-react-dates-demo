import React, { Component } from 'react';
import './App.css';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import { DateRangePicker, SingleDatePicker } from 'react-dates';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      focused: null,
      startDate: null,
      endDate: null,
      focusedInput: null,
    };
  }

  render() {
    return (
      <div className="App">
        <div>
          <DateRangePicker
            startDateId="startDate"
            endDateId="endDate"
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate })}}
            focusedInput={this.state.focusedInput}
            onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
          />
        </div>
        <br/>
        <br/>
        <div>
          <SingleDatePicker
            date={this.state.date}
            onDateChange={date => this.setState({ date })}
            focused={this.state.focused}
            onFocusChange={({ focused }) => this.setState({ focused })}
            id="this_is_an_id"
          />
        </div>
      </div>
    );
  }
}

export default App;
