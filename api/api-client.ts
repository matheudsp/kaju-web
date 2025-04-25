
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';


const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, 
});


const handleApiError = (error: AxiosError) => {
  if (error.response) {
    
    console.error('API Error:', error.response.data);
    return Promise.reject(error.response.data);
  } else if (error.request) {

    console.error('Network Error:', error.request);
    return Promise.reject({ message: 'Network error occurred' });
  } 

    console.error('Request Error:', error.message);
    return Promise.reject({ message: 'An error occurred' });
  
};

// Add error interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => handleApiError(error)
);

export default apiClient;

export const apiRequest = async <T>(config: AxiosRequestConfig): Promise<T> => {
  try {
    const response = await apiClient(config);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};