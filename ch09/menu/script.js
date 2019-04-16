class Menu extends React.Component {
    render() {
        let menus = ['Home', 'About', 'Services', 'Portfolio', 'Contact Us'];

        let children = menus.map((v, i) => {
            return React.createElement(Link, { label: v, key: i });
        });
        return React.createElement(
            'div',
            null,
            children
        );
    }
}

class Link extends React.Component {
    render() {
        const url = '/' + this.props.label.toLowerCase().trim().replace(' ', '-');

        return React.createElement(
            'div',
            null,
            React.createElement(
                'a',
                { href: url },
                this.props.label
            )
        );
    }
}

function Content(_) {
    return React.createElement(Menu, null);
}

ReactDOM.render(React.createElement(Content, null), document.getElementById('content'));
