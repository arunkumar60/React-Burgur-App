import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-7c46a.firebaseio.com/'
});

export default instance;