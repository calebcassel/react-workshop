import React from 'react';
import Hint from './hint';
import Highlight from 'react-highlight';

class Part3 extends React.Component {
  render() {
    return (
      <div>
        <h3>Working With Multiple Components</h3>
        <p>
          Let's build out the full game board with all nine squares.
          In <code>app.jsx</code>, return 9 square components instead of just one.
          Remember, you'll need to wrap them in a single parent node, so
          put them in a <code>div</code> with a class of <code>game-board</code>.
        </p>
        <Hint type="html">
{`render() {
    return (
      <div className="game-board">
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
      </div>
    );
}`}
        </Hint>
        <p></p>
        <p>You should have a fully playable game board! How about a quick game with your partner?</p>
        <p></p>
        <h3>Receiving Props</h3>
        <p>
          It should be apparent now that there's a major flaw with this architecture. How do we reset the game?
          How do we know if someone has won? We'll need to give control over the content of each square
          to the App component, itself.
        </p>
        <p>
          Rather than maintaining the current selection in the state object, the Square component
          will need to accept this value as a property. In <code>square.jsx</code>, remove both the
          constructor and <code>changeSelection()</code> methods. In <code>render()</code>, change all
          references of <code>this.state</code> to <code>this.props</code>.
        </p>
        <p>
          Like the state object, an object's props are immutable. Props will only change when the parent
          passes in a new value. Also like state, any new value will trigger a rerender of the component
          unless you suppress it inside a <code>shouldComponentUpdate()</code> method.
        </p>

        <h3>PropTypes</h3>
        <p>
          It's good practice to add validation of properties that a component will receive.
          This helps ensure reusability when sharing components, and forces you to think
          about how you want others to interact with your component.
          To do this, add a <code>propTypes</code> definition beneath your Square class:
        </p>
        <Highlight type="javascript">
{`Square.propTypes = {
  onClick: React.PropTypes.func,
  selection: React.PropTypes.string,
};`}
        </Highlight>
        <p></p>
        <p>
          Finally, change the click handler to call the <code>this.props.onClick</code> property that
          will be passed in. This event will need to be handled at the application level.
        </p>
        <Highlight type="javascript">
        {`onClick={this.props.onClick}`}
        </Highlight>
        <Hint type="javascript">
{`import React from 'react';

  class Square extends React.Component {
    render() {
      let image;
      if (this.props.selection === 'x') {
        image = <img src="/images/x.png"/>;
      } else if (this.props.selection === 'o') {
        image = <img src="/images/o.png"/>;
      }

      return (
        <div className="square" onClick={this.props.onClick}>
          {image}
        </div>
      );
    }
  }

  Square.propTypes = {
    onClick: React.PropTypes.func,
    selection: React.PropTypes.string,
  };

  export default Square;`}
        </Hint>
        <h3>
          Functional Components
        </h3>
        <p>
          A recent addition to React is the ability to create components that are purely functions.
          Now that our Square only deals with rendering, we can convert it from a class to a function.
          This reduces memory consumption and makes our component extremely simple to test.
        </p>
        <p>
          With this change, Square should look something like:
        </p>
        <Highlight type="javascript">
{`const Square = (props) => {
  // returns JSX
};`}
        </Highlight>
        <Hint type="javascript">
{`import React from 'react';

const Square = (props) => {
  let image;
  if (props.selection === 'x') {
    image = <img src="/images/x.png"/>;
  } else if (props.selection === 'o') {
    image = <img src="/images/o.png"/>;
  }

  return (
    <div className="square" onClick={props.onClick}>
      {image}
    </div>
  );
};

export default Square;`}
        </Hint>
      </div>
    );
  }
}

export default Part3;
