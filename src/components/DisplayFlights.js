import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

class DisplayFlights extends React.Component{

    state={
        flightData:[]
    }

    componentWillMount(){
        axios.get('http://localhost:8080/flightservies/flights?from='+this.props.match.params.from+
                '&to='+this.props.match.params.to+
                '&departureDate='+this.props.match.params.departureDate).then(res=>{
                    const flightData=res.data;
                    this.setState({flightData});
                    console.log(flightData);
                })
    }
    render(){
        return(<div>
            <h2>Flights:</h2>
            <table>
                <thead>
                    <th>Operating Airlines</th>
                    <th>DepartureCity</th>
                    <th>ArrivalCity</th>
                    <th>Departure Date & Time</th>
                </thead>
                <tbody>
                    {this.state.flightData.map(flight=><RowCreater item={flight}/>)}
                </tbody>
            </table>
        </div>);
    }
}

class RowCreater extends React.Component{
    render(){
        var flight=this.props.item;
        return<tr>
            <td>{flight.operatingAirlines}</td>
            <td>{flight.departureCity}</td>
            <td>{flight.arrivalCity}</td>
            <td>{flight.estimatedDepartureTime}</td>
            <td><Link to={"/passengerDetails/"+flight.id}>Select</Link></td>
        </tr>
    }
}

export default DisplayFlights;