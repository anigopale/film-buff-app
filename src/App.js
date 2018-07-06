import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import SearchBar from './components/search-bar';
import MovieResult from './components/movie-result';
import WatchedMovies from './components/watched-movies';

const StyledApp = styled.div`
  font-size : 1rem;
  max-width: 70rem;
  min-height: 50rem;
  margin: 4em auto;
  background-color: #ecf0f1;
  box-shadow: 0 2rem 6rem rgba(0, 0, 0, .3);
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 5rem;
  background-color: #2c3e50;
  color: white;
  h2 {
    font-weight: 300;
  }

  i {
    color: white;
    padding: 0 1rem;
  }
`;

const StyledWatchedSection = styled.div`

`;

const StyledResultSection = styled.div`

`;

class App extends Component {
  render() {
    return (
      <StyledApp>
        <StyledHeader>
          <h2>
            <i className="fas fa-film"></i>
            FilmBuff
          </h2>
          <SearchBar />
        </StyledHeader>
        <StyledResultSection>
          <MovieResult />
        </StyledResultSection>
        <StyledWatchedSection>
          <WatchedMovies />
        </StyledWatchedSection>
      </StyledApp>
    );
  }
}

export default App;
