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
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, .3);
    display: flex;
    margin: 5rem;
    background-color: white;

    .movie-thumbnail-container {
      background-size: cover;
      flex: 30%;
      padding-right: 2rem;
    }

    .movie-info-section {
      flex: 70%;
      padding-left: 2rem;


      .ratings-section {
        display: flex
      }
    }
  }


`;

class MovieResult extends Component {


  renderRatings(ratings) {
    return ratings.map(rating => {
      let { Source, Value } = rating;
      return (
        <span>{Value}</span>
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
          <div className='movie-thumbnail-container' style={{ backgroundImage: `url(${Poster})` }}>

          </div>
          <div className='movie-info-section'>
            <h1>{`${Title} (${Year})`}</h1>
            <div className='rating-section'>
              {this.renderRatings(Ratings)}
            </div>
            <p><h3>Plot</h3>{Plot}</p>
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
