import React, {Component} from 'react';
import Select from 'react-select';
import classes from "./MeetingAdd.css";
import 'date-fns';
import { KeyboardTimePicker, KeyboardDatePicker} from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import MaterialSelect from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

class AddMeeting extends Component {

  state={
    meetingDate: null,
    meetingStartTime: '10:00 AM'
  }

  handleDateChange = date => {
    console.log(date);
    this.setState({meetingDate: date});
  };

  render(){

    const employeeData = [
      { value: '1', label: 'Arnab' },
      { value: '2', label: 'Wasim' },
      { value: '3', label: 'Hassan' }
    ]

    const phoneData = [
      { value: '1', label: '0193023452345' },
      { value: '2', label: '0156723452345' },
      { value: '3', label: '0178923452345' }
    ]

    const initialDate= new Date('2014-08-18T21:11:54');
    return (
      <div>
        <table className={classes.fullWidth}>
        <tbody>
          <tr>
              <td>
                <Select options={employeeData} />
              </td>
              <td>
                <Select options={phoneData} />
              </td>
          </tr>
          <tr>
              <td>
                  <KeyboardDatePicker disableToolbar variant="inline" format="MM/dd/yyyy" margin="normal"
                    id="date-picker-inline" label="Meeting Date" value={this.state.initialDate}
                    onChange={this.handleDateChange} KeyboardButtonProps={{ 'aria-label': 'change date', }}
                  />
              </td>
              <td>
                <TextField label="Host Name"/>
              </td>
          </tr>
          <tr>
              <td>
                  <KeyboardTimePicker margin="normal" id="time-picker" label="Start Time" value={this.state.initialDate}
                    onChange={this.handleDateChange} KeyboardButtonProps={{ 'aria-label': 'change time',}}/>
              </td>
              <td>
                <TextField label="Email"/>
              </td>
          </tr>
          <tr>
              <td>
                <TextField label="Duration"/>
              </td>
              <td>
              <FormControl className={classes.dropdown}>
                  <InputLabel>Type</InputLabel>
                  <MaterialSelect>
                    <MenuItem value={1}>Vendor</MenuItem>
                    <MenuItem value={2}>Employee</MenuItem>
                    <MenuItem value={3}>Interview</MenuItem>
                  </MaterialSelect>
                  </FormControl>
              </td>
          </tr>
          <tr>
              <td>
                <Button variant="contained" color="primary">Add Guest</Button>
              </td>
              <td>
                <input type="file" name="myFile"/>
              </td>
          </tr>
        </tbody>
      </table>  
    </div> 
    );
  }
  
}

export default AddMeeting;