import axios from "axios";

const API_URL = "https://reqres.in/api/users?page=2";

export const getuser = async ()=>{
    try {
       return await axios.get(API_URL);
    } catch (error) {
       return("error while calling the api",error.message);
    }
}