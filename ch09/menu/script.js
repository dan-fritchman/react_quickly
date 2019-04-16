class Menu extends React.Component {
    // render() {
    //     return (
    //         <div>
    //
    //         </div>
    //     );
    // }
    render() {
        let menus = [
            'Home',
            'About',
            'Services',
            'Portfolio',
            'Contact Us'
        ];

        let children = menus.map((v, i) => {
            return React.createElement('div',
                {key: i},
                React.createElement(Link, {label: v}));
        });

        return React.createElement('div', null, children);
    }
}

class Link extends React.Component {
    // render() {
    //     return (
    //         <div>
    //
    //         </div>
    //     );
    // }
    render() {
        const url = '/' +
            this.props.label.toLowerCase()
                .trim()
                .replace(' ', '-');
        let a = React.createElement('a', {href: url}, this.props.label);
        let br = React.createElement('br');
        return React.createElement('div', null, a, br);
    }
}

function Content(_) {
    return React.createElement(Menu, null);
}

ReactDOM.render(
    Content(),
    document.getElementById('content')
);