import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getPopularMovies } from "./actions";

import { StyledHomeWrapper, StyledContentWrapper, StyledContentHeading, StyledBackBtn} from './styled'

import Header from '../Header';
import MovieList from '../../components/MovieList'
import Loader from '../../components/Loader';

const Home = () => {
  const dispatch = useDispatch();

  const { popularMovies, loadingPopularMovies } = useSelector(
    (state: any) => state.home
  );

  useEffect(() => {
    dispatch(getPopularMovies());
  }, [dispatch])

  return (
    <StyledHomeWrapper>
        <Header />
        <StyledContentWrapper>
          <StyledBackBtn><span>Popular List</span></StyledBackBtn>
          <StyledContentHeading>Popular Movies</StyledContentHeading>
          {loadingPopularMovies && <Loader label="Loading Popular Movies" />}
          <MovieList movieList={popularMovies} />
        </StyledContentWrapper>
    </StyledHomeWrapper>
  );
}

export default Home;
