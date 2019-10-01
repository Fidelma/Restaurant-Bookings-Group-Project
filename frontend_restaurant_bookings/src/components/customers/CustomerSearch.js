import React from 'react';
import Customer from "./Customer.js"

class CustomerSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      filteredCustomers: [{name: "fred"}, {name: "jane"}],
      search: ''
    }
  this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(event){
    this.setState({search: event.target.value.substr(0,20)});
  }

  render(){
    let filteredCustomers = this.state.filteredCustomers.filter((customer) => {
      return customer.name.indexOf(this.state.search) !== -1;

    })

    return(
      <div>
        <input type="text"
          value={this.state.search}
          onChange={this.updateSearch}/>
        <ul>
          {filteredCustomers.map((customer, index) => {
            return<Customer customer={customer.name} key={index}/>
          })}
        </ul>
      </div>
    )
  }

}

export default CustomerSearch;
