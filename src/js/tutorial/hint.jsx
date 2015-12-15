import React from 'react';
import Highlight from 'react-highlight';

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
        <Highlight className={this.props.type}>
          {this.props.children}
        </Highlight>
      );
    }

    return (
        <div>
          <a className="hint" onClick={this.showHint.bind(this)}>Hint</a>
        </div>
    );
  }
}

Hint.propTypes = {
  children: React.PropTypes.any,
  type: React.PropTypes.string.isRequired,
};

export default Hint;
