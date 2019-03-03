import React, { Component } from 'react';
import Card from './common/card';


class Profile extends Component {
    handleClick = (id) => {
        const { artist_id } = this.props.artist;
        window.location.href = `/artists/${artist_id}/${id}`;
    }
    render() {
        let { artist, user } = this.props;
        if (!artist && user.artist_id) artist = user;

        return (
            <div>

                {artist && <Card data={artist} onClick={this.handleClick} />}
                {!artist && <Card data={user} />}

            </div>);
    }
}

export default Profile;