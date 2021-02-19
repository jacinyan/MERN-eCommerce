import decode from 'jwt-decode'

const TOKEN = "token"

const setToken = token => {
    localStorage.setItem(TOKEN, token)
}

const getToken = () => {
    return localStorage.getItem(TOKEN)
}

const isLoggedIn = () => {
    const jwToken = getToken()
    return !!jwToken && !isTokenExpired()
}

const isTokenExpired = token => {
    try {
        const _info = decode(token);
        if (_info.exp < Date.now() / 1000) {
            return true;
        } else return false;
    } catch (error) {
        return false;
    }
};

const getUser = () => {
    const jwToken = getToken()
    if (isLoggedIn()) {
        const user = decode(jwToken)
        return user
    } else {
        return null
    }
}

const logout = () => {
  localStorage.removeItem(TOKEN)
}

global.auth = {
    setToken,
    getToken,
    getUser,
    isLoggedIn,
    logout
}