import React from 'react';
import { render } from 'react-dom';
import WorkshopApp from 'app/app';
import Tutorial from 'tutorial/tutorial';
import '../css/style';

render(<WorkshopApp/>, document.getElementById('app'));
render(<Tutorial/>, document.getElementById('tutorial'));
