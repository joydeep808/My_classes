import axios from 'axios';

export const handleAxiosError = (error) => {
    if (axios.isAxiosError(error)) {
        const axiosError = error;
        if (axiosError.response && axiosError.response.data && axiosError.response.data.message) {
            // console.error(axiosError.response.data.message);
            return axiosError.response.data.message;
        }
    }
    return 'Unknown error occurred';
}


