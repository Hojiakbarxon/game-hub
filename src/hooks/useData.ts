import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError, type AxiosRequestConfig } from "axios";



interface FetchReponse<T> {
    count: number;
    results: T[]
}

function useData<T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) {
    const [data, setData] = useState<T[]>([]);
    const [error, setErrors] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        const controller = new AbortController();
        apiClient
            .get<FetchReponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
            .then((res) => {
                setData(res.data.results);
                setLoading(false)
            })
            .catch((err) => {
                if (err instanceof CanceledError) return
                setErrors(err.message)
                setLoading(false)
            });

        return () => controller.abort()
    }, deps ?? []);

    return { data, error, isLoading }
}

export default useData