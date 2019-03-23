import  React, { Component} from 'react';
import CardsList from './CardsList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots : [],
            searchField : ''
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) =>{
        this.setState({searchField : event.target.value});
    }

    render() {

        const filteredRobot = this.state.robots.filter(robot =>{
           return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        if(this.state.robots.length === 0){
            return <h1 className="f1 tc">Loading...</h1>
        } else {
            return (
                <div className="tc">
                    <h1 className="f1">Robot Friends</h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                    <Scroll>
                        <CardsList robots = {filteredRobot}/>
                    </Scroll>
                    
                </div>
            );
        }
    }
}

export default App;
