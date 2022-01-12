import React from 'react';
import { Link } from 'react-router-dom';

import MovieDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';

const Header = () => (
    <Wrapper>
        <Content>
            <Link to = '/'> 
            <LogoImg src = {MovieDBLogo} alt='moviedb-logo'/>
            </Link>
            <TMDBLogoImg src = {TMDBLogo} alt='tmdb-logo'/>
        </Content>
    </Wrapper>
);

export default Header;