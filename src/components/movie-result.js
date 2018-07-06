import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledMovieSection = styled.div`
  .welcome-section {
    text-align: center;
    height: 100%;
    width: 100%;
    font-size: 150%;
    text-transform: uppercase;

    h1 {
      font-weight: 300;
    }
  }

  .movie-container {
    position: relative;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, .3);
    display: flex;
    margin: 5rem;
    background-color: white;

    .btn-close {
      position: absolute;
      text-decoration: none;
      top: 0.5rem;
      right: 1rem;
      font-size: 150%;
    }
  }

  .movie-thumbnail-container {
    background-size: cover;
    flex: 30%;
    padding-right: 2rem;
  }

  .movie-info-section {
    flex: 70%;
    padding: 2rem;
  }

  .ratings-section {
    display: flex;
    justify-content: space-between;
  }

`;

class MovieResult extends Component {


  renderRatings(ratings) {
    return ratings.map(rating => {
      let { Source, Value } = rating;
      return (
        <div className='movie-rating'>
          <strong>{Value}</strong>
          <br />
          {Source}
        </div>
      )
    })
  }

  renderSection() {
    let { movieData } = this.props;

    if(movieData.Title) {
      // if movie exists, render fetched data
      let { Poster, Title, Year, Plot, Ratings } = movieData;

      return (
        <div className='movie-container'>
          <a href='#' className='btn-close'>
            &times;
          </a>
          <div className='movie-thumbnail-container' style={{ backgroundImage: `url(${Poster})` }}>

          </div>
          <div className='movie-info-section'>
            <h1>{`${Title} (${Year})`}</h1>
            <div className='ratings-section'>
              {this.renderRatings(Ratings)}
            </div>
            <h3>Plot</h3>
            <p>{Plot}</p>
          </div>
        </div>
      )
    }

    // render welcome text if reducer is empty
    return (
      <div className='welcome-section'>
        <h1>
          Welcome to FilmBuff
        </h1>
        <p>
          Search for a movie
        </p>
      </div>
    )
  }

  render() {
    return (
      <StyledMovieSection>
        {this.renderSection()}
      </StyledMovieSection>
    )
  }
}

function mapStateToProps({ movieData }) {
  return { movieData };
}

export default connect(mapStateToProps)(MovieResult);
