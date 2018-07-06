import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { deleteWatched } from '../actions';

const StyledWatchedMoviesContainer = styled.div`
  display: flex;
  justify-content: space-around;

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
          <img src={Poster} alt={Title}
            onClick={() => {
              this.props.deleteWatched(index);
            }}
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
