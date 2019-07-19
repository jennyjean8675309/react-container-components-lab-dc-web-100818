// Code MovieReviews Here
import React from 'react';

const generateReviews = (reviewsArray) => {
    return reviewsArray.map(review => {
        return (
            <li className='review'>
                <h3>{review.headline}</h3>
                <h4>{review.byline}</h4>
                <p>{review.summary_short}</p>
            </li>
        )
    })
}

const MovieReviews = (props) => {
    console.log(props.reviews)

    return (
        <ul className='review-list' >
            {generateReviews(props.reviews)}
        </ul>
    )
}



export default MovieReviews
