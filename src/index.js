import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header'
import Main from './main'
import * as serviceWorker from './serviceWorker';

class AppReact extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Main/>
            </div>
        )
    }
}

ReactDOM.render(<AppReact />, document.getElementById('root'));
serviceWorker.unregister();
