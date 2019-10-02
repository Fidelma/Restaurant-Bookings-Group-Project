import React from "react";
import DatePicker from "react-datepicker";
import "./DateSelector.css"

import "react-datepicker/dist/react-datepicker.css";

class DateSelector extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = date => {
    this.setState({
      startDate: date
    });
    this.props.getDate(date);
  };

  render() {
    return (
      <DatePicker
        className="date-picker"
        dateFormat="dd/MM/yyyy"
        selected={this.props.date}
        onChange={this.handleChange}
      />
    );
  }
}

export default DateSelector;
