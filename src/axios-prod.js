import axios from 'axios';


const instance = axios.create({
    baseURL: 'http://192.168.64.12:32262/v1'
});


export default instance;
