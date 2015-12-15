import React from 'react';
import { render } from 'react-dom';
import App from 'app/app';
import Tutorial from 'tutorial/tutorial';
import '../css/style';

render(<App/>, document.getElementById('app'));
render(<Tutorial/>, document.getElementById('tutorial'));
