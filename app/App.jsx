import React from 'react';
import ReactDom from 'react-dom';
import Styles from './styles/app.css';
import catImage from './assets/images/cat.jpg'

class App extends React.Component {
    render () {
        return (
            <div>
                Hi!
                <img src={catImage}></img>
            </div>
        )
    }
}

ReactDom.render(<App />, document.getElementById('root'));