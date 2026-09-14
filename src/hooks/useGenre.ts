import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
    id: number;
    name: string;
}

interface FetchGenresReponse {
    count: number;
    results: Genre[]
}

function useGenres() {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setErrors] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        const controller = new AbortController();
        apiClient
            .get<FetchGenresReponse>("/genres", { signal: controller.signal })
            .then((res) => {
                setGenres(res.data.results);
                setLoading(false)
            })
            .catch((err) => {
                if (err instanceof CanceledError) return
                setErrors(err.message)
                setLoading(false)
            });

        return () => controller.abort()
    }, []);

    return { genres, error, isLoading }
}

export default useGenres