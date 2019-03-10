import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const apiEndPoint = "/artists";

const getAllArtists = async () => {
    try {
        const { data: { response, error } } = await axios.get(apiEndPoint);
        if (error) console.log(error)
        return response;
    } catch (error) {
        console.log(error)
    }
};
const getArtist = async artist_id => {
    try {
        const { data: { response, error } } = await axios.get(`${apiEndPoint}/${artist_id}`);
        if (error) console.log(error)
        return response[0];
    } catch (error) {
        console.log(error)
    }
};
const getArtistArtPieces = async artist_id => {
    try {
        const { data: { response, error } } = await axios.get(`${apiEndPoint}/${artist_id}`);
        if (error) console.log(error)
        return response;
    } catch (error) {
        console.log(error)
    }
};
export {
    getAllArtists,
    getArtist,
    getArtistArtPieces
};
