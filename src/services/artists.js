import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const apiEndPoint = "/artists";

const getArtists = async () => {
    const artists = await axios.get(apiEndPoint);

    return artists.data.response;
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
    getArtists
};
