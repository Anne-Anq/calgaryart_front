import React, { Fragment, Component } from 'react';
import { Link } from "react-router-dom";
import { getArtPiece } from '../services/art_pieces';
import ArtistPreview from './common/artistPreview';
import '../stylesheets/artPiece.css';

class ArtPiece extends Component {
    state = {
        ap_id: '',
        artPiece: {}

    }
    async componentDidMount() {
        const ap_id = this.props.id;
        const artPiece = await getArtPiece(ap_id);
        this.setState({ ap_id, artPiece });
    }
    render() {
        const { ap_picture_URL, ap_name, artist_id, avatar_URL, f_name, l_name, ap_description } = this.state.artPiece;
        return (
            <div className="container art-piece">
                <img className='ap_picture' alt={`${ap_name}`} src={ap_picture_URL} />
                <h1 className='ap-name'>{ap_name}</h1>
                <div className='ap-desc'>
                    {ap_description}
                </div>
                <button className='qrBtn'>download QR code</button>
                <Link to={`/artists/${artist_id}`}>
                    <ArtistPreview url={avatar_URL} title={`${f_name} ${l_name}`} />
                </Link>
                <div className='venues'>
                    this is the venues placeholder
                </div>
                <div className='reviews'>
                    this is the reviews placeholder
                </div>
            </div>
        );
    }
}

export default ArtPiece;