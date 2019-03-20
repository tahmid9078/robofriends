import  React, { Component} from 'react';
import CardsList from './CardsList';
import SearchBox from './SearchBox';
import { robots } from './robots';


class App extends Component {
    constructor(){
        super();
        this.state = {
            robots : robots,
            searchField : ''
        };
    }

    onSearchChange = (event) =>{
        this.setState({searchField : event.target.value});
    }

    render() {

        const filteredRobot = this.state.robots.filter(robot =>{
           return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });

        return (
            <div className="tc">
                <h1>Robot Friends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <CardsList robots = {filteredRobot}/>
            </div>
        );
    }
}

export default App;
