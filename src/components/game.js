import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { submitGuess } from '../actions/index';
import Guess from './guess';

class Game extends Component {
  constructor() {
    super();

    this.onAddSubmit = this.onAddSubmit.bind(this);
    this.showGuesses = this.showGuesses.bind(this);
  }
  onAddSubmit() {
    const submitted = this.refs.num.value;

    if ( isNaN(parseInt(submitted)) ) {
      alert('numbers only stupid.');
    }
    else {
      this.props.submitGuess(submitted);
    }
  }
  showGuesses() {
    console.log(this.props.guesses);
    let arr = this.props.guesses;
    return arr.map(guess => <Guess num={guess} key={guess}/>);
  }
  showHeat() {
    const g = this.props.guesses;
    if (g.length < 1) return 'Pick a number between 1 and 100';

    let diff = g[g.length - 1] - this.props.number;
    if (diff < 0) diff *= -1;

    if (diff === 0) return 'Congradulations!! You burned to death.';
    else if (diff < 2) return 'burning hot';
    else if (diff < 5) return 'hot';
    else if (diff < 8) return 'warm';
    else if (diff < 12) return 'room temperature';
    else if (diff < 20) return 'cold';
    else if (diff < 30) return 'very cold';
    else return 'freezing';
  }

  render() {
    return (
      <div className="game">
        <h2>{ this.showHeat() }</h2>
        <input type="text" ref="num"/>
        { this.showGuesses() }
        <button type="submit" onClick={this.onAddSubmit}>Submit Guess</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    guesses: state.guesses,
    number: state.number
   };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ submitGuess: submitGuess }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
