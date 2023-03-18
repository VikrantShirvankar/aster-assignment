import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getMovieList } from "./actions";

import { StyledHomeWrapper, StyledContentWrapper, StyledContentHeading, StyledBackBtn} from './styled';

import Header from '../../components/Header';
import MovieList from '../../components/MovieList';
import Loader from '../../components/Loader';

const Home = () => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [isSearchScreen, setIsSearchScreen] = useState(false);
  const dispatch = useDispatch();

  const { loadingMovieList, movieList, error } = useSelector(
    (state: any) => state.home
  );

  useEffect(() => {
    dispatch(getMovieList());
  }, [dispatch])

  const searchClickHandler = () => {
    dispatch(getMovieList(searchInputValue));
    setIsSearchScreen(true)
  }

  const popularSearcLinkClick = () => {
    dispatch(getMovieList())
    setIsSearchScreen(false)
    setSearchInputValue('')
  }

  return (
    <StyledHomeWrapper>
        <Header 
          searchInputValue={searchInputValue} 
          onSearchInputValueChange={setSearchInputValue} 
          searchBtnClickHandler={searchClickHandler}
          disabledSearchButton={loadingMovieList}
        />
        <StyledContentWrapper>
          <StyledBackBtn>
            {isSearchScreen && <span onClick={popularSearcLinkClick}>Popular List</span>}
          </StyledBackBtn>
          <StyledContentHeading>
            {isSearchScreen ? 'Search Results' : 'Popular Movies'}
          </StyledContentHeading>
          {loadingMovieList && <Loader label="Loading Movies List ..." wrapperHeight={300}/>}
          {!loadingMovieList && <MovieList movieList={movieList} error={error} />}
        </StyledContentWrapper>
    </StyledHomeWrapper>
  );
}

export default Home;
