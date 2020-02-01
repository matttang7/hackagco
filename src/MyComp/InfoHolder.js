import React from 'react';

export default class InfoHolder extends React.Component {
    constructor(props) {
        super(props); 

        this.state = {
            infoName: this.props.infoName,
            infoValue: this.props.infoValue
        }

    }

    render() {
        return(
            <div>
                Name: {this.state.infoName}
                <br/>
                Value: {this.state.infoValue}
            </div>
        )
    }

}
