// import React, { Component } from 'react';
import { connect } from "react-redux";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { withRouter } from 'react-router-dom'
import React, {Component} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import withStyles from "@material-ui/core/styles/withStyles";
import { Grid } from "@material-ui/core";

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  plusIcon:{
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    color:"#fff",
    backgroundColor:"#1976d2"
  }
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

class PrintData extends Component  {
  addMore=()=>{
  this.props.history.push('/')
  }
  render(){
    const {classes , _contactData} = this.props;
    console.log(this.props._contactData,"+++vjkjhv+++++")
    return (
       <Grid container justify="center">
          <Grid item sm={10}>
            <Paper className={classes.root}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="left">Email</TableCell>
                    <TableCell align="left">Password</TableCell>
                    <TableCell align="left">Phone</TableCell>
                    <TableCell align="left">Address</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {_contactData.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="left">{row.email}</TableCell>
                      <TableCell align="left">{row.pass}</TableCell>
                      <TableCell align="left">{row.phone}</TableCell>
                      <TableCell align="left">{row.address}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
         </Grid>
         <Grid>
            <Fab aria-label="add" className={classes.plusIcon} onClick={this.addMore}>
              <AddIcon />
            </Fab>
         </Grid>
      </Grid>
    );
  }
}
const mapState = ({ contactData }) => {
    return {
        _contactData: contactData
    };
};


export default connect(mapState) ( (withStyles(styles)(withRouter(PrintData))));