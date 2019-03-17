import React, { Component } from 'react';
import { Link } from "react-router-dom";

// import download from "../services/download";

import { getArtPiece } from '../services/art_pieces';
import ArtistPreview from './common/artistPreview';
import '../stylesheets/artPiece.css';
class ArtPiece extends Component {
    state = {
        ap_id: '',
        artPiece: {}

    }
    async componentDidMount() {

        const artPiece = await getArtPiece(this.props.id);
        this.setState({ artPiece });
    }
    handleClick = () => {
        // download();

    }

    render() {
        //change this to be dynamic - start 
        const baseURL = "https://calgaryart-front.herokuapp.com";
        //change this to be dynamic - start

        const { ap_picture_URL, ap_name, artist_id, avatar_URL, f_name, l_name, ap_description } = this.state.artPiece;
        const URL = encodeURIComponent(`${baseURL}/artpieces/${this.props.id}`);
        const qrLink = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${URL}`;
        const encodedImg = btoa(qrLink);
        const href = `data:image/png;base64,${encodedImg}`
        console.log(href);// find a way to sownload this QR!!!
        return (

            <div className="container art-piece" >
                <img className='ap_picture' alt={`${ap_name}`} src={ap_picture_URL} />
                <h1 className='ap-name'>{ap_name}</h1>
                <div className='ap-desc'>
                    {ap_description}
                </div>
                <a className='qrBtn' href={href} download ><img src={qrLink} alt="qr code" />download QR code</a>


                <Link to={`/artists/${artist_id}`}>
                    <ArtistPreview url={avatar_URL} title={`${f_name} ${l_name}`} />
                </Link>
                <div className='venues'>
                    this is the venues placeholder
                </div>
                <div className='reviews'>
                    this is the reviews placeholder
                </div>
            </div >
        );
    }
}

export default ArtPiece;