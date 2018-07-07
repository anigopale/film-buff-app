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

class WatchedMovieItem extends Component {
  render() {
    let { poster, itemIndex } = this.props;

    return (
      <StyledImage
        poster={poster}
        onClick={() => {
          this.props.deleteWatched(itemIndex)
        }}
        >

      </StyledImage>
    );
  }
}

export default connect(null, { deleteWatched })(WatchedMovieItem);
