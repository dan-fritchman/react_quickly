var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

class Button extends React.Component {
    render() {
        return React.createElement(
            "button",
            {
                className: "btn",
                onClick: this.props.handleClick },
            this.props.buttonLabel
        );
    }
}

Button.defaultProps = { buttonLabel: 'Submit' };

// Button.propTypes = {buttonLabel: PropTypes.string};

class Logo extends React.Component {
    render() {
        return React.createElement("img", { alt: "logo.png",
            onClick: this.props.handleClick,
            width: 40,
            src: "logo.png"
        });
    }
}

class Link extends React.Component {
    render() {
        return React.createElement(
            "a",
            {
                onClick: this.props.handleClick },
            this.props.label
        );
    }
}

function Wrapper(props) {
    return React.createElement(
        "div",
        { className: "content-wrapper" },
        props.children
    );
}

const LoadWebsite = Component => {
    class _LoadWebsite extends React.Component {
        constructor(props) {
            super(props);
            this.state = { label: 'Run' };
            this.state.handleClick = this.handleClick.bind(this);
        }

        getUrl() {
            return 'https://hw21.github.io';
        }

        componentDidMount() {
            console.log(ReactDOM.findDOMNode(this));
        }

        render() {
            console.log(this.state);
            return React.createElement(Component, _extends({}, this.state, this.props));
        }

        handleClick(event) {
            var iframe = document.getElementById('frame').src = this.getUrl();
        }
    }

    _LoadWebsite.displayName = 'EnhancedComponent';
    return _LoadWebsite;
};

function Content(_) {
    const EnhancedButton = LoadWebsite(Button);
    const EnhancedLogo = LoadWebsite(Logo);
    const EnhancedLink = LoadWebsite(Link);

    return React.createElement(
        "div",
        null,
        React.createElement(Button, { buttonLabel: "Start" }),
        React.createElement(Button, null),
        React.createElement(
            Wrapper,
            null,
            React.createElement(
                "p",
                null,
                "I'm a p!"
            )
        ),
        React.createElement(
            Wrapper,
            null,
            React.createElement(
                "h3",
                null,
                "I'm an h3!"
            )
        ),
        React.createElement(EnhancedButton, null),
        React.createElement(EnhancedLogo, null),
        React.createElement(EnhancedLink, null),
        React.createElement("iframe", { id: "frame", src: "", width: 600, height: 500 })
    );
}

ReactDOM.render(React.createElement(Content, null), document.getElementById('content'));