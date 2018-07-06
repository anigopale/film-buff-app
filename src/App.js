import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import SearchBar from './components/search-bar';

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
  height: 5rem;
  background-color: #2c3e50;
  justify-content: space-between;
  color: white;
  i {
    color: white;
  }
`;

class App extends Component {
  render() {
    return (
      <StyledApp>
        <StyledHeader>
          <h1>
            <i className="fas fa-film"></i>
            FilmBuff
          </h1>
          <SearchBar />
        </StyledHeader>
      </StyledApp>
    );
  }
}

export default App;
