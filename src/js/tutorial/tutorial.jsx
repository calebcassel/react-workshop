import React from 'react';
import Part1 from './part1';
import Part2 from './part2';
import Part3 from './part3';
import Part4 from './part4';
import Part5 from './part5';

const sections = [
  <Part1/>,
  <Part2/>,
  <Part3/>,
  <Part4/>,
  <Part5/>,
];

class Tutorial extends React.Component {
  constructor() {
    super();
    this.state = { section: 1 };
  }

  nextSection() {
    if (this.state.section < sections.length) {
      this.setState({ section: this.state.section + 1 }, () => {
        this.refs.tutorial.scrollTop = 0;
      });
    }
  }

  prevSection() {
    if (this.state.section > 1) {
      this.setState({ section: this.state.section - 1 });
    }
  }

  render() {
    const leftArrow = String.fromCharCode(171);
    const rightArrow = String.fromCharCode(187);
    const canGoBack = this.state.section > 1;
    const canAdvance = this.state.section < sections.length;

    const prevButton = canGoBack ? (
      <button className="btn btn-default btn-sm" onClick={this.prevSection.bind(this)}>
        {leftArrow} Back
      </button>
    ) : null;

    const nextButton = canAdvance ? (
      <button className="btn btn-default next-section" onClick={this.nextSection.bind(this)}>
        Next {rightArrow}
      </button>
    ) : null;

    return (
      <div ref="tutorial">
        <div>
          {prevButton}
        </div>
        <header>
          <h1>Part {this.state.section}</h1>
        </header>
        {sections[this.state.section - 1]}
        {nextButton}
      </div>
    );
  }
}

export default Tutorial;
