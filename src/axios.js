import axios from 'axios';

// base url to send requests to Zomato Api

const instance =  axios.create({
  baseURL: 'https://developers.zomato.com/api/v2.1'
});

export default instance;