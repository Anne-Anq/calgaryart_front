import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

//SERVICES
import { getAllArtPieces, getArtPiece } from './services/art_pieces';
import { getAllArtists, getArtist } from './services/artists';
import { getUser } from './services/auth';
import { getUserData } from './services/users'


//COMPONENTS
import Navbar from "./components/Navbar";
import Register from "./components/register";
import Profile from './components/profile';
import Artist from './components/artist';
import AllArtists from './components/allArtists';
import ArtPiece from './components/artPiece';
import AllArtPieces from './components/allArtPieces';

//STYLE
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import './App.css';

class App extends Component {
  state = {
    user_id: 2, // make this dynamic
    artistsIds: [],
    user: {},
    art_piecesIds: []
  }
  async componentDidMount() {                                                                 //refactor
    try {
      const artistsIds = await getAllArtists();
      this.setState({ artistsIds });
    } catch (err) {
      console.log(err)
    }
    try {
      const art_piecesIds = await getAllArtPieces();
      this.setState({ art_piecesIds });
    } catch (err) {
      console.log(err)
    }
    try {
      //const user_id = await getUser();
      const user = await getUserData(this.state.user_id);//make this dynamic   
      this.setState({ user });
    } catch (err) {
      console.log(err)
    }

  }

  render() {
    const { artistsIds, user, art_piecesIds } = this.state
    return (
      <div className="App">
        <Navbar />
        <Switch>
          {artistsIds && artistsIds.map((artist) => (
            <Route
              key={`artistroute${artist.id}`}
              path={`/artists/${artist.id}`}
              render={props => (
                <Artist id={artist.id} />
              )}
            />
          ))}
          {art_piecesIds && art_piecesIds.map((ap) => (
            <Route
              key={`artpieceroute${ap.id}`}
              path={`/artpieces/${ap.id}`}
              render={props => (
                <ArtPiece id={ap.id} />
              )}
            />
          ))}


          <Route path="/artists" render={() => <AllArtists artistsIds={artistsIds} />} />
          <Route path="/artpieces" render={() => <AllArtPieces art_piecesIds={art_piecesIds} />} />
          {/* 
          <Route path="/register" render={() => <Register />} />
          <Route path="/me" render={() => <Profile user={user} />} />
          <Route path="/" render={() => <AllArtPieces art_piecesIds={art_piecesIds} />} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
