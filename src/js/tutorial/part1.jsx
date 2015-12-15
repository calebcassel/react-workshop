import React from 'react';
import Hint from './hint';
import Highlight from 'react-highlight';

class Part1 extends React.Component {
  render() {
    return (
      <div>
        <section>
          <h4>Getting Started</h4>
          <p>
            For this tutorial, we're going to create a tic-tac-toe game.
          </p>
          <p>
            Open <code>src/js/app/app.jsx</code> in your editor. This will be the main
            React component for our application. The fundamental purpose of
            components is to control what is being rendered to the page at any given time.
          </p>
          <p>
            Open <code>src/js/main.jsx</code> to see how this component is being added
            to the page. From the react-dom package we call <code>render()</code>,
            passing in the element it will begin rendering to.
          </p>
        </section>

        <section>
          <h4>JSX</h4>
          <p>
            You'll notice that the filenames are suffixed with jsx instead of js. This is
            to distinguish that we're using JSX syntax. Every React component
            must have a render method which returns a representation of its markup.
            We could represent the markup with vanilla JavaScript using React's API, but it's
            far easier to work with JSX syntax, which looks similar to HTML and gets
            converted to vanilla JavaScript during the build process.
          </p>
          <p>
            Let's start by modifying this component's output.
            Change the render method of app.jsx to return:
          </p>
          <Highlight type="html">
              {'<h1>Hello world!</h1>'}
          </Highlight>
          <p>You should see your changes reflected on the left side of this window.</p>
        </section>

        <section>
          <h4>
            Some things to note about JSX:
          </h4>
          <ul>
            <li>
              A component <b>must</b> return only a single node. Sibling elements
              at your component's root must be wrapped in a single parent element.
            </li>
            <li>
              Some property names are different. For
              instance, <code>class</code> becomes <code>className</code>.
            </li>
          </ul>
          <p>So let's try adding a class to our markup. Give your &lt;h1&gt; a class of "blink".</p>
          <Hint type="html">{'<h1 className="blink">Hello world!</h1>'}</Hint>
        </section>
      </div>
    );
  }
};

export default Part1;
