import React from "react";
import ReactDOM from 'react-dom'
export class ContactForm extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        mobile: '',
        company: '',
        email: '',
        message: '',
        error: '',
        thankyou: false
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleBlur   = this.handleBlur.bind(this);
    }
    
    isValidEmail(email) {
      return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
    }
    
    isValidMobile(mobileno) {
      return /^[6-9]\d{9}$/.test(mobileno);
    } 
    
    validateField(field, value) {
      if(value.length<=0) {
        return <div className="alert alert-danger"><span className="text-capitalize">{field}</span> is required field.</div>;
      } else {
         if(field=='email')       {
          if(!this.isValidEmail(value))
          return <div className="alert alert-danger">Invalid Email.</div>;
        } else if(field=='mobile') {
          if(!this.isValidMobile(value))
          return <div className="alert alert-danger">Invalid Mobile Number.</div>;
        } else {
          return '';
        }
      }
    }
    
    handleBlur(event) {
        this.setState({ error: this.validateField(event.target.name, event.target.value) });
    }
    
    handleChange(event) {
      this.setState({ 
        [event.target.name]: event.target.value
      });
    }
  
    handleSubmit(event) {
   
      this.setState({ 
        thankyou: true
      });
      
      event.preventDefault();
      
    }
    
    render() {
      if(!this.state.thankyou) {
      return (
  
  <div className="item">
    <div className="card-body">
       {this.state.error}
       
      <form onSubmit={this.handleSubmit} encType="multipart/form-data" autoComplete="off">
        <div className="form-group">
          <input name="name" type="text" className="form-control" placeholder="Name" value={this.state.name} onChange={this.handleChange} onBlur={this.handleBlur} required="required" />
        </div>
        <div className="form-group">
          <input name="mobile" type="text" className="form-control" placeholder="Mobile" onBlur={this.handleBlur} value={this.state.mobile} onChange={this.handleChange}  />
        </div>
        <div className="form-group">
          <input name="company" type="text" className="form-control" placeholder="Company" value={this.state.company} onChange={this.handleChange} onBlur={this.handleBlur} required="required" />
        </div>
            <div className="form-group">
          <input name="email" type="email" className="form-control" placeholder="Email" value={this.state.email} onChange={this.handleChange} onBlur={this.handleBlur} required="required" />
        </div>
          <div className="form-group">
          <textarea name="message" type="text" className="form-control" placeholder="Message" value={this.state.message} onChange={this.handleChange} onBlur={this.handleBlur} required="required" />
        </div>
          <p className="text-center mb-0"><input type="submit" className="btn btn-primary w-100" value="Submit Now" /></p>
      </form>
      
    </div>
  </div>
      
      );
        }  
      
       if(this.state.thankyou) {
         return (
           <div className="thankyou_details">
             <div class="text-success">Thank for your message. We will contact you soon.</div>
              <ul className="list-group">
                <li className="list-group-item">Name: {this.state.name}</li>
                
              </ul>
           </div>
          )
        }
    }
  }
  