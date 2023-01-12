import axios from 'axios';

export const loginAPI = payload => axios.post('/login', payload);
