import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Artist from "./components/artist";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import './App.css';
import { getArtists } from './services/artists';

class App extends Component {
  state = {
    artists: []
  }
  async componentDidMount() {
    const artists = await getArtists();
    this.setState({ artists });
  }
  render() {
    const { artists } = this.state

    return (
      <div className="App">
        <Navbar />
        <Switch>
          {artists.map((artist, i) => (
            <Route
              key={i}
              path={`/result/${artist.f_name}-${artist.l_name}`}
              render={props => (
                <Artist
                  artist={artist}
                  {...props}
                />
              )}
            />
          ))}

        </Switch>
      </div>
    );
  }
}

export default App;
