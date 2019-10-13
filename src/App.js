import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CustomPaginationActionsTable from './components/Table/Table';


export default function App() {
  return (
    <Container>
      <Typography component={'span'} >
        <CustomPaginationActionsTable/>
      </Typography>      
    </Container>    
  );
}
