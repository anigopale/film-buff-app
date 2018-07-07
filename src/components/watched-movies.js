import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { deleteWatched } from '../actions';
import WatchedMovieItem from './watched-movie-item';

const StyledWatchedMoviesContainer = styled.div`

  margin: 0 auto;
  padding: 5rem;
  display: grid;
  grid-auto-rows: minmax(20rem, min-content);
  grid-template-columns: repeat(auto-fit, minmax(15rem, 15rem));
  grid-gap: 5rem;

  img {
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, .3);
  }
`;

class WatchedMovies extends Component {

  renderWatchedMovies() {
    // if watched movies isn't empty && there's no fetched movie, render watched movies
    if(this.props.watchedMovies.length
    && (!this.props.movieData.Title && !this.props.movieData.loading )) {
      return this.props.watchedMovies.map((movie, index) => {
        let { Poster, Title } = movie;
        return (
          <WatchedMovieItem
            poster={Poster}
            itemIndex={index}
            />
        );
      });
    }
  }

  render() {
    return (
      <StyledWatchedMoviesContainer>
        {this.renderWatchedMovies()}
      </StyledWatchedMoviesContainer>
    );
  }
}

function mapStateToProps({ watchedMovies, movieData }) {
  return { watchedMovies, movieData };
}

export default connect(mapStateToProps, { deleteWatched })(WatchedMovies);
