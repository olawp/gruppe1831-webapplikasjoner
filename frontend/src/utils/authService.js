import http from './http.js';

export const login = async (data) => {
    try {
        return await http.post('/login',{ ...data });
    } catch (error) {
        return error.response;
    }
}

export const logout = async () => {
    try {
        return await http.post('/logout')
    } catch (error) {
        return error.response;
    }

}

export const getInfo = async () => {
    try {
        return await http.get('/me');
    } catch (error) {
        return error.response;
    }
}

// CSRF TOKEN
