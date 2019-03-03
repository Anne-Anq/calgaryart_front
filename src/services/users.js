import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const apiEndPoint = "/users";

const getUserData = async (id) => {
    try {
        const user = await axios.get(`${apiEndPoint}/${id}`);
        return user.data.response[0];
    } catch (err) {
        console.log(err)
    }

};

// const getChallenge = async id => {
//     return await axios.get(`${apiEndPoint}/${id}`);
// };

// const deleteChallenge = async id => {
//     return await axios.delete(`${apiEndPoint}/${id}`);
// };
// const postChallenge = async data => {
//     return await axios.post(apiEndPoint, data);
// };

// const takeChallenge = async id => {
//     return await axios.put(`${apiEndPoint}/${id}`);
// };

export {
    getUserData
};
