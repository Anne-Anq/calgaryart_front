import React from 'react';

const ArtPreview = ({ url, title, onClick }) => {
    return (

        <div onClick={onClick} className="card art" >
            <img className="card-img-top" src={url} alt={title} />
            <div className="card-body">
                <p className="card-text">{title}</p>
            </div>
        </div>
    );
}

export default ArtPreview;