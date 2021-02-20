import _axios from 'axios'

const axios = baseURL => {
    const instance = _axios.create({
        baseURL: baseURL || process.env.REACT_APP_API_ENDPOINT || 'http://localhost:9090',
        timeout: 1000,
    });

    instance.interceptors.request.use(
        config => {
            const jwToken = global.auth.getToken()
            config.headers['Authorization'] = 'Bearer ' + jwToken
            return config;
        }, 
        error => {
            return Promise.reject(error);
        });

    return instance
}

export {
    axios
}

export default axios()