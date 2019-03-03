import React, { Fragment } from 'react';
import ArtistPreview from './common/artistPreview';
import '../stylesheets/artPiece.css';

const ArtPiece = ({ artist, artPiece, onClick }) => {
    const { ap_picture_URL, ap_name, ap_description, ap_price } = artPiece;
    const { avatar_URL, f_name, l_name, artist_id } = artist;
    return (
        <Fragment>
            <img className='ap_picture' alt={ap_name} src={ap_picture_URL} />
            <div className='d-flex justify-content-center align-items-center'>
                <h1>{ap_name}</h1>
                <span className="badge badge-secondary m-2">{`$${ap_price}`}</span>
            </div>
            <p>{ap_description}</p>
            <ArtistPreview url={avatar_URL} title={`${f_name} ${l_name}`} width='8rem' onClick={() => onClick(artist_id)} />
        </Fragment>);
}

export default ArtPiece;