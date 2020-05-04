import axios from 'axios';


const instance = axios.create({
    baseURL: 'http://0.0.0.0:9999/v1'
});


export default instance;
