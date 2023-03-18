import React from 'react';

import { IMAGE_BASE_URL } from '../../constants/apis.constant'

import { 
    StyledCardWrapper,
    StyledCard, 
    StyledCardPoster, 
    StyledCardContent, 
    StyledCardTitle, 
    StyledCardDescription,
    StyledCardTitleWrapper
} from './styled'

const MovieCard = (props: { movieData: {
    poster_path: string
    title: string
    release_date: string
}}) => {
    const { movieData: { poster_path, title, release_date } } = props

    // TODO: Implement no image logic and styling and then remove below condition
    if (!poster_path) {
        return <></>
    }

    return (
        <StyledCardWrapper>
            <StyledCard>
                <StyledCardPoster>
                    <img src={IMAGE_BASE_URL + poster_path || ''} alt="" />
                </StyledCardPoster>
                <StyledCardContent>
                    <StyledCardTitleWrapper>
                        <StyledCardTitle>{title}</StyledCardTitle>
                    </StyledCardTitleWrapper>
                    <StyledCardDescription>{release_date}</StyledCardDescription>
                </StyledCardContent>
            </StyledCard>
        </StyledCardWrapper>
    )
}

export default MovieCard