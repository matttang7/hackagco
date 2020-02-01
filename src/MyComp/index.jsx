import React from 'react';

export default class MyComp extends React.Component {
    constructor(props) {
        super(props); 

        this.state = {
            data: [],
            isLoading: true,
            evtSource: new EventSource('http://192.168.95.1:5560/api/UID/stream/v2?uidUpdateInterval=1000&uidList=190')
        }
        
        this.apiRequest = this.apiRequest.bind(this);
        this.renderMachineValues = this.renderMachineValues.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleUpdate(value){
        this.setState({
            data: value,
            isLoading: false,
        })
    }
    apiRequest() {
        /*
            fetch(url, {
                method: 'GET',
                headers,
                body,
            }).then(res => res.json())
            .then(res => {
                this.setState({
                    data: res
                })
            })
            event source 
        */
        const { evtSource } = this.state;
        console.log("clicked")
        console.log(evtSource.readyState)
        evtSource.addEventListener("uidUpdate", function(e) {
            console.log("reached")
            console.log(JSON.parse(e.data))
            var value = JSON.parse(e.data).liveUIDs[0].value
            console.log(value)
            var vdata = []
            vdata = vdata.concat(value)
            this.handleUpdate(vdata)
        }.bind(this))
        evtSource.onmessage = function(e) {
            //var newElement = document.createElement("li");
          
            //newElement.textContent = "message: " + e.data;
            console.log(e.data)
            this.setState({
                data: e.data,
                isLoading: false,
            })
          }
          
        // this.setState({
        //     data: [5,9,10],
        //     isLoading: false,
        // })
    }

    renderMachineValues() {
        const { data } = this.state;
        console.log(data);
        return data.map( function(value, index) {
            return <p key={value}>Engine Speed: {value}</p>
        })
    }

    render() {
        
        const { data, isLoading } = this.state;
        if(isLoading) {
            return  (
                <div> Loading... 
                    <div style={{backgroundColor: 'red', width: '200px', height: '200px'}} onClick={this.apiRequest}>
                        hi
                    </div>
                </div>
            );
        }

        return ( 
            <div>
                {
                    this.renderMachineValues()
                    
                }
                <div style={{backgroundColor: 'red', width: '200px', height: '200px'}} onClick={this.apiRequest}>
                    hi
                </div>
            </div>
        )
    }
}