import React, { Component } from 'react';
import ContactForm from "../forms/index.contactForm";
import { connect } from "react-redux";
import { contactData } from "../../store/actions/index.action";
import {
  withRouter
} from 'react-router-dom'
 class Contact extends Component {
   constructor(props){
     super(props);
   }
    formSubmit = values => {
        this.props.$contactData(values)
        this.props.history.push('/print')
    };
  render() {
    return (
      <React.Fragment>   
        <ContactForm
            initialValues={{name:"",  email: "", pass: "", phone: "", address:"" }}
            onSubmit={this.formSubmit}
          />
      </React.Fragment>
    )
  }
}

const mapState = () => {
    return {
       
    };
};
const mapDispatch = dispatchEvent => ({
    $contactData: values => dispatchEvent(contactData(values))
});
export default connect(
  mapState,
  mapDispatch,  
)(withRouter(Contact));

// export default Contact;