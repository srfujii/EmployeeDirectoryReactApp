import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=20&inc=name,email,dob,phone,picture&noinfo";
// const APIKEY = "&apikey=trilogy";

export default {
  search: function() {
    return axios.get(BASEURL);
    //  + query + APIKEY);
  }
};