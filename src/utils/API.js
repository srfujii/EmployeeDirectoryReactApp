import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=200&nat=us&inc=name,email,dob,phone,picture&noinfo";
// const APIKEY = "&apikey=trilogy";

export default {
  search: function() {
    return axios.get(BASEURL);
    //  + query + APIKEY);
  }
};