import React from 'react';
import Hint from './hint';
import Highlight from 'react-highlight';

class Part2 extends React.Component {
  render() {
    return (
      <div>
        <h3>Building a Game Component</h3>
        <p>
          Let's start to actually build the tic-tac-toe game. We'll need a component
          to represent each square in the 3x3 grid. Create a new file under
          <code>src/js/app/</code> called <code>square.jsx</code>. Write it out
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
        <p></p>
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
        <p></p>
        <h3>Event Handlers</h3>
        <p>
          Do you see the square on the left? Lets add some interaction to it.
          We want to catch mouse clicks to cycle between none, X, or O.
          In React, event handlers are often added to components as properties.
          In <code>square.jsx</code>, we want to add this to the <code>{'<div>'}</code> that is returned:
        </p>
        <Highlight type="javascript">
          {'onClick={this.changeSelection.bind(this)}'}
        </Highlight>
        <p></p>
        <p>
          Now we need to implement this method in our class, so add an an empty <code>changeSelection</code> method.
        </p>

        <h3>Component State</h3>
        <p>
          Components can maintain internal data via their state object. The state is an immutable object
          which can only be updated by calling <code>this.setState()</code>. Any changes to your state
          will cause React to rerender the component and reconcile it with the component's in-memory
          representation. If anything has changed, React will flush just those changes to the
          DOM.
        </p>
        <p>
          Note: For performance, this process can be avoided by implementing <code>shouldComponentUpdate()</code>.
        </p>
        <p>
          Let's use the <code>state</code> object to track what should be shown
          in the square. In <code>changeSelection()</code>, check <code>this.state.selection</code>,
          then use <code>{'this.setState({ selection: \'...\'}'}</code> to cycle between three possible states:
          one for X, one for O, and one for none.
        </p>
        <Hint type="javascript">
{`import React from 'react';

class Square extends React.Component {

  changeSelection() {
    const selection = this.state.selection;
    let newSelection;
    if (selection === 'none') {
      newSelection = 'x';
    } else if (selection === 'x') {
      newSelection = 'o';
    } else {
      newSelection = 'none';
    }

    this.setState({
      selection: newSelection,
    });
  }

  render() {
    return (
      <div className="square" onClick={this.changeSelection.bind(this)}></div>
    );
  }
}

export default Square;`}
        </Hint>
        <p></p>
        <p>
          There's one more thing we need to do with our state for this to work.
          The component needs an initial state. Let's give this component a
          constructor, setting the selection to 'none'.
        </p>
        <Highlight type="javascript">
{`constructor() {
  super();
  this.state = { selection: 'none' };
}`}
        </Highlight>
        <p></p>
        <p>
          Finally, we need to actually use the state to change what <code>render()</code> returns.
          If the selection is none, keep the square empty. If it's an X, then the square should
          contain:
        </p>
        <Highlight type="html">{'<img src="/images/x.png"/>'}</Highlight>
        <p>
          For an O, it needs:
        </p>
        <Highlight type="html">{'<img src="/images/y.png"/>'}</Highlight>
        <p>
          Similar to how we added the event handler, JavaScript variables and function calls
          can be interpolated into your JSX by wrapping them in <code>{'{ curly braces }'}</code>.
          Within <code>render()</code>, get the correct image, assign it to a variable, then add it to
          the return value.
        </p>
        <Hint type="javascript">
{`render() {
  let image;
  if (this.state.selection === 'x') {
    image = <img src="/images/x.png"/>;
  } else if (this.state.selection === 'o') {
    image = <img src="/images/o.png"/>;
  }

  return (
    <div className="square" onClick={this.changeSelection.bind(this)}>
      {image}
    </div>
  );
}`}
        </Hint>
        <p></p>
        <p>
          If everything has gone well, you should now be able to click on the square
          to the left to change its contents. If you're having issues, be sure to check the
          JavaScript console for errors.
        </p>
      </div>
    );
  }
}

export default Part2;
