import React from 'react';

const ArtistPreview = ({ url, title, onClick }) => {
    return (

        <div onClick={onClick} className="card artist"  >
            <img className="card-img-top" src={url} alt={title} />
            <div className="card-body">
                <p className="card-text">Learn more about {title}</p>
            </div>
        </div>
    );
}

export default ArtistPreview;