import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchMovie } from '../actions';

const StyledForm = styled.form`
  flex: 0 0 40%;

  input {
    float: right;
    font-family: inherit;
    font-size: inherit;
    background-color: white;
    border: none;
    padding: .7rem 2rem;
    border-radius: 100px;
    height: 25%;
    width: 50%;
    transition: all 0.5s;

    &:focus {
      width: 100%;
      outline: none;
    }
  }

`;

class SearchBar extends Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value});
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    let { term } = this.state;

    if (term) {
      this.props.fetchMovie(term);
    }
  }

  render() {
    return (
      <StyledForm type="submit" onSubmit={this.onFormSubmit}>
        <input
          placeholder="search for movies"
          onChange={this.onInputChange}
          >
        </input>
      </StyledForm>
    );
  }
}

export default connect(null, { fetchMovie })(SearchBar);
