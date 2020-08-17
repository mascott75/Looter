import axios from "axios";

export default{
    
    signUpUser: function (userData) {
        return axios.post("/api/signup", userData);
      },
      checkUserLogged: function () {
        return axios.get("/api/user_data");
      },
      loginUser: function (userData) {
        return axios.post("/api/login", userData);  
      },
};