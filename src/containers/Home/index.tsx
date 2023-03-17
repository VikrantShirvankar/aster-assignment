import React from 'react';

import { StyledHomeWrapper, StyledContentWrapper, StyledContentHeading, StyledBackBtn} from './styled'

import Header from '../Header';
import MovieList from '../../components/MovieList'
import Loader from '../../components/Loader';

const Home = () => {
  return (
    <StyledHomeWrapper>
        <Header />
        <StyledContentWrapper>
          <StyledBackBtn><span>Popular List</span></StyledBackBtn>
          <StyledContentHeading>Popular Movies</StyledContentHeading>
          <Loader label="Loading Popular Movies" />
          <MovieList />
        </StyledContentWrapper>
    </StyledHomeWrapper>
  );
}

export default Home;
