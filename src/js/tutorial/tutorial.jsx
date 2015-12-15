import React from 'react';
import Part1 from './part1';
import Part2 from './part2';

const sections = 2;

class Tutorial extends React.Component {
  constructor() {
    super();
    this.state = { section: 1 };
  }

  getSection() {
    switch (this.state.section) {
      case 1:
        return <Part1/>;
      case 2:
        return <Part2/>;
      default:
        return null;
    }
  }

  nextSection() {
    if (this.state.section < sections) {
      this.setState({ section: this.state.section + 1 });
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
    const canAdvance = this.state.section < sections;

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
      <div>
        <div>
          {prevButton}
        </div>
        <header>
          <h1>Part {this.state.section}</h1>
        </header>
        {this.getSection()}
        {nextButton}
      </div>
    );
  }
}

export default Tutorial;
