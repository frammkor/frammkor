import { ref } from 'vue';

const useFetch = (url, errorMessage = 'No data available') => {
    const fetchedData = ref(null);
    const error = ref(null);
    const loading = ref(true);

    const load = async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw Error(errorMessage);
            }
            fetchedData.value = await response.json();
        } catch (netError) {
            error.value = netError.message;
        }
        finally {
            loading.value = false;
        }
    }

    return {
        data: fetchedData, error, loading, load,
    };
};

export default useFetch;
