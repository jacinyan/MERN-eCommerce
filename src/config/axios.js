import _axios from 'axios'

const axios = baseURL => {
    const instance = _axios.create({
        baseURL: baseURL || 'http://localhost:9090',
        timeout: 1000,
    });
   return instance
}

// for passing 'baseURL' param
export {axios}

export default axios()