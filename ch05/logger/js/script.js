const assert = console.assert;

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.launchClock();
        this.state = {
            counter: 0,
            currentTime: new Date().toLocaleString()
        };
    }

    launchClock() {
        setInterval(() => {
            this.setState({
                counter: ++this.state.counter,
                currentTime: new Date().toLocaleString()
            });
        }, 1000);
    }

    render() {
        return React.createElement(Logger, { time: this.state.currentTime });
    }
}

class Logger extends React.Component {
    constructor(props) {
        super(props);
        console.log('In constructor()');
    }

    componentWillMount() {
        console.log("In componentWillMount()");
        const this_node = ReactDOM.findDOMNode(this);
        assert(this_node === null);
        console.log(this_node);
    }

    componentDidMount() {
        console.log("In componentDidMount()");
        const this_node = ReactDOM.findDOMNode(this);
        assert(this_node != null);
        console.log(this_node);
    }

    componentWillReceiveProps(newProps) {
        console.log("In componentWillReceiveProps()");
        console.log("New props: ", newProps);
    }

    shouldComponentUpdate(newProps, newState) {
        console.log("In shouldComponentUpdate()");
        console.log("New props: ", newProps);
        console.log("New state: ", newState);
        return true;
    }

    componentWillUpdate(newProps, newState) {
        console.log("In componentWillUpdate()");
        console.log("New props: ", newProps);
        console.log("New state: ", newState);
        return true;
    }

    componentDidUpdate(oldProps, oldState) {
        console.log("In componentDidUpdate()");
        console.log("New props: ", oldProps);
        console.log("New state: ", oldState);
    }

    componentWillUnmount() {
        console.log("In componentWillUnmount()");
    }

    render() {
        return React.createElement(
            "p",
            null,
            this.props.time
        );
    }
}

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        fetch(this.props['data-url']).then(response => response.json()).then(users => this.setState({ users: users }));
    }

    render() {
        return React.createElement(
            "div",
            { className: "container" },
            React.createElement(
                "h1",
                null,
                "List of Users"
            ),
            React.createElement(
                "table",
                { className: "table-striped table-condensed table table-bordered table-hover" },
                React.createElement(
                    "tbody",
                    null,
                    this.state.users.map(user => React.createElement(
                        "tr",
                        { key: user.id },
                        React.createElement(
                            "td",
                            null,
                            user.first.name
                        ),
                        React.createElement(
                            "td",
                            null,
                            user.email
                        ),
                        React.createElement(
                            "td",
                            null,
                            user.ip_address
                        )
                    ))
                )
            )
        );
    }
}

ReactDOM.render(React.createElement(Content, null), document.getElementById('content'));