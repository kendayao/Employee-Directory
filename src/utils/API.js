import axios from "axios"

// axios request to random user API
export default {
  search: function(){
  return axios.get('https://randomuser.me/api/?results=100&nat=US&inc=name,phone,dob,email,picture')
  }
}
        