import axios from "axios";
import { tokenKey } from "../config.json";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

// const login = async data => {
//   const { data: jwt } = await axios.post("/login", data);
//   localStorage.setItem(tokenKey, jwt);
// };
const logout = () => {
    localStorage.removeItem(tokenKey);
};
const register = async userData => {
    const formData = new FormData();
    for (let prop in userData) {
        formData.append(`${prop}`, userData[prop]);
    }
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    const { data: { response: { insertId: userId } } } = await axios.post("/register", formData, config);
    localStorage.setItem(tokenKey, userId);
    return userId
};

const registerAsArtist = async (userData, artistData) => {
    const userId = await register(userData);
    artistData.user_id = userId
    const { data: { response: { insertId: artistId } } } = await axios.post("/artists", artistData);
    return artistId;
};

export { register, registerAsArtist, logout };