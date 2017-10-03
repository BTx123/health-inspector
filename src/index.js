import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const App = () => {

    return (
        // JSX goes here
        <div>
        <h1>Hello World!</h1>
        <p>This is a random paragraph.</p>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));

registerServiceWorker();
