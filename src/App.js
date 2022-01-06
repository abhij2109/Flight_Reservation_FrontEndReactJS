import './App.css';
import {Route,Switch} from 'react-router-dom';
import DisplayFlights from './components/DisplayFlights';
import FindFlights from './components/FindFlights';
import PassengerDetails from './components/PassengerDetails';
import ConfirmReservation from './components/ConfirmReservation';
import React,{Component} from 'react';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Switch>
            <Route exact path="/" component={FindFlights}/>
            <Route exact path="/displayFlights/:from/:to/:departureDate" component={DisplayFlights}/>
            <Route exact path="/passengerDetails/:flightId" component={PassengerDetails}/>
            <Route exact path="/confirmReservation" component={ConfirmReservation}/>
        </Switch>
      </div>
    );  
  }
}

export default App; 
