import axios from "axios"
import { jwtDecode } from 'jwt-decode';
import "core-js/stable/atob";

export const login = async (users) => {
    try {
        const response = await axios.post(`http://localhost:8088/api/login`, users);
        const { token } = response.data;
        if (token) {
            addJwtTokenToLocalStorage(token);
        }
        return response; 
    } catch (error) {
        console.log(error);
    }
}


export const registerUser = async (users) => {
    try {
        const result = await axios.post(`http://localhost:8088/api/register`,users);
        return result;
    } catch (error) {
        console.log(error);
    }
}

export const addJwtTokenToLocalStorage = (jwtToken) => {
    localStorage.setItem("JWT", jwtToken);
}

export const infoAppUserByJwtToken = () => {
    try {
        const jwtToken = localStorage.getItem("JWT");
        if (jwtToken) {
            const decodedToken = jwtDecode(jwtToken);
            return decodedToken;
        }
    } catch (error) {
        console.log(error);
    }
}

export const getIdByUserName = async (jwtToken) => {
    try {
        const result = await axios.get(`http://localhost:8088/api/get-me`,{
            headers: {
                'Authorization': `Bearer ${jwtToken}`
            }
        });
    return result.data;
    } catch (error) {
        console.log(error);
    }
}