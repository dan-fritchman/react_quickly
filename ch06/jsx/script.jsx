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
        return <button {...btnProps}>Save</button>
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

let ClickCounterButton = function (props) { // Function-based version
    let btnProps = {
        onClick: props.handler,
        className: "btn btn-primary"
    };
    return <button {...btnProps}>Don't Click Me Please!</button>;
};

let Counter = function (props) {
    return <span>Clicked {props.value} Times!</span>
};

class HasCounterButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({counter: ++this.state.counter});
    }

    render() {
        return (
            <div>
                <ClickCounterButton handler={this.handleClick}/>
                <Counter value={this.state.counter}/>
            </div>
        );
    }
}

class MouseOverDiv extends React.Component {
    render() {
        let logMouseOver = (event) => {
            console.log('Mouse Over Bubbling Event!');
            console.dir(event, this);
        };
        let logMouseOverCapture = (event) => {
            console.log('Mouse Over Capture Event!');
            console.dir(event, this);
        };
        let divProps = {
            style: {border: '1px solid red'},
            onMouseOver: logMouseOver,
            onMouseOverCapture: logMouseOverCapture,
        };
        return <div>
            <div {...divProps}>
                <SaveButton/>
                <HasCounterButton/>
            </div>
        </div>;
    }
}

class Radio extends React.Component { // Don't think this is what Mazat intended.
    constructor(props) {
        super(props);
        this.handleResize = this.handleResize.bind(this);
        let order = props.order;
        let i = 1;
        this.state = {
            outerStyle: this.getStyle(4, i),
            innerStyle: this.getStyle(1, i),
            selectedStyle: this.getStyle(2, i),
            taggerStyle: {top: order * 20, width: 25, height: 25}
        }
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
        })
    }

    render() {
        return <div>
            <div className="radio-tagger" style={this.state.taggerStyle}>
                <input type="radio" name={this.props.name} id={this.props.id}>
                </input>
                <label htmlFor={this.props.id}>
                    <div className="radio-text" style={this.state.textStyle}>
                        {this.props.label}
                    </div>
                    <div className="radio-outer" style={this.state.outerStyle}>
                        <div className={"radio-inner"} style={this.state.innerStyle}>
                            <div className={"radio-selected"} style={this.state.selectedStyle}>
                            </div>
                        </div>
                    </div>
                </label>
            </div>
        </div>
    }
}


class Content extends React.Component {
    render() {
        return <div>
            <MouseOverDiv/>
            <Radio order={3} id="???" label="!!!"/>
        </div>
    }
}

ReactDOM.render(
    <Content/>,
    document.getElementById('content')
);

