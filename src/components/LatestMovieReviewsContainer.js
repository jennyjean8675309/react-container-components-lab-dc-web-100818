import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'Ir9Prf4XUEArsOw9SCgsHsbjZPzSGar3';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        fetch(URL)
        .then(resp => resp.json())
        .then(data => this.setState({ reviews: data.results}))
    }

    render() {
        return (
            <div className='latest-movie-reviews' >
                <h1>Latest Movie Reviews</h1>
                <MovieReviews reviews={this.state.reviews} />  
            </div>
        )
    }
}

export default LatestMovieReviewsContainer
