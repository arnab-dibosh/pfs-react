import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Meeting from './components/Meeting/Meeting';

if(document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}

if(document.getElementById('MeetingContainer')) {
    ReactDOM.render(<Meeting />, document.getElementById('MeetingContainer'));
}
