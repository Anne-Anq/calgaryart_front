import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ArtistPreview from './common/artistPreview';


class AllArtists extends Component {
    render() {
        const { artistsIds } = this.props;
        return (<div>
            {
                artistsIds && artistsIds.map(artist => (
                    <div key={`artist${artist.id}`}>
                        <Link to={`/artists/${artist.id}`}>
                            <ArtistPreview url={artist.avatar_URL} title={`${artist.f_name} ${artist.l_name}`} />
                        </Link>
                    </div>
                ))
            }
        </div>
        );
    }
}

export default AllArtists;



