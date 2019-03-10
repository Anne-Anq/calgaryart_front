import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import ArtPreview from './common/artPreview';
import { getArtist, getArtistArtPieces } from '../services/artists';

//STYLE
import '../stylesheets/artist.css'



class Artist extends Component {
    state = {
        artist: {},
        artPieces: [],
        artist_id: ''
    }
    async componentDidMount() {
        const artist_id = this.props.id;
        const artist = await getArtist(artist_id);
        const artPieces = await getArtistArtPieces(artist_id);
        this.setState({ artist, artPieces, artist_id })
    }
    render() {
        let { f_name, l_name, avatar_URL, bio } = this.state.artist;
        const { artPieces } = this.state;
        return (
            <div className='artist container'>
                <img className='avatar' alt={`Avatar of ${f_name} ${l_name}`} src={avatar_URL} />
                <h1 className='artist-name'>{f_name} {l_name}</h1>

                <div className='bio'>{bio}</div>
                <div className='map-text'>{f_name} currently has some work exhibited in the following locations: </div>
                <div className='map'>
                    this is the map placeholder for where the artist is currently exhibiting
                    </div>

                <div className='collage'>
                    {artPieces && artPieces.map((ap) => (
                        <Link key={`link-ap${ap.ap_id}`} to={`/artpieces/${ap.ap_id}`}>
                            <ArtPreview url={ap.ap_picture_URL} title={ap.ap_name} />
                        </Link>
                    ))}
                </div>


                <div className='reviews'>
                    this is a reviews placeholder
                    </div>


                {/* <Carousel data={artPieces} id='ap_id' url='ap_picture_URL' name='ap_name' /> */}

            </div >);
    }
}

export default Artist;