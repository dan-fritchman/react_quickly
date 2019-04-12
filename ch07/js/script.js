function RadioInput(props) {
    return React.createElement("input", { type: "radio",
        name: "radioGroup",
        value: props.name,
        checked: props.checked,
        onChange: props.handler });
}

class RadioForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleRadio = this.handleRadio.bind(this);
        this.state = {
            radioGroup: {
                angular: false,
                react: true,
                polymer: false
            }
        };
    }

    handleRadio(event) {
        let obj = {};
        obj[event.target.value] = event.target.checked;
        this.setState({ radioGroup: obj });
    }

    render() {
        return React.createElement(
            "form",
            null,
            React.createElement("input", { type: "radio",
                name: "radioGroup",
                value: "angular",
                checked: this.state.radioGroup['angular'],
                onChange: this.handleRadio }),
            React.createElement("input", { type: "radio",
                name: "radioGroup",
                value: "react",
                checked: this.state.radioGroup['react'],
                onChange: this.handleRadio }),
            React.createElement("input", { type: "radio",
                name: "radioGroup",
                value: "polymer",
                checked: this.state.radioGroup['polymer'],
                onChange: this.handleRadio })
        );
        // return (
        //     <form>
        //         <RadioInput
        //             name={"angular"}
        //             checked={this.state.radioGroup['angular']}
        //             handler={this.handleRadio}/>
        //         <RadioInput
        //             name={"react"}
        //             checked={this.state.radioGroup['react']}
        //             handler={this.handleRadio}/>
        //         <RadioInput
        //             name={"polymer"}
        //             checked={this.state.radioGroup['polymer']}
        //             handler={this.handleRadio}/>
        //     </form>
        // );
    }
}

function CheckboxInput(props) {
    return React.createElement("input", {
        type: "checkbox",
        name: "checkboxGroup",
        value: props.value,
        checked: props.checked,
        onChange: props.handler
    });
}

class CheckBoxForm extends React.Component {
    handleCheckbox(event) {
        console.log(event);
        let obj = Object.assign(this.state.checkboxGroup);
        obj[event.target.value] = event.target.checked;
        this.setState({ checkboxGroup: obj });
    }

    constructor(props) {
        super(props);
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.state = {
            checkboxGroup: {
                node: false,
                react: true,
                express: false,
                mongodb: false
            }
        };
    }

    render() {
        return React.createElement(
            "form",
            null,
            React.createElement(CheckboxInput, {
                value: "node",
                checked: this.state.checkboxGroup["node"],
                onChange: this.handleCheckbox
            }),
            React.createElement(CheckboxInput, {
                value: "react",
                checked: this.state.checkboxGroup["react"],
                onChange: this.handleCheckbox
            }),
            React.createElement(CheckboxInput, {
                value: "express",
                checked: this.state.checkboxGroup["express"],
                onChange: this.handleCheckbox
            }),
            React.createElement(CheckboxInput, {
                value: "mongodb",
                checked: this.state.checkboxGroup["mongodb"],
                onChange: this.handleCheckbox
            })
        );
    }
}

class TextArea extends React.Component {
    constructor(state) {
        super(state);
        this.state = {
            description: "Testing 123"
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log(event.target.value);
    }

    render() {
        return React.createElement("input", {
            type: "text",
            name: "description",
            onChange: this.handleChange,
            defaultValue: this.state.description });
    }
}

class AccountNumber extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            accountNumber: ''
        };
    }

    handleChange(event) {
        console.log(event);
        console.log("Typed: ", event.target.value);
        this.setState({ accountNumber: event.target.value.replace(/[^0-9]/ig, '') });
    }

    render() {
        return React.createElement(
            "div",
            null,
            "Account Number:",
            React.createElement("input", {
                type: "text",
                onChange: this.handleChange,
                placeholder: "123456",
                value: this.state.accountNumber
            }),
            React.createElement("br", null),
            React.createElement(
                "span",
                null,
                React.createElement(
                    "p",
                    null,
                    this.state.accountNumber.length > 0 ? 'You entered: ' + this.state.accountNumber : ''
                )
            )
        );
    }
}

class Prompt extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.prompt = 'Please enter your email to win $1B!';
    }

    submit(event) {
        let emailAddress = this.refs.emailAddress;
        console.log(emailAddress);
        let comments = this.refs.comments;
        console.log(comments);
        console.log(ReactDOM.findDOMNode(emailAddress).value);
        console.log(ReactDOM.findDOMNode(comments).value);
    }

    render() {
        return React.createElement(
            "div",
            { className: "well" },
            React.createElement(
                "div",
                { className: "form-group" },
                React.createElement(
                    "p",
                    null,
                    this.prompt
                ),
                React.createElement("input", {
                    type: "text",
                    defaultValue: "dan@fritch.mn",
                    ref: "emailAddress",
                    className: "form-control" })
            ),
            React.createElement(
                "div",
                { className: "form-group" },
                React.createElement(
                    "p",
                    null,
                    "Comments: "
                ),
                React.createElement("input", {
                    ref: "comments",
                    className: "form-control",
                    defaultValue: "Me pleez!" })
            ),
            React.createElement(
                "div",
                { className: "form-group" },
                React.createElement(
                    "a",
                    { className: "btn btn-primary", value: "Submit", onClick: this.submit },
                    "Submit"
                )
            )
        );
    }
}

function Content(_) {
    return React.createElement(
        "div",
        null,
        React.createElement(RadioForm, null),
        React.createElement(CheckBoxForm, null),
        React.createElement(TextArea, null),
        React.createElement(AccountNumber, null),
        React.createElement(Prompt, null)
    );
}

ReactDOM.render(React.createElement(Content, null), document.getElementById('content'));