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
            "div",
            null,
            this.state.currentTime
        );
    }
}

const HelloWorld = function (props) {
    return React.createElement(
        "h1",
        props,
        "Hello!"
    );
};

function Link(props) {
    return React.createElement(
        "a",
        { href: props.href, target: "_blank", className: "btn btn-primary" },
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
            "div",
            null,
            React.createElement(
                "p",
                null,
                this.state.githubName
            ),
            React.createElement(Clock, null),
            React.createElement(HelloWorld, null),
            React.createElement(Link, { text: "GitHub", href: "https://www.github.com" })
        );
    }
}

ReactDOM.render(React.createElement(Content, null), document.getElementById('content'));