import React, { Fragment } from 'react';
import ArtPreview from './artPreview';
import { Link } from "react-router-dom";


const Card = ({ data }) => {
    const { artist_id, f_name, l_name, avatar_URL, artPieces, bio } = data;
    return (
        <div>
            <img className='avatar' alt={`Avatar of ${f_name} ${l_name}`} src={avatar_URL} />
            <h1>{f_name} {f_name}</h1>

            {artist_id && <Fragment>
                <p>{bio}</p>
                <div className='justify-content-center collage d-flex flex-wrap'>
                    {artPieces && artPieces.map((ap) => (
                        <Link to={`/artpieces/${ap.ap_id}`}>
                            <ArtPreview url={ap.ap_picture_URL} title={ap.ap_name} />
                        </Link>
                    ))}
                </div>
            </Fragment>}
            {/* <Carousel data={artPieces} id='ap_id' url='ap_picture_URL' name='ap_name' /> */}
        </div>
    );
}

export default Card;
