import React from 'react';

import { 
    StyledCardWrapper,
    StyledCard, 
    StyledCardPoster, 
    StyledCardContent, 
    StyledCardTitle, 
    StyledCardDescription
} from './styled'

const MovieCard = () => {
    return (
        <StyledCardWrapper>
            <StyledCard>
                <StyledCardPoster>
                    <img src="https://picsum.photos/500/300/?image=10" alt="" />
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