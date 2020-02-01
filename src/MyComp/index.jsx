import React from 'react';

export default class MyComp extends React.Component {
    constructor(props) {
        super(props); 

        this.state = {
            data: [],
            isLoading: true,
            //evtSource: new EventSource('http://192.168.95.1:5560/api/UID/stream/v2?uidUpdateInterval=1000&uidList=190')
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
            fetch('http://54.83.159.193/get_prediction?engine_load=99&engine_coolant_temp=87&engine_hours=1220400&engine_oil_press=440000&fuel_delivery_pressure=568000&hydrostatic_drive_pressure=27280000&hydr_oil_temp=75&scr_tank_level=95.2').then(res => res.json())
            .then(res => {
                var arr = [];
                Object.keys(res).forEach(function(key) {
                arr.push(key + ': ' + res[key]);
                });
                this.setState({
                    data: arr,
                    isLoading: false
                })
            })
            
            console.log(this.state.data)
        // const { evtSource } = this.state;
        // console.log("clicked")
        // console.log(evtSource.readyState)
        // evtSource.addEventListener("uidUpdate", function(e) {
        //     console.log("reached")
        //     console.log(JSON.parse(e.data))
        //     var value = JSON.parse(e.data).liveUIDs[0].value
        //     console.log(value)
        //     var vdata = []
        //     vdata = vdata.concat(value)
        //     this.handleUpdate(vdata)
        // }.bind(this))
          
        // this.setState({
        //     data: [5,9,10],
        //     isLoading: false,
        // })
    }

    renderMachineValues() {
        const { data } = this.state;
        console.log(data);
        return data.map( function(value, index) {
            return <p key={value}>{value}</p>
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
                    done 
                </div>
            </div>
        )
    }
}