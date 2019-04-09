import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let root = document.getElementById('root');

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(
//     <h1>Hello JSX</h1>,
//     document.getElementById('root')
// );

class HelloWorld extends React.Component {
    render() {
        return (
            <div>
                <h1 {...this.props}>1. ???</h1>
                <h1>2. ???</h1>
            </div>
        );
    }
}

class DateTimeNow extends React.Component {
    render() {
        let dateTimeNow = new Date().toLocaleString();
        // return React.createElement('span', null,
        //     `Current date and time is ${dateTimeNow}.`);
        return <div>
            <HelloWorld/>
            Current date and time is ${dateTimeNow}.
        </div>;
    }
}

class ProfileLink extends React.Component {
    render() {
        return <a
            href={this.props.url}
            title={this.props.label}
            target={"_blank"}>
            Profile
        </a>;
    }
}

class Content extends React.Component {
    getUrl() {
        return 'https://www.github.com'
    }

    render() {
        return (
            <div>
                <p>
                    <a href={this.getUrl()}>This's favorite site is: {this.getUrl()}</a>
                </p>
            </div>
        );
    }
}

class LogInOut extends React.Component {
    render() {
        let get = (dummyFlag) => {
            if (dummyFlag)
                return <a href='/logout'>Logout</a>;
            return <a href='/login'>Login</a>;
        };
        return <div>{get(true)}</div>
    }
}


class MyApp extends React.Component {
    render() {
        // Styles are objects, with camel-case keys
        let smallFontSize = {fontSize: '6pt'};
        return (
            <div>
                <DateTimeNow/>
                <Content/>
                <LogInOut/>
                <ProfileLink url={"https://www.github.com"} label={"Profile for Azat"}/>
                <li data-react-is-awesome={true} not-data-something={false}>React is Orange</li>
                <span>&copy;&mdash;&ldquo;</span>
                <input value="&copy;&mdash;&ldquo;"/>
                <p style={smallFontSize}>I AM SMALL!</p>
                <input disabled={false}/>
            </div>
        );
    }
}


ReactDOM.render(
    <MyApp/>,
    root
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
