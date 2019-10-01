const baseURL = "http://localhost:8080"

export const getCustomers = (customer) =>
new Promise((res, rej) => {
  const url = baseURL + "/customers"
  fetch(url)
  .then(res => res.json())

});



postGuest(payload){
  //first fetch request to customers to save customer
  return fetch(baseURL, { //url: localhost:8080/customers  ????
    method: "POST",
    body: JSON.stringify(payload), // instead of payload, make object from details in form
    headers: { "Content-Type": "application/json"} //needs this
  })
  .then(res => res.json()) //then get the customer back to get the ID
  //.then(customer => { //customer now is the customer object back from DB
    //same request again for booking
})
},
