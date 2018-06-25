import React from "react";
import ReactDOM from "react-dom";


class MainPage extends React.Component {
    render() {
        return (
            <Header/>
        );
    }
}

class Header extends React.Component {
    render() {
        return(
            <header>
                <h1> netflixroulette</h1>
                <SearchPanel/>
            </header>
        );
    }
}

class SearchPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        console.log('The request was sent to back - end server');
        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <span>find your movie</span><br/>
                <input type='text' value={this.state.value} onChange={this.handleChange}/><br/>

                <RadioButton title='title'/>
                <RadioButton title='genre'/>

                <input type='submit' value='submit'/>
            </form>
        );
    }
}

class RadioButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: false};

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({value: !value});
        console.log(this.state.value);
    }

    render() {
        return(
            <button onClick={this.onClick}>{this.props.title}</button>
        );
    }
}

ReactDOM.render(<MainPage/>, document.getElementById("root"));