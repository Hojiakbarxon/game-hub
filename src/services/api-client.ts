import axios, { type AxiosRequestConfig } from "axios";

export interface FetchReponse<T> {
    count: number;
    results: T[]
};

let axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "140f3213f0b34dae9776e98ce8008535"
    }
});


export class APIClient<T> {
    constructor(public endpoint: string) { }

    getAllData = (config?: AxiosRequestConfig) => {
        return axiosInstance.get<FetchReponse<T>>(this.endpoint, config).then(res => res.data)
    };
}