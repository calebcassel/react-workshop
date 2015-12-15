import React from 'react';
import Highlight from 'react-highlight';
import Hint from './hint';

const Part5 = () => {
  return (
    <div>
      <h3>Turn Tracking</h3>
      <p>
        At this point you should have a fully working 3x3 grid, with state being held
        in the parent component (<code>app.jsx</code>). It still doesn't quite feel like a
        game, though, so let's add a couple more things.
      </p>
      <p>
        Add another property to the initial state to track the current player's turn: <code>turn: 'x'</code>.
      </p>
      <Highlight type="javascript">
{`this.state = {
    selections: selections,
    turn: 'x',
  };
`}
      </Highlight>
      <p>
        Next, update <code>changeSelection()</code> to alternate using an X or O depending
        on whose turn it is, then update the turn. Also, you shouldn't be able
        to change a square that has already been selected.
      </p>
      <Hint type="javascript">
{`changeSelection(index) {
  const selections = this.state.selections;
  let selection = selections[index];
  if (selection !== 'none') {
    return;
  }

  selection = this.state.turn;
  selections[index] = selection;

  this.setState({
    selections: selections,
    turn: this.state.turn === 'x' ? 'o' : 'x',
  });
}`}
      </Hint>

      <h3>Other Possibilities</h3>
      <p>
        At this point, see what more you can add on your own!
        <ul>
          <li>Check if a player has won</li>
          <li>Play an animation for the winner</li>
          <li>Reset the game board</li>
          <li>Let the first player choose between X or O</li>
          <li>Add a countdown timer for each turn</li>
        </ul>
      </p>
    </div>
  );
};

export default Part5;
