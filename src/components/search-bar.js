import React, { Component } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  font-family: inherit;
  font-size: inherit;
  background-color: white;
  border: none;
  padding: .7rem 2rem;
  border-radius: 100px;
  height: 50%;
`;

export default class SearchBar extends Component {
  onInputChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <StyledInput
        placeholder="search for movies"
        onChange={this.onInputChange}
        >
      </StyledInput>
    )
  }
}
