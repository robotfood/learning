// Class based react component, required for defining components that
// need to communicate with other components. Only components that have state,
// functional components don't have state.

// Import 'React', and assign property component to the variable component
import React, {Component} from 'react';

class SearchBar extends Component {

    // All JavaScript classes have a function called Constructor, which is the first and only 
    // function called automatically when a new class instance is created. Reseerved for
    // doing setup.
    // 'Component' itself already has a constructor so we're using its constructor.
    constructor(props) {
        super(props);
        
        // Whenever we want to use state, we use this.state and assign it a value.
        // term is the search term string.
        // The will contain properties we care about storing in state.
        this.state = {term: 'starting value'};
    }

    render() {
        // To handle standard events, write the event name then assign a handler function
        // Need curly braces to use normal JavaScript
        // 'onChange' is a React bound name/property

        // Can use an arrow function to call the logger directly OR can call onInputChange below

        // Should only ever use this.setState function, never assign the value of state 
        // directly. This helps maintain continuity within the app, need to keep React in the loop
        // with state changes and this accomplishes that.
        return (
            <div>
              <input 
                // When you add the value, it becomes a controlled component/form element.
                // Has its value changed by state. Instead of state being updated AND form 
                // element just happening to have the same value, the value is now 
                // explicitly defined by the state. Component re-renders and new value 
                // is set.
                value={this.state.term}
                onChange={event => this.setState({term: event.target.value})} />
            </div>
        );
    }

    // Event handling has two steps, 
    // 1) write code to handle the event 
    // 2) write code to notify another component
    onInputChange(event) {
        console.log(event.target.value);
    }
}

export default SearchBar;