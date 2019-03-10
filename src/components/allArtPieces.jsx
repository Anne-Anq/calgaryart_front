import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ArtPreview from './common/artPreview';


class AllArtPieces extends Component {
    render() {
        const { art_piecesIds } = this.props;
        return (<div>
            {
                art_piecesIds && art_piecesIds.map(ap => (
                    <div key={`artpieces${ap.id}`}>
                        <Link to={`/artpieces/${ap.id}`}>
                            <ArtPreview url={ap.ap_picture_URL} title={ap.ap_name} />
                        </Link>
                    </div>
                ))
            }
        </div>
        );
    }
}

export default AllArtPieces;



