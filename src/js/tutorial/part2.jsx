import React from 'react';
import Hint from './hint';
import Highlight from 'react-highlight';

class Part2 extends React.Component {
  render() {
    return (
      <div>
        <h4>Building a Game Component</h4>
        <p>
          Let's start to actually build the tic-tac-toe game. We'll need a component
          to represent each square in the 3x3 grid. Create a new file under
          <code>src/js/app/</code> called <code>square.jsx</code>. Build it out
          as a component similar to <code>app.jsx</code> and give it a render method.
          Call the class <code>Square</code>, and make sure to add an <code>export</code> at the end to expose the class.
        </p>
        <Hint type="javascript">
  {`import React from 'react';

  class Square extends React.Component {
    render() {
    // TODO
    }
  }

  export default Square;`}
        </Hint>
        <p>
          Now update the component produce this markup:
        </p>
        <Highlight className="html">
          {'<div class="square"></div>'}
        </Highlight>
        <p>
          We want to show this square on the page, so go back and update <code>app.jsx</code> to
          return just our new <code>Square</code> component.
        </p>
        <Hint type="javascript">
{`import React from 'react';

class Square extends React.Component {
  render() {
    return (
      <div className="square"></div>
    );
  }
}

export default Square;`}
        </Hint>
      </div>
    );
  }
}

export default Part2;
