import React from 'react';
import InfoHolder from './InfoHolder'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import '../App.css'

export default class MyComp extends React.Component {
    constructor(props) {
        super(props); 

        this.state = {
            data: [],
            isLoading: true,
            //evtSource: new EventSource('http://192.168.95.1:5560/api/UID/stream/v2?uidUpdateInterval=1000&uidList=190')
            links: ['http://54.83.159.193/get_prediction?engine_load=99.0&engine_coolant_temp=87.0&engine_hours=1220400.0&engine_oil_press=440000.0&fuel_delivery_pressure=568000.0&hydrostatic_drive_pressure=27280000.0&hydr_oil_temp=75.0&scr_tank_level=95.2', 'http://54.83.159.193/get_prediction?engine_load=67.0&engine_coolant_temp=80.0&engine_hours=1121040.0&engine_oil_press=344000.0&fuel_delivery_pressure=552000.0&hydrostatic_drive_pressure=2510000.0&hydr_oil_temp=58.0&scr_tank_level=100.0', 'http://54.83.159.193/get_prediction?engine_load=59.0&engine_coolant_temp=81.0&engine_hours=254520.0&engine_oil_press=380000.0&fuel_delivery_pressure=532000.0&hydrostatic_drive_pressure=2590000.0&hydr_oil_temp=48.0&scr_tank_level=100.0', 'http://54.83.159.193/get_prediction?engine_load=49.0&engine_coolant_temp=83.0&engine_hours=1338120.0&engine_oil_press=288000.0&fuel_delivery_pressure=532000.0&hydrostatic_drive_pressure=2510000.0&hydr_oil_temp=64.0&scr_tank_level=99.2', 'http://54.83.159.193/get_prediction?engine_load=47.0&engine_coolant_temp=81.0&engine_hours=343080.0&engine_oil_press=484000.0&fuel_delivery_pressure=572000.0&hydrostatic_drive_pressure=2690000.0&hydr_oil_temp=55.0&scr_tank_level=99.6', 'http://54.83.159.193/get_prediction?engine_load=73.0&engine_coolant_temp=82.0&engine_hours=213480.0&engine_oil_press=488000.0&fuel_delivery_pressure=584000.0&hydrostatic_drive_pressure=12120000.0&hydr_oil_temp=63.0&scr_tank_level=86.8', 'http://54.83.159.193/get_prediction?engine_load=100.0&engine_coolant_temp=88.0&engine_hours=1010880.0&engine_oil_press=420000.0&fuel_delivery_pressure=548000.0&hydrostatic_drive_pressure=34120000.0&hydr_oil_temp=69.0&scr_tank_level=100.0', 'http://54.83.159.193/get_prediction?engine_load=58.0&engine_coolant_temp=78.0&engine_hours=591480.0&engine_oil_press=348000.0&fuel_delivery_pressure=536000.0&hydrostatic_drive_pressure=2550000.0&hydr_oil_temp=51.0&scr_tank_level=100.0', 'http://54.83.159.193/get_prediction?engine_load=100.0&engine_coolant_temp=82.0&engine_hours=964440.0&engine_oil_press=456000.0&fuel_delivery_pressure=544000.0&hydrostatic_drive_pressure=35800000.0&hydr_oil_temp=58.0&scr_tank_level=85.6', 'http://54.83.159.193/get_prediction?engine_load=60.0&engine_coolant_temp=80.0&engine_hours=686880.0&engine_oil_press=352000.0&fuel_delivery_pressure=520000.0&hydrostatic_drive_pressure=2440000.0&hydr_oil_temp=66.0&scr_tank_level=83.2', 'http://54.83.159.193/get_prediction?engine_load=72.0&engine_coolant_temp=80.0&engine_hours=306000.0&engine_oil_press=476000.0&fuel_delivery_pressure=536000.0&hydrostatic_drive_pressure=25240000.0&hydr_oil_temp=66.0&scr_tank_level=72.8', 'http://54.83.159.193/get_prediction?engine_load=66.0&engine_coolant_temp=81.0&engine_hours=765720.0&engine_oil_press=348000.0&fuel_delivery_pressure=532000.0&hydrostatic_drive_pressure=2490000.0&hydr_oil_temp=55.0&scr_tank_level=93.2', 'http://54.83.159.193/get_prediction?engine_load=67.0&engine_coolant_temp=77.0&engine_hours=1157400.0&engine_oil_press=596000.0&fuel_delivery_pressure=584000.0&hydrostatic_drive_pressure=6520000.0&hydr_oil_temp=39.0&scr_tank_level=95.6', 'http://54.83.159.193/get_prediction?engine_load=100.0&engine_coolant_temp=84.0&engine_hours=651780.0&engine_oil_press=436000.0&fuel_delivery_pressure=524000.0&hydrostatic_drive_pressure=36710000.0&hydr_oil_temp=68.0&scr_tank_level=98.4', 'http://54.83.159.193/get_prediction?engine_load=100.0&engine_coolant_temp=83.0&engine_hours=720360.0&engine_oil_press=452000.0&fuel_delivery_pressure=536000.0&hydrostatic_drive_pressure=39590000.0&hydr_oil_temp=65.0&scr_tank_level=62.0', 'http://54.83.159.193/get_prediction?engine_load=59.0&engine_coolant_temp=82.0&engine_hours=1329660.0&engine_oil_press=472000.0&fuel_delivery_pressure=564000.0&hydrostatic_drive_pressure=3200000.0&hydr_oil_temp=64.0&scr_tank_level=100.0', 'http://54.83.159.193/get_prediction?engine_load=100.0&engine_coolant_temp=81.0&engine_hours=606960.0&engine_oil_press=452000.0&fuel_delivery_pressure=528000.0&hydrostatic_drive_pressure=33850000.0&hydr_oil_temp=68.0&scr_tank_level=99.2', 'http://54.83.159.193/get_prediction?engine_load=53.0&engine_coolant_temp=75.0&engine_hours=252360.0&engine_oil_press=336000.0&fuel_delivery_pressure=528000.0&hydrostatic_drive_pressure=2530000.0&hydr_oil_temp=56.0&scr_tank_level=100.0', 'http://54.83.159.193/get_prediction?engine_load=66.0&engine_coolant_temp=84.0&engine_hours=773100.0&engine_oil_press=492000.0&fuel_delivery_pressure=572000.0&hydrostatic_drive_pressure=10230000.0&hydr_oil_temp=64.0&scr_tank_level=88.8', 'http://54.83.159.193/get_prediction?engine_load=39.0&engine_coolant_temp=84.0&engine_hours=892980.0&engine_oil_press=460000.0&fuel_delivery_pressure=568000.0&hydrostatic_drive_pressure=2710000.0&hydr_oil_temp=67.0&scr_tank_level=76.8', 'http://54.83.159.193/get_prediction?engine_load=53.0&engine_coolant_temp=82.0&engine_hours=739260.0&engine_oil_press=476000.0&fuel_delivery_pressure=536000.0&hydrostatic_drive_pressure=2790000.0&hydr_oil_temp=53.0&scr_tank_level=96.4', 'http://54.83.159.193/get_prediction?engine_load=1.0&engine_coolant_temp=81.0&engine_hours=1000620.0&engine_oil_press=464000.0&fuel_delivery_pressure=548000.0&hydrostatic_drive_pressure=9040000.0&hydr_oil_temp=64.0&scr_tank_level=47.2', 'http://54.83.159.193/get_prediction?engine_load=75.0&engine_coolant_temp=83.0&engine_hours=1022940.0&engine_oil_press=448000.0&fuel_delivery_pressure=556000.0&hydrostatic_drive_pressure=19050000.0&hydr_oil_temp=75.0&scr_tank_level=100.0', 'http://54.83.159.193/get_prediction?engine_load=80.0&engine_coolant_temp=85.0&engine_hours=1362060.0&engine_oil_press=456000.0&fuel_delivery_pressure=600000.0&hydrostatic_drive_pressure=15060000.0&hydr_oil_temp=76.0&scr_tank_level=96.8', 'http://54.83.159.193/get_prediction?engine_load=100.0&engine_coolant_temp=82.0&engine_hours=1034640.0&engine_oil_press=444000.0&fuel_delivery_pressure=524000.0&hydrostatic_drive_pressure=34990000.0&hydr_oil_temp=76.0&scr_tank_level=99.6', 'http://54.83.159.193/get_prediction?engine_load=86.0&engine_coolant_temp=81.0&engine_hours=853200.0&engine_oil_press=460000.0&fuel_delivery_pressure=580000.0&hydrostatic_drive_pressure=26210000.0&hydr_oil_temp=64.0&scr_tank_level=100.0', 'http://54.83.159.193/get_prediction?engine_load=57.0&engine_coolant_temp=82.0&engine_hours=1184040.0&engine_oil_press=468000.0&fuel_delivery_pressure=552000.0&hydrostatic_drive_pressure=14290000.0&hydr_oil_temp=66.0&scr_tank_level=78.0', 'http://54.83.159.193/get_prediction?engine_load=58.0&engine_coolant_temp=77.0&engine_hours=1254060.0&engine_oil_press=336000.0&fuel_delivery_pressure=536000.0&hydrostatic_drive_pressure=2440000.0&hydr_oil_temp=66.0&scr_tank_level=72.8', 'http://54.83.159.193/get_prediction?engine_load=56.0&engine_coolant_temp=76.0&engine_hours=1050120.0&engine_oil_press=332000.0&fuel_delivery_pressure=544000.0&hydrostatic_drive_pressure=2550000.0&hydr_oil_temp=62.0&scr_tank_level=89.6', 'http://54.83.159.193/get_prediction?engine_load=70.0&engine_coolant_temp=83.0&engine_hours=1342080.0&engine_oil_press=504000.0&fuel_delivery_pressure=576000.0&hydrostatic_drive_pressure=20790000.0&hydr_oil_temp=55.0&scr_tank_level=100.0'],
            engine_load: 0,
            engine_coolant_temp: 0,
            engine_hours: 0,
            engine_oil_press: 0,
            fuel_delivery_pressure: 0,
            hydrostatic_drive_pressure: 0,
            hydr_oil_temp: 0,
            scr_tank_level: 0,
            prob_almost_broken: 0,
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
                this.setState({
                    engine_load: res['engine_load'],
                    engine_coolant_temp: res['engine_coolant_temp'],
                    engine_hours: res['engine_hours'],
                    engine_oil_press: res['engine_oil_press'],
                    fuel_delivery_pressure: res['fuel_delivery_pressure'],
                    hydr_oil_temp: res['hydr_oil_temp'],
                    scr_tank_level: res['scr_tank_level'],
                    prob_almost_broken: res['prob_almost_broken'],
                    prediction: res['prediction_label'],
                    hydrostatic_drive_pressure: res['hydrostatic_drive_pressure']
                })
            })

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
        var { data, engine_load, engine_coolant_temp, engine_hours, engine_oil_press, fuel_delivery_pressure, hydrostatic_drive_pressure, hydr_oil_temp, scr_tank_level, prob_almost_broken, prediction } = this.state;
        return (
            <div className='renderContainer'>
                <div className='one'>
                    <InfoHolder infoName='Engine Load (%)' infoValue={engine_load}/>
                    <InfoHolder infoName='Engine Coolant Temp (C)' infoValue={engine_coolant_temp}/>
                    <InfoHolder infoName='Engine Hours (s)' infoValue={engine_hours}/>
                    <InfoHolder infoName='Engine Oil Pressure (Pa)' infoValue={engine_oil_press}/>
                </div>
                <div className='two'>
                    <InfoHolder infoName='% Broken' infoValue={prob_almost_broken}/>
                    <InfoHolder infoName='Prediction' infoValue={prediction} />
                    <div className='startButton' onClick={this.apiRequest}>Start</div>
                </div>
                <div className='three'>
                    <InfoHolder infoName='Fuel Delivery Pressure (Pa)' infoValue={fuel_delivery_pressure}/>
                    <InfoHolder infoName='Hydrostatic Drive Pressure (Pa)' infoValue={hydrostatic_drive_pressure}/>
                    <InfoHolder infoName='Temperature of hydraulic fluid (C)' infoValue={hydr_oil_temp}/>
                    <InfoHolder infoName='Ratio of Volume of Diesel Fuid (%)' infoValue={scr_tank_level}/>
                </div>
            </div>
        )
    }

    render() {
        const { data, isLoading, engine_load, engine_coolant_temp, engine_hours, engine_oil_press, fuel_delivery_pressure, hydrostatic_drive_pressure, hydr_oil_temp, scr_tank_level, prob_almost_broken, prediction } = this.state;
        if(isLoading) {
            return  (
                <div className='homeContainer'> 
                    <h1>
                        DiAGnostic
                    </h1>
                    <h3>
                        Real-time and On-Demand Seamless Machine Health Prediction Model
                    </h3>
                    <br/>
                    <div className='startButton' onClick={this.apiRequest}>
                    Start
                    </div>
                    <div>
                        
                    </div>
                </div>
            );
        }


        return ( 
            <div className='full_container'>
                <h1 className='header' >Status</h1>
                <div className='renderContainer'>
                    <div className='one'>
                        <div>Engine Load (%)<br/>
                        {engine_load}
                        </div>
                        <div>Engine Coolant Temp (C)<br/>
                        {engine_coolant_temp}
                        </div>
                        <div>Engine Hours (s)<br/>
                        {engine_hours}
                        </div>
                        <div>Engine Oil Pressure (Pa)<br/>
                        {engine_oil_press}
                        </div>
                    </div>
                    <div className='two'>
                        <div>% Chance Need Servicing<br/>
                        {(parseFloat(prob_almost_broken) * 100)}
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <div className='updateButton' onClick={this.apiRequest}>Update</div>
                    </div>
                    <div className='three'>
                        <div>Fuel Delivery Pressure (Pa)<br/>
                        {fuel_delivery_pressure}
                        </div>
                        <div>Hydrostatic Drive Pressure (Pa)<br/>
                        {hydrostatic_drive_pressure}
                        </div>
                        <div>Temperature of Hydraulic Fluid (C)<br/>
                        {hydr_oil_temp}
                        </div>
                        <div>Ratio of Volume of Diesel Fuid (%)<br/>
                        {scr_tank_level}
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
