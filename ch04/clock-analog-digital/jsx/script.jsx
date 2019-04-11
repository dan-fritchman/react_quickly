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
        borderColor: 'green'
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
    return <div>
        <div style={dialStyle}>
            <div style={secondHandStyle}></div>
            <div style={minuteHandStyle}></div>
            <div style={hourHandStyle}></div>
        </div>
    </div>
};

const DigitalDisplay = function (props) {
    return <h2>{props.time}</h2>
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
        return <div>
            <AnalogDisplay time={this.state.currentTime}/>
            <DigitalDisplay time={this.state.currentTime}/>
        </div>
    }
}

const HelloWorld = function (props) {
    return <h1 {...props}>Hello!</h1>
};

function Link(props) {
    return <a href={props.href} target="_blank" className="btn btn-primary">{props.text}</a>
}

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            githubName: 'dan-fritchman',
            books: [
                'book1',
                'book2',
                'book3'
            ]
        }
    }

    render() {
        return <div>
            <p>{this.state.githubName}</p>
            <Clock/>
            <HelloWorld/>
            <Link text="GitHub" href="https://www.github.com"/>
        </div>
    }
}

ReactDOM.render(
    <Content/>,
    document.getElementById('content')
);

