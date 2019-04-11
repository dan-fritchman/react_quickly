const assert = console.assert;

// window.addEventListener('beforeunload', function () {
//     let confirmationMessage = 'Do you really want to close?'
//     e.returnValue = confirmationMessage;
//     return confirmationMessage;
// });

class Note extends React.Component {
    confirmLeave(e) {
        let confirmationMessage = 'Do you really want to close?';
        e.returnValue = confirmationMessage;
        return confirmationMessage;
    }

    componentDidMount() {
        console.log('Attaching confirmLeave');
        window.addEventListener('beforeunload', this.confirmLeave);
    }

    componentWillUnmount() {
        console.log('Removing confirmLeave');
        window.removeEventListener('beforeunload', this.confirmLeave);
    }

    render() {
        console.log('Rendering!');
        return React.createElement(
            'h1',
            null,
            'Here!'
        );
    }
}

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.launchClock();
        this.state = {
            secondsLeft: 5
        };
    }

    decr() {
        if (this.state.secondsLeft > 0) {
            this.setState({
                secondsLeft: --this.state.secondsLeft
            });
        }
    }

    launchClock() {
        // Not sure why we need this `bind` bit.
        setInterval(this.decr.bind(this), 1000);
    }

    render() {
        if (this.state.secondsLeft == 0) {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    'Note was remove after 5 seconds.'
                )
            );
        }
        return React.createElement(Note, { secondsLeft: this.state.secondsLeft });
    }
}

ReactDOM.render(React.createElement(Content, null), document.getElementById('content'));