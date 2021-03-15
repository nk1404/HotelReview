import Axios from "./api.service";


    const _request = (
        url,
        data,
        options,
        method = "GET",
        responseType = "json"
    ) => {
        const defaultOption ={method, url, responseType};
        if(data){
            defaultOption.data= JSON.stringify(data);
            defaultOption.headers = {
                "Content-Type": "application/json"
            }
        }
        let requestOptions = defaultOption;
        if(options){
            requestOptions = Object.assign(defaultOption, options);
        }

        //Resolve the original request and wrap the response in another promise

        return new Promise((resolve, reject) => {
            Axios.request(requestOptions).then((response) => {
                resolve(response.data);
        })
        .catch((error) => {
            if(!error){
                reject( new Error("An unknown error occured"));
            }
            reject(error);
        });
    });
};


const DataAccessService = {
    fetchReviews(hotelCode) {
        return _request(
            `?hotel-codes=${hotelCode}`
        );
    },
}

export default DataAccessService;