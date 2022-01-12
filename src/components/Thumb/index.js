import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Styles
import { Wrapper, Image } from './Thumb.styles';

const Thumb = ({ image, clickable, movieId, title }) => (
    <Wrapper>
        { clickable ? (
                <Link to = { `/${movieId}`}>
                    <Image src = { image } alt = 'movie-thumb' />
                </Link>
            ) : ( 
                <Image src = { image } alt = 'movie-thumb' /> 
            )
        } 
        <div>
            <h3>{ title }</h3>
        </div>
    </Wrapper>
);

Thumb.propTypes = {
    image: PropTypes.string, 
    clickable: PropTypes.bool,
    movieId: PropTypes.number,
    title: PropTypes.string,
};

export default Thumb;