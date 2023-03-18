import React from 'react';
import MovieCard from '../MovieCard';
import { StyledListWrapper, StyledErrorMessage } from './styled';

interface MovieListProps {
    movieList: [];
    error: string;
}

const ErrorMessage = ({ error }: { error: string }) => {
    return (
        <StyledErrorMessage>
           {error || 'No matching movies found'}
        </StyledErrorMessage>
    );
}

const MovieList = (props: MovieListProps) => {
    const { movieList, error } = props;

    // Show message when no data or error
    if (!movieList?.length || error) {
        return <ErrorMessage error={error} />
    }
    
    return (
        <StyledListWrapper>
            {movieList.map((movie: any) => (<MovieCard key={movie.id} movieData={movie} />))}
        </StyledListWrapper>
    );
};

export default React.memo(MovieList);