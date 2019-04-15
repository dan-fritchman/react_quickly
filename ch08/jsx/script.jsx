class Button extends React.Component {
    render() {
        return <button
            className="btn"
            onClick={this.props.handleClick}>
            {this.props.buttonLabel}
        </button>
    }
}

Button.defaultProps = {buttonLabel: 'Submit'};

// Button.propTypes = {buttonLabel: PropTypes.string};

class Logo extends React.Component {
    render() {
        return <img alt={"logo.png"}
                    onClick={this.props.handleClick}
                    width={40}
                    src={"logo.png"}
        />
    }
}

class Link extends React.Component {
    render() {
        return <a
            onClick={this.props.handleClick}>
            {this.props.label}
        </a>
    }
}

function Wrapper(props) {
    return <div className={"content-wrapper"}>
        {props.children}
    </div>
}

const LoadWebsite = (Component) => {
    class _LoadWebsite extends React.Component {
        constructor(props) {
            super(props);
            this.state = {label: 'Run'};
            this.state.handleClick = this.handleClick.bind(this);
        }

        getUrl() {
            return 'https://hw21.github.io'
        }

        componentDidMount() {
            console.log(ReactDOM.findDOMNode(this));
        }

        render() {
            console.log(this.state);
            return <Component {...this.state} {...this.props}/>
        }

        handleClick(event) {
            var iframe = document.getElementById('frame').src = this.getUrl();
        }
    }

    _LoadWebsite.displayName = 'EnhancedComponent';
    return _LoadWebsite
};

function Content(_) {
    const EnhancedButton = LoadWebsite(Button);
    const EnhancedLogo = LoadWebsite(Logo);
    const EnhancedLink = LoadWebsite(Link);

    return <div>
        <Button buttonLabel={"Start"}/>
        <Button/>
        <Wrapper>
            <p>I'm a p!</p>
        </Wrapper>
        <Wrapper>
            <h3>I'm an h3!</h3>
        </Wrapper>
        <EnhancedButton/>
        <EnhancedLogo/>
        <EnhancedLink/>
        <iframe id={"frame"} src={""} width={600} height={500}/>
    </div>
}

ReactDOM.render(
    <Content/>,
    document.getElementById('content')
);

