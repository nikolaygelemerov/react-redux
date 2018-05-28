import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-app-2ea11.firebaseio.com/'
});

export default instance;
