import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { deleteWatched, giveFeedback } from '../actions';

const StyledImage = styled.div`
  position: relative;
  background-image: url(${props => props.poster});
  background-color: white;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  box-shadow: 0 .5rem .5rem rgba(0, 0, 0, .3);
  content: "";
  transition: all 0.3s;


  &:hover {

  }

  i {
    font-size: 200%;
    cursor: pointer;
    position: absolute;
    transition: all 0.3s;
  }

  .fa-trash-alt {
    top: 1rem;
    right: 1rem;
    &:hover {
      color: #d35400;
    }
  }

  .far {
    bottom: 1rem;
  }

  .fa-thumbs-down {
    left: 1rem;
    ${props => {
      if(props.likeMovie === 'no') {
        return 'color: #e74c3c;'
      }
    }}

    &:hover {
      color: #e74c3c;
    }
  }

  .fa-thumbs-up {
    right: 1rem;
    ${props => {
      if(props.likeMovie === 'yes') {
        return 'color: #2ecc71;'
      }
    }}

    &:hover {
      color: #2ecc71;
    }
  }
`;

class WatchedMovieItem extends Component {

  renderUpvoteButton() {
    let { itemIndex } = this.props;
    return (
      <i
        className="far fa-thumbs-up"
        onClick={() => {
          this.props.giveFeedback(itemIndex, "yes")
        }}
        />
    );
  }

  renderDownvoteButton() {
    let { itemIndex } = this.props;
    return (
      <i
        className="far fa-thumbs-down"
        onClick={() => {
          this.props.giveFeedback(itemIndex, "no")
        }}
        />
    );
  }

  render() {
    let { poster, itemIndex, likeMovie } = this.props;

    return (
      <StyledImage poster={poster} likeMovie={likeMovie}>
        <i
          class="fas fa-trash-alt"
          onClick={() => {
            this.props.deleteWatched(itemIndex)
          }}
          />
        {this.renderUpvoteButton()}
        {this.renderDownvoteButton()}
      </StyledImage>
    );
  }
}

export default connect(null, { deleteWatched, giveFeedback })(WatchedMovieItem);

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
