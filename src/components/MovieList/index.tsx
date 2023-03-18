import React from 'react'

import styled from 'styled-components'
import MovieCard from '../MovieCard';
import { SCREEN_BREAK_POINTS } from '../../constants/styled.constant'

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
const StyledErrorMessage = styled.div `
    margin-left: 16px;
    margin-top: 16px;
`
interface MovieListProps {
    movieList: [];
    error: string;
    isLoading: boolean;
}

const ErrorMessage = ({ error }: { error: string }) => {
    return (
        <StyledErrorMessage>
           {error || 'No matching movies found'}
        </StyledErrorMessage>
    )
}

const MovieList = (props: MovieListProps) => {
    const { movieList, error, isLoading } = props

    // Show message when no data or error
    if (!isLoading && (!movieList?.length || error)) {
        return <ErrorMessage error={error} />
    }
    
    return (
        <StyledListWrapper>
            {movieList.map((movie) => (<MovieCard movieData={movie} />))}
        </StyledListWrapper>
    )
};

export default MovieList;