/*
Chapter 11
Timer
*/

class TimerWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {timeLeft: null, timer: null};
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
            this.setState({timeLeft: timeLeft})
        }, 1000);
        console.log("Starting Timer");
        return this.setState({timeLeft: timeLeft, timer: timer})
    }

    render() {
        return <div className={"row-fluid"}>
            <h1>Timer</h1>
            <div className={"btn-group"} role={"group"}>
                <Button time={5} startTimer={this.startTimer}/>
                <Button time={10} startTimer={this.startTimer}/>
                <Button time={15} startTimer={this.startTimer}/>
            </div>
            <Timer timeLeft={this.state.timeLeft}/>
            <audio id={"end-of-time"} src={"flute_c_long_01.wav"} preload={"auto"}/>
        </div>
    }
}

function Timer(props) {
    if (props.timeLeft == 0) {
        document.getElementById('end-of-time').play();
    }
    if (props.timeLeft == null || props.timeLeft == 0) {
        return <div/>
    }
    return <h1>Time Left: {props.timeLeft}</h1>
}


class Button extends React.Component {
    startTimer(event) {
        console.log("Button Starting Timer");
        return this.props.startTimer(this.props.time);
    }

    render() {
        return <button type={"button"}
                       className={"btn-default btn"}
                       onClick={this.startTimer.bind(this)}>
            {this.props.time} Seconds
        </button>
    }
}

function Content(_) {
    return <div id={'timer-app'}>
        <TimerWrapper/>
    </div>
}

ReactDOM.render(
    <Content/>,
    document.getElementById('content')
);