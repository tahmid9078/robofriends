import React, { Component } from 'react';
import Card from './Card';

class CardsList extends Component {
    
    render() {
        const robotsArray = this.props.robots.map((robot , i) =>{
            return (
                    <Card 
                    key={robot.id}
                    id={robot.id}
                    name={robot.name}
                    email={robot.email}/>
                )
       });
        return (
            <div>
                { robotsArray }
            </div>
        );
    }
}

export default CardsList;