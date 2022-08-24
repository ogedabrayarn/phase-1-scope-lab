// Write your solution in this file!
var customerName = 'bob'
const leastFavoriteCustomer = 'kenny'

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase()
}

function setBestCustomer() {
  bestCustomer = 'not bob'
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'
}
//unsuccessfully reassigning a const variable
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'billy'
}
