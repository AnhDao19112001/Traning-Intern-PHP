import axios from "axios"
import { jwtDecode } from 'jwt-decode';
export const login = async (users) => {
    try {
        const result = await axios.post(`http://localhost:8088/api/login`,users);
        return result;
    } catch (error) {
        console.log(error);
    }
}
export const registerUser = async (users) => {
    try {
        const result = await axios.post(`http://localhost:8088/api/register`,users);
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
    }
}
export const addJwtTokenToLocalStorage = (jwtToken) => {
    localStorage.setItem("JWT", jwtToken);
}

export const infoAppUserByJwtToken = () => {
    const jwtToken = localStorage.getItem("JWT");
    if (jwtToken) {
        const result = jwtDecode(jwtToken,{ header: true });
        console.log(result);
        return result;
    }
}

export const getIdByUserName = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8088/api/findId/${id}`);
    return result.data;
    } catch (error) {
        console.log(error);
    }
}