import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./components/register";
import Profile from './components/profile';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import './App.css';
import { getArtists } from './services/artists';

import { getUser } from './services/auth';
import { getUserData } from './services/users'
import { getArtPieces } from './services/art_pieces';
import Artist from './components/artist';



class App extends Component {
  state = {
    user_id: 4, // make this dynamic
    artists: [],
    user: {}
  }
  async componentDidMount() {
    let artists = await getArtists();
    //const user_id = await getUser();
    const user = await getUserData(this.state.user_id);//make this dynamic    
    const artPieces = (user.artist_id) ? await getArtPieces(user.artist_id) : [];
    if (artPieces) user.artPieces = artPieces;

    this.setState({ artists, user });
  }

  render() {
    const { artists, user } = this.state

    return (
      <div className="App">
        <Navbar />
        <Switch>
          {artists.map((artist, i) => (
            <Route
              key={i}
              path={`/artists/${artist.artist_id}`}
              render={props => (
                <Artist artist={artist} />
              )}
            />
          ))}
          <Route path="/register" render={() => <Register />} />
          <Route path="/me" render={() => <Profile user={user} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
