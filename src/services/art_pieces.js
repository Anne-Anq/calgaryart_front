import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const apiEndPoint = "/artPieces";

const getAllArtPieces = async () => {
    try {
        const { data: { response, error } } = await axios.get(`${apiEndPoint}`);
        if (error) console.log(error)
        return response;
    } catch (error) {
        console.log(error)
    }
};

const getArtPiece = async ap_id => {
    try {
        const { data: { response, error } } = await axios.get(`${apiEndPoint}/${ap_id}`);
        if (error) console.log(error)
        return response[0];
    } catch (error) {
        console.log(error)
    }
};

export {
    getAllArtPieces,
    getArtPiece
};
