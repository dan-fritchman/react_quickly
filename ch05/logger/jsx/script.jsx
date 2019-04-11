const assert = console.assert;

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.launchClock();
        this.state = {
            counter: 0,
            currentTime: (new Date()).toLocaleString()
        }
    }

    launchClock() {
        setInterval(() => {
            this.setState({
                counter: ++this.state.counter,
                currentTime: (new Date()).toLocaleString()
            })
        }, 1000)
    }

    render() {
        return <Logger time={this.state.currentTime}></Logger>
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
        return <p>{this.props.time}</p>;
    }
}

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch(this.props['data-url'])
            .then((response) => response.json())
            .then((users) => this.setState({users: users}))
    }

    render() {
        return <div className="container">
            <h1>List of Users</h1>
            <table className="table-striped table-condensed table table-bordered table-hover">
                <tbody>{this.state.users.map((user) =>
                    <tr key={user.id}>
                        <td>{user.first.name}</td>
                        <td>{user.email}</td>
                        <td>{user.ip_address}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    }
}

ReactDOM.render(
    <Content/>,
    document.getElementById('content')
);

