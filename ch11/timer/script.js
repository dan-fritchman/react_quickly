/*
Chapter 11
Timer
*/

class TimerWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = { timeLeft: null, timer: null };
        this.startTimer = this.startTimer.bind(this);
    }

    startTimer(timeLeft) {
        clearInterval(this.state.timer);
        let timer = setInterval(() => {
            console.log("Updating Timer");
            var timeLeft = this.state.timeLeft - 1;
            if (timeLeft == 0) {
                clearInterval(timer);
            }
            this.setState({ timeLeft: timeLeft });
        }, 1000);
        console.log("Starting Timer");
        return this.setState({ timeLeft: timeLeft, timer: timer });
    }

    render() {
        return React.createElement(
            "div",
            { className: "row-fluid" },
            React.createElement(
                "h1",
                null,
                "Timer"
            ),
            React.createElement(
                "div",
                { className: "btn-group", role: "group" },
                React.createElement(Button, { time: 5, startTimer: this.startTimer }),
                React.createElement(Button, { time: 10, startTimer: this.startTimer }),
                React.createElement(Button, { time: 15, startTimer: this.startTimer })
            ),
            React.createElement(Timer, { timeLeft: this.state.timeLeft }),
            React.createElement("audio", { id: "end-of-time", src: "flute_c_long_01.wav", preload: "auto" })
        );
    }
}

function Timer(props) {
    if (props.timeLeft == 0) {
        document.getElementById('end-of-time').play();
    }
    if (props.timeLeft == null || props.timeLeft == 0) {
        return React.createElement("div", null);
    }
    return React.createElement(
        "h1",
        null,
        "Time Left: ",
        props.timeLeft
    );
}

class Button extends React.Component {
    startTimer(event) {
        console.log("Button Starting Timer");
        return this.props.startTimer(this.props.time);
    }

    render() {
        return React.createElement(
            "button",
            { type: "button",
                className: "btn-default btn",
                onClick: this.startTimer.bind(this) },
            this.props.time,
            " Seconds"
        );
    }
}

function Content(_) {
    return React.createElement(
        "div",
        { id: 'timer-app' },
        React.createElement(TimerWrapper, null)
    );
}

ReactDOM.render(React.createElement(Content, null), document.getElementById('content'));
