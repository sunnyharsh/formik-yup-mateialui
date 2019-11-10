import React, { Component } from 'react';
import ContactForm from "../forms/index.contactForm";
import { connect } from "react-redux";
import { contactData, contactShow } from "../../store/actions/index.action";
import { withRouter } from 'react-router-dom'
 class Contact extends Component {
   constructor(props){
     super(props);
   }
    formSubmit = values => {
        this.props.$contactData(values)
        this.props.history.push('/print')
    };
    componentDidMount(){
      this.props.$contactShow({isList:true})
    }
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
const mapState = ({contactShow}) => {
    return {
       _contactShow: contactShow
    };
};
const mapDispatch = dispatchEvent => ({
    $contactShow: values => dispatchEvent(contactShow(values)),
    $contactData: values => dispatchEvent(contactData(values))
});
export default connect(
  mapState,
  mapDispatch,  
)(withRouter(Contact));

// export default Contact;