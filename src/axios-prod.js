import axios from 'axios';


const instance = axios.create({
    baseURL: 'http://localhost:9999/v1'
});


export default instance;