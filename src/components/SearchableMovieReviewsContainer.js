import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'Ir9Prf4XUEArsOw9SCgsHsbjZPzSGar3';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = {
            reviews: [], 
            searchTerm: ''
        }
    }

    submitSearch = (e) => {
        console.log('searching...')
        e.preventDefault()
        let searchTerm = e.target.children[0].value
        this.setState({
            searchTerm: searchTerm
        })
        this.fetchReviews(searchTerm)
    }

    fetchReviews = (searchTerm) => {
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${searchTerm}&api-key=${NYT_API_KEY}`)
        .then(response => response.json())
        .then(result => this.setState({
            reviews: result.results
        }))
    }

    render() {
        return (
        <div className='searchable-movie-reviews'>
            <form onSubmit={this.submitSearch}>
                <input></input>
                <input type='submit' name='Search'></input>
            </form>
            <h1>Reviews related to: {this.state.searchTerm}</h1>
            <MovieReviews reviews={this.state.reviews} />
        </div>
        )
    }
}

export default SearchableMovieReviewsContainer
