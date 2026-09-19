import { platforms } from "../data/platforms";



function usePlatform() {
    return { data: platforms, isLoading: null, error: null }
}

export default usePlatform;