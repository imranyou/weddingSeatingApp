import Autocomplete from 'react-toolbox/lib/autocomplete/Autocomplete';
import React, { Component } from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';

const source = {
  'TABLE 1 & SEAT 1': 'Yem Huynh',
  'TABLE 2 & SEAT 2': 'Ray Nui',
  'TABLE 3 & SEAT 3': 'Imran Yousuf',
  'TABLE 4 & SEAT 4': 'Pooja Sharma'
};

export class AutoCompleteTest extends React.Component {
  state = {
    seats: []
  }

  handleChange = (value) => {
    console.log(value)
    const latestValue = value.slice().shift();
    console.log(latestValue)
    this.setState({seats: value, check: source[latestValue]});
  };

  render () {
    return (
      <center>
        <div>
        <Autocomplete
          direction="down"
          selectedPosition="below"
          label="Select Your Name"
          onChange={this.handleChange}
          value={this.state.seats}
          source={source} >
        </Autocomplete>
          <Card style={{width: '350px'}}>
            <CardTitle
              avatar="https://placeimg.com/80/80/animals"
              title={this.state.check}
            />
            <CardMedia
              aspectRatio="wide"
              image="http://www.rapbasement.com/wp-content/uploads/2015/08/Chris-Brown-Security-Arrested-For-Loaded-Gun.jpg"
            />
            <CardTitle
              title={this.state.seats.slice().shift()}
            />
          </Card>
          <img src="http://imagemap-generator.dariodomi.de/uploads/171101_002640_5f9ac4f3934af2Pp.png" alt="" useMap="#Map" />
        </div>
      </center>


    );
    }

}

export default AutoCompleteTest;
