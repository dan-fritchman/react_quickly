const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {
    render() {
        return (
            <div>
                <p>HEYYYY</p>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('content')
);