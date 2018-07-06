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
`;

class MovieResult extends Component {

  renderSection() {
    let { movieData } = this.props;
    if(movieData.Title) {
      return (
        <div>
          results will be shown here
        </div>
      )
    }
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
