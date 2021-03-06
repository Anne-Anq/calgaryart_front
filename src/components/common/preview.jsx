import React from 'react';

const Preview = ({ url, title, width = '8rem', onClick }) => {
    return (

        <div onClick={onClick} className="card" style={{ width }} >
            <img className="card-img-top" src={url} alt={title} />
            <div className="card-body">
                <p className="card-text">{title}</p>
            </div>
        </div>
    );
}

export default Preview;