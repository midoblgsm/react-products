import axios from 'axios';


const instance = axios.create({
    baseURL: 'http://products.example/v1'
});


export default instance;