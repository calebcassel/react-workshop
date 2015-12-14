import React from 'react';

class Hint extends React.Component {
  constructor() {
    super();
    this.state = { showing: false };
  }

  showHint() {
    this.setState({ showing: true });
  }

  render() {
    if (this.state.showing) {
      return (
        <div>
          {this.props.children}
        </div>
      );
    }

    return (
        <div>
          <a onClick={this.showHint.bind(this)}>Show hint.</a>
        </div>
    );
  }
}

export default Hint;
