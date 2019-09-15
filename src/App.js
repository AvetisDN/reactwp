import React, { Component } from 'react';
import Header from './components/header';
import LoadingBar from 'react-top-loading-bar';
import './App.css';

class App extends Component{
    state = {
        loadingBarProgress: 0
    };

    complete = () => {
        this.setState({ loadingBarProgress: 100 });
    };
    onLoaderFinished = () => {
        this.setState({ loadingBarProgress: 0 });
    };

    componentDidMount() {
        this.complete();
    }

    render() {
    return (
        <div>
            <LoadingBar
                progress={this.state.loadingBarProgress}
                height={3}
                color='#f11946'
                onLoaderFinished={() => this.onLoaderFinished()}
            />
            <Header/>
        </div>
    );
  }

}

export default App;
