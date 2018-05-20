// Import React libraries
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
// Import custom component with path, since it isn't a node module
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyBvPTL6NkO_IYco56K4SwvOGT2Jf85lUhA';

// React creates componentsÍ
// This is a factory that creates instances to get rendered to the DOM
class App extends Component {

    constructor(props) {
        super(props);
        this.state = { videos: [] };

        // Use JavaScript arrow function for short hand
        YTSearch({ key: API_KEY, term: "surfboards" }, (videos) => {
            this.setState({ videos });
            // ES6 shortcut, when the key and the property have the same name the 
            // above will be equal to this.setState({ videos : videos}) 
            console.log(videos);
        });

        /*
        YTSearch({ key: API_KEY, term: "surfboards" }, function (data) {
            this.setState({ videos: data });
            console.log(data);
        });
        */
    }

    // Can pass from videos from state, because App is
    // parent of VideoList. When using a functional component,
    // the properties will arrive as an argument.
    // In a class based components, props are available anywhere
    // as this.props.
    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

// ReactDOM is used to render components
// Wrong, passing the Class app not the instance
//ReactDOM.render(App); 

// Wrap with JSX tags to get an instance, render the App component which in turn renders
// the searc_bar 
ReactDOM.render(<App />, document.querySelector('.container'));