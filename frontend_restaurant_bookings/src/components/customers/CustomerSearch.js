import React from 'react';
import Customer from "./Customer.js"

class CustomerSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      search: ''
    }
  this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(event){
    this.setState({search: event.target.value.substr(0,20)});
  }

  render(){
    let filteredCustomers = this.props.customers.filter((customer) => {
      return (
        (customer.firstName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || customer.lastName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1)

      )


    })

    return(
      <div>
        <label htmlFor="">Search for exisitng customer</label>
        <input type="text"
          value={this.state.search}
          onChange={this.updateSearch}/>
        <div class="search-results">
        <ul>
          {filteredCustomers.map((customer, index) => {
            return<Customer customer={customer} key={index}/>
          })}
        </ul>
        </div>
      </div>
    )
  }

}

export default CustomerSearch;
