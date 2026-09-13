import axios from "axios";

export default axios.create({
    baseURL : "https://api.rawg.io/api",
    params : {
        key : "140f3213f0b34dae9776e98ce8008535"
    }
});