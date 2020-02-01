import React from 'react';

export default class MyComp extends React.Component {
    constructor(props) {
        super(props); 

        this.state = {
            data: [],
            isLoading: true,
            //evtSource: new EventSource('http://192.168.95.1:5560/api/UID/stream/v2?uidUpdateInterval=1000&uidList=190')
            links: ['http://54.83.159.193/get_prediction?engine_load=99.0&engine_coolant_temp=87.0&engine_hours=1220400.0&engine_oil_press=440000.0&fuel_delivery_pressure=568000.0&hydrostatic_drive_pressure=27280000.0&hydr_oil_temp=75.0&scr_tank_level=95.2', 'http://54.83.159.193/get_prediction?engine_load=67.0&engine_coolant_temp=80.0&engine_hours=1121040.0&engine_oil_press=344000.0&fuel_delivery_pressure=552000.0&hydrostatic_drive_pressure=2510000.0&hydr_oil_temp=58.0&scr_tank_level=100.0', 'http://54.83.159.193/get_prediction?engine_load=59.0&engine_coolant_temp=81.0&engine_hours=254520.0&engine_oil_press=380000.0&fuel_delivery_pressure=532000.0&hydrostatic_drive_pressure=2590000.0&hydr_oil_temp=48.0&scr_tank_level=100.0', 'http://54.83.159.193/get_prediction?engine_load=49.0&engine_coolant_temp=83.0&engine_hours=1338120.0&engine_oil_press=288000.0&fuel_delivery_pressure=532000.0&hydrostatic_drive_pressure=2510000.0&hydr_oil_temp=64.0&scr_tank_level=99.2', 'http://54.83.159.193/get_prediction?engine_load=47.0&engine_coolant_temp=81.0&engine_hours=343080.0&engine_oil_press=484000.0&fuel_delivery_pressure=572000.0&hydrostatic_drive_pressure=2690000.0&hydr_oil_temp=55.0&scr_tank_level=99.6', 'http://54.83.159.193/get_prediction?engine_load=73.0&engine_coolant_temp=82.0&engine_hours=213480.0&engine_oil_press=488000.0&fuel_delivery_pressure=584000.0&hydrostatic_drive_pressure=12120000.0&hydr_oil_temp=63.0&scr_tank_level=86.8', 'http://54.83.159.193/get_prediction?engine_load=100.0&engine_coolant_temp=88.0&engine_hours=1010880.0&engine_oil_press=420000.0&fuel_delivery_pressure=548000.0&hydrostatic_drive_pressure=34120000.0&hydr_oil_temp=69.0&scr_tank_level=100.0', 'http://54.83.159.193/get_prediction?engine_load=58.0&engine_coolant_temp=78.0&engine_hours=591480.0&engine_oil_press=348000.0&fuel_delivery_pressure=536000.0&hydrostatic_drive_pressure=2550000.0&hydr_oil_temp=51.0&scr_tank_level=100.0', 'http://54.83.159.193/get_prediction?engine_load=100.0&engine_coolant_temp=82.0&engine_hours=964440.0&engine_oil_press=456000.0&fuel_delivery_pressure=544000.0&hydrostatic_drive_pressure=35800000.0&hydr_oil_temp=58.0&scr_tank_level=85.6', 'http://54.83.159.193/get_prediction?engine_load=60.0&engine_coolant_temp=80.0&engine_hours=686880.0&engine_oil_press=352000.0&fuel_delivery_pressure=520000.0&hydrostatic_drive_pressure=2440000.0&hydr_oil_temp=66.0&scr_tank_level=83.2', 'http://54.83.159.193/get_prediction?engine_load=72.0&engine_coolant_temp=80.0&engine_hours=306000.0&engine_oil_press=476000.0&fuel_delivery_pressure=536000.0&hydrostatic_drive_pressure=25240000.0&hydr_oil_temp=66.0&scr_tank_level=72.8', 'http://54.83.159.193/get_prediction?engine_load=66.0&engine_coolant_temp=81.0&engine_hours=765720.0&engine_oil_press=348000.0&fuel_delivery_pressure=532000.0&hydrostatic_drive_pressure=2490000.0&hydr_oil_temp=55.0&scr_tank_level=93.2', 'http://54.83.159.193/get_prediction?engine_load=67.0&engine_coolant_temp=77.0&engine_hours=1157400.0&engine_oil_press=596000.0&fuel_delivery_pressure=584000.0&hydrostatic_drive_pressure=6520000.0&hydr_oil_temp=39.0&scr_tank_level=95.6', 'http://54.83.159.193/get_prediction?engine_load=100.0&engine_coolant_temp=84.0&engine_hours=651780.0&engine_oil_press=436000.0&fuel_delivery_pressure=524000.0&hydrostatic_drive_pressure=36710000.0&hydr_oil_temp=68.0&scr_tank_level=98.4', 'http://54.83.159.193/get_prediction?engine_load=100.0&engine_coolant_temp=83.0&engine_hours=720360.0&engine_oil_press=452000.0&fuel_delivery_pressure=536000.0&hydrostatic_drive_pressure=39590000.0&hydr_oil_temp=65.0&scr_tank_level=62.0', 'http://54.83.159.193/get_prediction?engine_load=59.0&engine_coolant_temp=82.0&engine_hours=1329660.0&engine_oil_press=472000.0&fuel_delivery_pressure=564000.0&hydrostatic_drive_pressure=3200000.0&hydr_oil_temp=64.0&scr_tank_level=100.0', 'http://54.83.159.193/get_prediction?engine_load=100.0&engine_coolant_temp=81.0&engine_hours=606960.0&engine_oil_press=452000.0&fuel_delivery_pressure=528000.0&hydrostatic_drive_pressure=33850000.0&hydr_oil_temp=68.0&scr_tank_level=99.2', 'http://54.83.159.193/get_prediction?engine_load=53.0&engine_coolant_temp=75.0&engine_hours=252360.0&engine_oil_press=336000.0&fuel_delivery_pressure=528000.0&hydrostatic_drive_pressure=2530000.0&hydr_oil_temp=56.0&scr_tank_level=100.0', 'http://54.83.159.193/get_prediction?engine_load=66.0&engine_coolant_temp=84.0&engine_hours=773100.0&engine_oil_press=492000.0&fuel_delivery_pressure=572000.0&hydrostatic_drive_pressure=10230000.0&hydr_oil_temp=64.0&scr_tank_level=88.8', 'http://54.83.159.193/get_prediction?engine_load=39.0&engine_coolant_temp=84.0&engine_hours=892980.0&engine_oil_press=460000.0&fuel_delivery_pressure=568000.0&hydrostatic_drive_pressure=2710000.0&hydr_oil_temp=67.0&scr_tank_level=76.8', 'http://54.83.159.193/get_prediction?engine_load=53.0&engine_coolant_temp=82.0&engine_hours=739260.0&engine_oil_press=476000.0&fuel_delivery_pressure=536000.0&hydrostatic_drive_pressure=2790000.0&hydr_oil_temp=53.0&scr_tank_level=96.4', 'http://54.83.159.193/get_prediction?engine_load=1.0&engine_coolant_temp=81.0&engine_hours=1000620.0&engine_oil_press=464000.0&fuel_delivery_pressure=548000.0&hydrostatic_drive_pressure=9040000.0&hydr_oil_temp=64.0&scr_tank_level=47.2', 'http://54.83.159.193/get_prediction?engine_load=75.0&engine_coolant_temp=83.0&engine_hours=1022940.0&engine_oil_press=448000.0&fuel_delivery_pressure=556000.0&hydrostatic_drive_pressure=19050000.0&hydr_oil_temp=75.0&scr_tank_level=100.0', 'http://54.83.159.193/get_prediction?engine_load=80.0&engine_coolant_temp=85.0&engine_hours=1362060.0&engine_oil_press=456000.0&fuel_delivery_pressure=600000.0&hydrostatic_drive_pressure=15060000.0&hydr_oil_temp=76.0&scr_tank_level=96.8', 'http://54.83.159.193/get_prediction?engine_load=100.0&engine_coolant_temp=82.0&engine_hours=1034640.0&engine_oil_press=444000.0&fuel_delivery_pressure=524000.0&hydrostatic_drive_pressure=34990000.0&hydr_oil_temp=76.0&scr_tank_level=99.6', 'http://54.83.159.193/get_prediction?engine_load=86.0&engine_coolant_temp=81.0&engine_hours=853200.0&engine_oil_press=460000.0&fuel_delivery_pressure=580000.0&hydrostatic_drive_pressure=26210000.0&hydr_oil_temp=64.0&scr_tank_level=100.0', 'http://54.83.159.193/get_prediction?engine_load=57.0&engine_coolant_temp=82.0&engine_hours=1184040.0&engine_oil_press=468000.0&fuel_delivery_pressure=552000.0&hydrostatic_drive_pressure=14290000.0&hydr_oil_temp=66.0&scr_tank_level=78.0', 'http://54.83.159.193/get_prediction?engine_load=58.0&engine_coolant_temp=77.0&engine_hours=1254060.0&engine_oil_press=336000.0&fuel_delivery_pressure=536000.0&hydrostatic_drive_pressure=2440000.0&hydr_oil_temp=66.0&scr_tank_level=72.8', 'http://54.83.159.193/get_prediction?engine_load=56.0&engine_coolant_temp=76.0&engine_hours=1050120.0&engine_oil_press=332000.0&fuel_delivery_pressure=544000.0&hydrostatic_drive_pressure=2550000.0&hydr_oil_temp=62.0&scr_tank_level=89.6', 'http://54.83.159.193/get_prediction?engine_load=70.0&engine_coolant_temp=83.0&engine_hours=1342080.0&engine_oil_press=504000.0&fuel_delivery_pressure=576000.0&hydrostatic_drive_pressure=20790000.0&hydr_oil_temp=55.0&scr_tank_level=100.0']
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
            var rand = Math.floor(Math.random() * 30)
            fetch(this.state.links[rand]).then(res => res.json())
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
                        Update
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
                    Update
                </div>
            </div>
        )
    }
}