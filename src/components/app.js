import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Game from './game';
import { newGame } from '../actions/index';

class App extends Component {
  renderGameButton() {
    return <button className="new-game" onClick={() => this.props.newGame()}>New Game</button>
  }

  render() {
    return (
      <div>
        <h1>Hot Cold Game</h1>
        {this.renderGameButton()}
        <Game />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ newGame: newGame }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
