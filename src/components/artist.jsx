import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import { getArtPieces } from '../services/art_pieces';
import Profile from './profile';
import ArtPiece from './artPiece';

class Artist extends Component {
    state = {
        artPieces: []
    }
    async componentDidMount() {
        const artPieces = await getArtPieces(this.props.artist.artist_id);
        this.setState({ artPieces })
    }

    render() {
        let { artist } = this.props;
        artist.artPieces = this.state.artPieces;
        const { artist_id, artPieces } = artist;

        return (
            <Switch>

                {artPieces.map((artPiece, i) => (
                    <Route
                        key={i}
                        path={`/artists/${artist_id}/${artPiece.ap_id}`}
                        render={props => (
                            <ArtPiece artist={artist} artPiece={artPiece} />
                        )}
                    />

                ))}
                <Route
                    path={`/artists/${artist_id}`}
                    render={props => (
                        <Profile artist={artist} />
                    )}
                />
            </Switch>);
    }
}

export default Artist;



