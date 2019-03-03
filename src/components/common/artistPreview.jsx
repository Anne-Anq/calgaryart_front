import React from 'react';

const ArtistPreview = ({ url, title, width = '8rem', onClick }) => {
    return (

        <div onClick={onClick} className="card d-flex" style={{ width }} >
            <img className="card-img-top" src={url} alt={title} />
            <div className="card-body">
                <p className="card-text">{title}</p>
            </div>
        </div>
    );
}

export default ArtistPreview;