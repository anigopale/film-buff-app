import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { deleteWatched } from '../actions';

const StyledImage = styled.div`
  background-image: url(${props => props.poster});
  background-color: blue;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, .3);
  content: "";
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: translateY(0.2rem);
    box-shadow: 0 .5rem .5rem rgba(0, 0, 0, .3);
  }
`;

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
          <StyledImage
            poster={Poster}
            onClick={() => {this.props.deleteWatched()}}
            >
            <i className="far fa-thumbs-down"></i>
          </StyledImage>
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
