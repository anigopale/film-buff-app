import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { deleteWatched } from '../actions';

const StyledImage = styled.div`
  position: relative;
  background-image: url(${props => props.poster});
  background-color: white;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  box-shadow: 0 .5rem .5rem rgba(0, 0, 0, .3);
  content: "";
  cursor: pointer;
  transition: all 0.3s;

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate( -50%, -50%);
    color: rgba(192, 57, 43, 0);
  }

  &:hover {
    transform: translateY(-0.2rem);
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, .3);
    background-color: #000;
    opacity: 0.5;

    span {
      color: rgba(192, 57, 43, 1);
    }
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
        <span>Delete Entry</span>
      </StyledImage>
    );
  }
}

export default connect(null, { deleteWatched })(WatchedMovieItem);

// style for img elements
// {
// overflow: hidden;
// position: relative;
// text-align: center;
// content: "";
// transition: all 0.3s;
//
// span {
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate( -50%, -50%);
//   color: rgba(192, 57, 43, 0);
//
// }
// &:hover {
//   span {
//     color: rgba(192, 57, 43, 1);
//   }
// }
//
// img {
//   height: 100%;
//   background-color: white;
//   box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, .3);
//   transition: all 0.5s;
//   cursor: pointer;
//
// }
// img:hover {
//   opacity: 0.5;
//   box-shadow: 0 1rem 1rem rgba(0, 0, 0, .3);
// }
