const baseURL = "http/localhost:8080"

export default {
  getCustomers(){
    const url = baseURL + "/customers"
    fetch(url)
    .then(res => res.json())
  }
}
