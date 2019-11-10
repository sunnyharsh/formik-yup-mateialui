import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from 'react-router-dom'
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  contactList:{
    cursor:"pointer"
  }
});

class Header extends React.Component {
  constructor(props){
    super(props)
    this.state={
      isList:false
    }
  }
  componentDidMount(){
    let currentPath=this.props.location.pathname
    if(currentPath=="/"){
      this.setState({
        isList: true
      })
    }
    else{
      this.setState({
        isList: false
      })
    }
    console.log("location get",this.props.location)
  }
  contactList=()=>{
    this.props.history.push('/print')
  }
  render(){
    const { isList }= this.state;
    const { classes, _contactShow } =this.props;
    // console.log(isList , "isList")
    // console.log(this.props._contactShow,"{}{}{}")
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar variant="dense">
          <Grid container justify="space-between">
            <Grid>
                <Typography variant="h6" color="inherit">
                  Contact Form
                </Typography>
            </Grid>
            <Grid>
              {
                _contactShow && _contactShow.isList ? <Typography onClick={this.contactList} align="right" variant="h6" color="inherit" className={classes.contactList}>
                            click here for contact list
                      </Typography> : null
              }
            </Grid>
          </Grid>

          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
const mapState = ({contactShow}) => {
  
    return {
       _contactShow: contactShow
    };
};
export default connect(mapState) ( (withStyles(styles)(withRouter(Header))));
// export default  withStyles(styles)(withRouter(Header));  