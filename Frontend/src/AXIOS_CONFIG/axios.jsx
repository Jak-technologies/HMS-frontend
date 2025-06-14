import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000/api', // Update this URL if your backend is hosted elsewhere
});

export default instance;
