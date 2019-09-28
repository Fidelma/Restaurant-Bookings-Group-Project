import React from "react";
import DatePicker from "react-datepicker";

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
        dateFormat="dd/MM/yyyy"
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    );
  }
}

export default DateSelector;
