import React, { Fragment } from 'react';
import Preview from './preview';
import '../../stylesheets/card.css';

const Card = ({ data, onClick }) => {
    const { artist_id, f_name, l_name, avatar_URL, artPieces, bio } = data;
    return (
        <div>
            <img className='avatar' alt={`Avatar of ${f_name} ${l_name}`} src={avatar_URL} />
            <h1>{f_name} {f_name}</h1>

            {artist_id && <Fragment>
                <p>{bio}</p>
                <div className='justify-content-center collage d-flex flex-wrap'>
                    {artPieces && artPieces.map((el) => (
                        <Fragment key={el.ap_id} >
                            <Preview onClick={() => onClick(el.ap_id)} url={el.ap_picture_URL} title={el.ap_name} />
                        </Fragment>
                    ))}
                </div>
            </Fragment>}
            {/* <Carousel data={artPieces} id='ap_id' url='ap_picture_URL' name='ap_name' /> */}
        </div>
    );
}

export default Card;
