import React from 'react';
import {  Route, Switch } from "react-router-dom";
import Contact from "../components/contact";
import PrintData from "../components/printData";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  topContainer:{
      marginTop: "20px",
  }
});
class Routing extends React.Component{
    render(){
        const {classes}=this.props;
        return(
            <React.Fragment>
                <div className={classes.topContainer}>
                    <Switch>
                        <Route exact path="/">
                            <Contact/>
                        </Route>
                        <Route path="/print">
                            <PrintData/>
                        </Route>
                        
                    </Switch>
                </div>
            </React.Fragment>
        )
    }
}
export default withStyles(styles)(Routing);
