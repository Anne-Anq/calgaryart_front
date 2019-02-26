import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const apiEndPoint = "/artists";

const getArtPieces = async artist_id => {
    const artPieces = await axios.get(`${apiEndPoint}/${artist_id}`);
    console.log(artPieces.data.response);
    return artPieces.data.response;
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
    getArtPieces
};
