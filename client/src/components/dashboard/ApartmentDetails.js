import React from 'react'
import ApartBuilder from '../../actions/builder/ApartBuilder.ts';
import { makeStyles } from "@material-ui/core/styles";
import { RadioGroup } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { Radio } from '@material-ui/core';
import {v4 as uuid} from 'uuid';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
  } from 'reactstrap';
import { findDOMNode } from 'react-dom';
const useStyles = makeStyles(theme => ({
    root: {
      display: "flex"
    },
    formControl: {
      margin: theme.spacing(3),
      '&$checked':{
          color: '#00FFFF'
      }
    },
    group: {
      margin: theme.spacing(1, 0)
    },
  }));

const ApartmentDetails = props => {
    const classes = useStyles();
    const [didCreateRoom, setCreateRoom] = React.useState(false);
    const [value, setValue] = React.useState("first");
    const [formData, setFormData] = React.useState({
      temp: '',
      humidity: '',
      bright: ''
    })
    const { temp, humidity, bright } = formData;
    const onChange = e => setFormData({ ...formData,[e.target.name]: e.target.value });

    function handleClick(event) {
      console.log('did tap')
      if (event.target.value === value) {
        setValue("");
      } else {
        setValue(event.target.value);
      }
    }
    function buildApartment(event){
      event.preventDefault()
      const apartBuilder = new ApartBuilder();
      const apartId = uuid();
      apartBuilder.setApartmentId(apartId);
      if(value === "first") {
        apartBuilder.setTempSensorId(temp);
      } else {
        apartBuilder.setTempSensorId(temp);
        apartBuilder.setHumSensorId(humidity);
        apartBuilder.setBrightSensorId(bright);
      }
      console.log(apartBuilder.build());
      send(apartBuilder.build());
      setCreateRoom(true); 
    }

    async function send(apartment) {
      const config = {
          headers: {
              'Content-Type': 'application/json'
          }
      }
          const apartId = apartment.apartmentId;
          const temp = apartment.tempSensorId;
          const bright = apartment.humSensorId;
          const humidity = apartment.brightSensorId;
          const body = JSON.stringify({ apartId, temp, humidity , bright });
          const res = await axios.post('/api/apartment', body, config);
     
    }
    function disableInputs(){
      return value === "first";
    }

    if (didCreateRoom) {
      return <Redirect to='/dashboard' />
    }

    return (
      
        <div className="dark-overlay">
        <div className="landing-inner">
          <h2>
          Please choose type of complect
          </h2>
          <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          className={classes.group}
          value={value} row
        >
          <FormControlLabel
            value="first"
            control={<Radio color="primary" onClick={handleClick} />}
            label="Only Temperature"
          />
          <FormControlLabel
            value="second"
            control={<Radio color="primary" onClick={handleClick} />}
            label="All package"
          />
        </RadioGroup>
      </FormControl>
    </div>
    <Form className="form">
          <Col>
            <FormGroup>
              <Label>Temperature ID</Label>
              <Input
                type="text"
                name="temp"
                id="tempId"
                placeholder="ex: 12345"
                value={temp}
                onChange={e => onChange(e)} 
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label >Humidity ID</Label>
              <Input
                type="text"
                name="humidity"
                id="humId"
                placeholder="ex: 12345"
                disabled= {disableInputs()}
                value={humidity}
                onChange={e => onChange(e)} 
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label >Brightness ID</Label>
              <Input
                type="text"
                name="bright"
                id="brightId"
                value={bright}
                placeholder="ex: 12345"
                disabled= {disableInputs()}
                onChange={e => onChange(e)} 
              />
            </FormGroup>
          </Col>
         <Button onClick={buildApartment} className="btn btn-primary">Submit</Button>
        </Form>
  </div>
  </div>

    );
}
ApartmentDetails.propTypes = {

}
export default ApartmentDetails;