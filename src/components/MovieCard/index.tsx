import React from 'react';

import { 
    StyledCardWrapper,
    StyledCard, 
    StyledCardPoster, 
    StyledCardContent, 
    StyledCardTitle, 
    StyledCardDescription
} from './styled'

const MovieCard = (props: { movieData: {
    poster_path: string
}}) => {
    const { movieData: { poster_path } } = props
    return (
        <StyledCardWrapper>
            <StyledCard>
                <StyledCardPoster>
                    <img src={`https://image.tmdb.org/t/p/original` + poster_path} alt="" />
                </StyledCardPoster>
                <StyledCardContent>
                    <StyledCardTitle>Card Grid Layout</StyledCardTitle>
                    <StyledCardDescription>Demo of pixel perfect pure CSS simple responsive card grid layout</StyledCardDescription>
                </StyledCardContent>
            </StyledCard>
        </StyledCardWrapper>
    )
}

export default MovieCard