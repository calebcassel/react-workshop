import React from 'react';
import { Accordion, AccordionItem } from 'react-sanfona';
import Hint from './hint';

class Tutorial extends React.Component {
  render() {
    return (
      <div>
        <Accordion>
          <AccordionItem title="Part 1" key="part1">
            <div>
              <section>
                <h4>Getting Started</h4>
                <p>
                  For this tutorial, we're going to create a tic-tac-toe game.
                </p>
                <p>
                  Open up <code>src/js/app/app.jsx</code> in your editor. This will be the main
                  React component for our application. The fundamental purpose of
                  components is to control what is being rendered to the page at any given time.
                </p>
              </section>

              <section>
                <h4>JSX</h4>
                <p>
                  You'll notice that our filename is suffixed with jsx instead of js. This is
                  to distinguish that we're using JSX syntax. Every React component
                  must have a render method which returns a representation of its markup.
                  We could represent the markup with vanilla JavaScript using React's API, but it's
                  far easier to work with JSX syntax, which looks similar to HTML and gets
                  converted to vanilla JavaScript during the build process.
                </p>
                <p>
                  Let's start by modifying this component's output.
                  Change the render method to return:
                </p>
                <p>
                  <code>
                    {'<h1>Hello world!</h1>'}
                  </code>
                </p>
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
                <Hint>
                  <code>
                    {'<h1 className="blink">Hello world!</h1>'}
                  </code>
                </Hint>
              </section>
            </div>
          </AccordionItem>
          <AccordionItem title="Part 2" key="part2">
            <div>
              Do the second part of the tutorial!
            </div>
          </AccordionItem>
          <AccordionItem title="Part 3" key="part3">
            <div>
              Do the third part of the tutorial!
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
}

export default Tutorial;
