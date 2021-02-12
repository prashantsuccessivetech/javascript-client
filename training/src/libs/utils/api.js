import axios from 'axios';

const callApi = async (route, method, body) => {
    console.log('route is', route)
    console.log('method is', method)
    console.log('body is', body)
    console.log(localStorage.getItem('token'))
    const BASE_URL = 'http://localhost:9001/api/';
    const headers = {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token'),
    };
    const response = await axios({
        method,
        url: BASE_URL + route,
        data: body,
        headers,
    });
    return response;
};

export default callApi;