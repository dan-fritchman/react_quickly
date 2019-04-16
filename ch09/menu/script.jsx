class Menu extends React.Component {
    render() {
        let menus = [
            'Home',
            'About',
            'Services',
            'Portfolio',
            'Contact Us'
        ];

        let children = menus.map((v, i) => {
            return <Link label={v} key={i}/>;
        });
        return <div>{children}</div>
    }
}

class Link extends React.Component {
    render() {
        const url = '/' +
            this.props.label.toLowerCase()
                .trim()
                .replace(' ', '-');

        return <div>
            <a href={url}>{this.props.label}</a>
        </div>
    }
}

function Content(_) {
    return <Menu/>
}

ReactDOM.render(
    <Content/>,
    document.getElementById('content')
);