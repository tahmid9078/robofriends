import React, { Component } from 'react';

class Scroll extends Component {
    render() {
        return(
            <div style = { {overflowY: 'scroll', border: '2px solid black', height: '600px'} }>
                {this.props.children}
            </div>
        );
    }
}

export default Scroll;