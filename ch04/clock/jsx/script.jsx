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
        return <div>{this.state.currentTime}</div>
    }
}

const HelloWorld = function (props) {
    return <h1 {...props}>Hello!</h1>
};

function Link(props){
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

