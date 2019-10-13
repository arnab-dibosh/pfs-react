import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CustomPaginationActionsTable from '../Table/Table';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import * as Constants from '../../Constants';


class Meeting extends Component {

  // public string HostId { get; set; }
  //       public DateTime Date { get; set; }
  //       public TimeSpan StartTime { get; set; }
  //       public TimeSpan EndTime { get; set; }
  headCells = [
    { id: 'HostName', numeric: false, disablePadding: true, label: 'Host' },
    { id: 'Date', numeric: false, disablePadding: false, label: 'Date' },
    { id: 'StartTime', numeric: false, disablePadding: false, label: 'Start Time' },
    { id: 'EndTime', numeric: false, disablePadding: false, label: 'End Time' },
  ];
  
  rows = [
    {Id: 1, HostName: "Arnab", Date: '1 jan 2019', StartTime: '10:00 AM', EndTime: '12:00 PM'},
    {Id: 2, HostName: "Arnab", Date: '1 jan 2019', StartTime: '10:00 AM', EndTime: '12:00 PM'},
    {Id: 3, HostName: "Arnab", Date: '1 jan 2019', StartTime: '10:00 AM', EndTime: '12:00 PM'},
    {Id: 4, HostName: "Arnab", Date: '1 jan 2019', StartTime: '10:00 AM', EndTime: '12:00 PM'},
    {Id: 5, HostName: "Arnab", Date: '1 jan 2019', StartTime: '10:00 AM', EndTime: '12:00 PM'},
   // {name: "Donut", calories: 452, fat: 25, carbs: 51},    
  ];

  render(){

    return (
        <Container>
            <Link to={Constants.MeetingURL+ "/Add"}>
                  <Button variant="contained" color="primary">Add Meeting</Button>
            </Link>
          <Typography component={'span'} >
            <CustomPaginationActionsTable rows={this.rows} headCells={this.headCells} tableTitle="Meeting List"/>
          </Typography>      
        </Container>
    );
  }
  
}

export default Meeting;