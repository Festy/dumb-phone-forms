import React from 'react';
import ReactDom from 'react-dom';
import './styles/app.css';
import Main from './components/Main.jsx'
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';


class App extends React.Component {

    render () {
        return (
            <div>
                <Main />
            </div>
        )
    }
}

ReactDom.render(<App />, document.getElementById('root'));