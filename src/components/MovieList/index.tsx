import React from 'react'

import styled from 'styled-components'
import MovieCard from '../MovieCard';
import { SCREEN_BREAK_POINTS } from '../../styled.constant'

const StyledListWrapper = styled.ul `
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
    @media (max-width: ${SCREEN_BREAK_POINTS.MOBILE}) {
        justify-content: center;
    }
`

const MovieList = () => {
    return (
        <StyledListWrapper>
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
        </StyledListWrapper>
    )
};

export default MovieList;