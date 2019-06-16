const axios = require('axios');

const functions = {
  
  arrowAdd: (num1, num2) => num1 + num2,
  
  functionAdd: function(num1, num2) {
    return num1 + num2;
  },

  isNull: () => null,

  checkValue: (x) => x,

  createUser: () =>  {
    const user = {firstName: 'Mohammed'}
    user['lastName'] = 'Hashmi';
    return user;
  },

  fetchUser: () => 
    axios.get('https://jsonplaceholder.typicode.com/users/1')
     .then(res => res.data)
     .catch(err => 'error')
  
}

module.exports = functions;