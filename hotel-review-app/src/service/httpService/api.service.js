import axios from "axios";


const Axios = axios.create({
    baseURL: "https://api.whitbread.co.uk/reviews",
    headers: {
        "Content-Type": "application/json"
}

});

export default {
    request(options) {
        return Axios.request(options);
    }
}