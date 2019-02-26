import React, { Component } from 'react';
import '../stylesheets/artist.css'
import { getArtPieces } from '../services/art_pieces';


class Artist extends Component {
    state = {
        artPieces: []
    }
    async componentDidMount() {
        const artPieces = await getArtPieces(this.props.artist.artist_id);
        console.log(this.props, artPieces)
        this.setState({ artPieces })
    }
    render() {
        const { f_name, l_name, avatar_URL } = this.props.artist;
        const { artPieces } = this.state;
        return (
            <div>
                <img className='avatar' alt={`Avatar of ${f_name} ${l_name}`} src={avatar_URL} />
                <h1>I am {f_name}</h1>
                <h2>here is my work: </h2>
                {artPieces.map(({ ap_id, ap_name, ap_picture_URL, ap_price, ap_description }) => (
                    <div className='m-2' key={ap_id}>
                        <div>{ap_name}, CAD {ap_price}</div>
                        <img className='preview' alt={`${ap_name}`} src={ap_picture_URL} />
                        <div>{ap_description}</div>
                    </div>
                ))}

            </div>);
    }
}

export default Artist;