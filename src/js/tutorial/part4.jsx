import React from 'react';
import Highlight from 'react-highlight';
import Hint from './hint';

class Part4 extends React.Component {
  render() {
    return (
      <div>
        <h3>Giving Props</h3>
        <p>
          Back in <code>app.jsx</code>, the main component will need to store the
          selection value for each square in its own state. Just like before,
          we need to define a constructor and initialize the state for the board.
          Let's use an array to hold the values for each square.
        </p>
        <Highlight type="javascript">
{`constructor() {
  super();

  const selections = [];
  for (let i = 0; i < 9; i++) {
    selections[i] = 'none';
  }

  this.state = {
    selections: selections,
  };
}`}
        </Highlight>
        <p>
          Finally, we need to change how we're rendering each square. We need to pass in the
          current selection and assign a click handler. Rather than listing
          each square individually in <code>render()</code>, this could be more easily
          accomplished by aggregating over the array in our state.
        </p>
        <Highlight type="javascript">
{`render() {
  const squares = this.state.selections.map((selection, index) => {
    return (
      <Square selection={selection} key={index} onClick={() => {
        this.changeSelection(index);
      }}/>
    );
  });

  return (
    <div className="game-board">
      {squares}
    </div>
  );
}`}
        </Highlight>
        <p></p>
        <p>To put this all together, we just need to implement <code>changeSelection()</code> as we did before</p>
        <Hint type="javascript">
{`changeSelection(index) {
  const selections = this.state.selections;
  let selection = selections[index];
  if (selection === 'none') {
    selection = 'x';
  } else if (selection === 'x') {
    selection = 'o';
  } else {
    selection = 'none';
  }

  selections[index] = selection;
  this.setState({ selections: selections });
}`}
        </Hint>
      </div>
    );
  }
}

export default Part4;
