
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'
import './styles/styles.scss';


ReactDOM.render(<IndecisionApp options={['Devils Den', 'Second District']}/>, document.getElementById('app'));
