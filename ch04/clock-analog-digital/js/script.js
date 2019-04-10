const AnalogDisplay = function (props) {
    let date = new Date(props.time);
    let dialStyle = {
        position: 'relative',
        top: 0,
        left: 0,
        width: 200,
        height: 200,
        borderRadius: 20000,
        borderStyle: 'solid',
        borderColor: 'black'
    };
    let secondHandDegrees = (date.getSeconds() / 60 * 360 - 90).toString();
    let secondHandStyle = {
        position: 'relative',
        top: 100,
        left: 100,
        border: '1px solid red',
        width: '40%',
        height: 1,
        transform: 'rotate(' + secondHandDegrees + 'deg)',
        transformOrigin: '0% 0%',
        backgroundColor: 'red'
    };
    let minuteHandDegrees = (date.getMinutes() / 60 * 360 - 90).toString();
    let minuteHandStyle = {
        position: 'relative',
        top: 100,
        left: 100,
        border: '1px solid blue',
        width: '40%',
        height: 3,
        transform: 'rotate(' + minuteHandDegrees + 'deg)',
        transformOrigin: '0% 0%',
        backgroundColor: 'blue'
    };
    let hourHandDegrees = (date.getHours() / 12 * 360 - 90).toString();
    let hourHandStyle = {
        position: 'relative',
        top: 92,
        left: 106,
        border: '1px solid grey',
        width: '20%',
        height: 7,
        transform: 'rotate(' + hourHandDegrees + 'deg)',
        transformOrigin: '0% 0%',
        backgroundColor: 'grey'
    };
    return React.createElement(
        'div',
        null,
        React.createElement(
            'div',
            { style: dialStyle },
            React.createElement('div', { style: secondHandStyle }),
            React.createElement('div', { style: minuteHandStyle }),
            React.createElement('div', { style: hourHandStyle })
        )
    );
};

const DigitalDisplay = function (props) {
    return React.createElement(
        'h2',
        null,
        props.time
    );
};

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: new Date().toLocaleString()
        };
        this.launchClock();
    }

    launchClock() {
        setInterval(() => {
            this.setState({
                currentTime: new Date().toLocaleString()
            });
        }, 1000);
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(AnalogDisplay, { time: this.state.currentTime }),
            React.createElement(DigitalDisplay, { time: this.state.currentTime })
        );
    }
}

const HelloWorld = function (props) {
    return React.createElement(
        'h1',
        props,
        'Hello!'
    );
};

function Link(props) {
    return React.createElement(
        'a',
        { href: props.href, target: '_blank', className: 'btn btn-primary' },
        props.text
    );
}

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            githubName: 'dan-fritchman',
            books: ['book1', 'book2', 'book3']
        };
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                this.state.githubName
            ),
            React.createElement(Clock, null),
            React.createElement(HelloWorld, null),
            React.createElement(Link, { text: 'GitHub', href: 'https://www.github.com' })
        );
    }
}

ReactDOM.render(React.createElement(Content, null), document.getElementById('content'));