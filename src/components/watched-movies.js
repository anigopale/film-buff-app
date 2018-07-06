import React, { Component } from 'react';
import { connect } from 'react-redux';

class WatchedMovies extends Component {
  render() {
    console.log(this.props.watchedMovies);
    return (
      <div>

      </div>
    )
  }
}

function mapStateToProps({ watchedMovies }) {
  return { watchedMovies };
}

export default connect(mapStateToProps)(WatchedMovies);
