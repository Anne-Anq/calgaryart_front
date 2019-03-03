import React, { Fragment } from 'react';


const Carousel = ({ data, id = 'ap_id', url = 'ap_picture_URL', name = 'ap_name' }) => {

    return (
        <Fragment>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                {/* <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol> */}
                <div className="carousel-inner">
                    {data && data.map((el, i) => (
                        <div key={el[id]} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                            <img className="d-block w-100" src={el[url]} alt={el[name]} />
                        </div>
                    ))}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </Fragment>);
}

export default Carousel;