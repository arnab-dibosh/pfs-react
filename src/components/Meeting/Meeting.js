import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import MeetingList from '../MeetingList/MeetingList';
import MeetingAdd from '../MeetingAdd/MeetingAdd';
import * as Constants from '../../Constants';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider} from '@material-ui/pickers';

class Meeting extends Component {

  render(){

    return (
      <BrowserRouter>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Route exact path={Constants.MeetingURL+ "/"} component={MeetingList}/>
          <Route path={Constants.MeetingURL+ "/Add"} component={MeetingAdd}/>
        </MuiPickersUtilsProvider>
      </BrowserRouter>
    );
  }
  
}

export default Meeting;
