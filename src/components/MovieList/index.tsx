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
interface MovieListProps {
    movieList: []
}

const MovieList = (props: MovieListProps) => {
    const { movieList } = props
    return (
        <StyledListWrapper>
            {
                movieList.map((movie) => (<MovieCard movieData={movie} />))
            }
        </StyledListWrapper>
    )
};

export default MovieList;