class SaveButton extends React.Component {
    handleSave(event) {
        console.log(this, event);
    }

    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
    }

    render() {
        let btnProps = {
            onClick: this.handleSave //.bind(this)
        };
        return React.createElement(
            'button',
            btnProps,
            'Save'
        );
    }
}

// class ClickCounterButton extends React.Component {
//     render() {
//         let btnProps = {
//             onClick: this.props.handler,
//             className: "btn btn-primary"
//         };
//         return <button {...btnProps}>Don't Click Me {this.props.counter} Times!</button>;
//     }
// }

let ClickCounterButton = function (props) {
    // Function-based version
    let btnProps = {
        onClick: props.handler,
        className: "btn btn-primary"
    };
    return React.createElement(
        'button',
        btnProps,
        'Don\'t Click Me Please!'
    );
};

let Counter = function (props) {
    return React.createElement(
        'span',
        null,
        'Clicked ',
        props.value,
        ' Times!'
    );
};

class HasCounterButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({ counter: ++this.state.counter });
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(ClickCounterButton, { handler: this.handleClick }),
            React.createElement(Counter, { value: this.state.counter })
        );
    }
}

class MouseOverDiv extends React.Component {
    render() {
        let logMouseOver = event => {
            console.log('Mouse Over Bubbling Event!');
            console.dir(event, this);
        };
        let logMouseOverCapture = event => {
            console.log('Mouse Over Capture Event!');
            console.dir(event, this);
        };
        let divProps = {
            style: { border: '1px solid red' },
            onMouseOver: logMouseOver,
            onMouseOverCapture: logMouseOverCapture
        };
        return React.createElement(
            'div',
            null,
            React.createElement(
                'div',
                divProps,
                React.createElement(SaveButton, null),
                React.createElement(HasCounterButton, null)
            )
        );
    }
}

class Radio extends React.Component {
    // Don't think this is what Mazat intended.
    constructor(props) {
        super(props);
        this.handleResize = this.handleResize.bind(this);
        let order = props.order;
        let i = 1;
        this.state = {
            outerStyle: this.getStyle(4, i),
            innerStyle: this.getStyle(1, i),
            selectedStyle: this.getStyle(2, i),
            taggerStyle: { top: order * 20, width: 25, height: 25 }
        };
    }

    getStyle(i, m) {
        let value = i * m;
        return {
            top: value,
            bottom: value,
            left: value,
            right: value
        };
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize(event) {
        let w = 1 + Math.round(window.innerWidth / 300);
        this.setState({
            taggerStyle: {
                top: this.props.order * w * 10,
                width: w * 10,
                height: w * 10
            },
            textStyle: {
                left: w * 13,
                fontsize: 7 * w
            }
        });
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'div',
                { className: 'radio-tagger', style: this.state.taggerStyle },
                React.createElement('input', { type: 'radio', name: this.props.name, id: this.props.id }),
                React.createElement(
                    'label',
                    { htmlFor: this.props.id },
                    React.createElement(
                        'div',
                        { className: 'radio-text', style: this.state.textStyle },
                        this.props.label
                    ),
                    React.createElement(
                        'div',
                        { className: 'radio-outer', style: this.state.outerStyle },
                        React.createElement(
                            'div',
                            { className: "radio-inner", style: this.state.innerStyle },
                            React.createElement('div', { className: "radio-selected", style: this.state.selectedStyle })
                        )
                    )
                )
            )
        );
    }
}

class Content extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(MouseOverDiv, null),
            React.createElement(Radio, { order: 3, id: '???', label: '!!!' })
        );
    }
}

ReactDOM.render(React.createElement(Content, null), document.getElementById('content'));