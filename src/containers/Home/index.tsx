import React from 'react';

import { StyledHomeWrapper, StyledContentWrapper, StyledContentHeading } from './styled'

import Header from '../Header';
import MovieList from '../../components/MovieList'
import Loader from '../../components/Loader';

const Home = () => {
  return (
    <StyledHomeWrapper>
        <Header />
        <StyledContentWrapper>
            <StyledContentHeading>Popular Movies</StyledContentHeading>
            <Loader />
            <MovieList />
        </StyledContentWrapper>
    </StyledHomeWrapper>
  );
}

export default Home;
