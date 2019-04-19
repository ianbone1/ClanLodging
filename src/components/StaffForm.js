import React, {Component} from 'react';
import Requests from '../helpers/Requests.js';
import './GuestForm.css';

class StaffForm extends Component {
  constructor(props){
    super(props);
    this.state = {

      firstname: "",
      lastname: "",
      addressline1: "",
      town: "",
      postcode: "",
      email:"",
      phone:"",
      position:""
    }
    this.handlechange = this.handlechange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlechange (event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    const request = new Requests();
    request.post('/api/staffs', this.state);
    this.props.handleNewStaff(this.state);
    event.target.reset();

  }

  render(){

    return (
      <>
      <div className="formHeader">
      <h3>Create Guest !!!!!</h3>
      </div>
      <div className="formBody">
        <form className="form" onSubmit ={this.handleSubmit}>

            <div className="formField">
              <label htmlFor="firstname">First Name </label>
              <input className="formField"  required type="text" id="firstname" name = "firstname" placeholder ="First Name" onChange= {this.handlechange}/>
            </div>


            <div className="formField">
              <label  htmlFor="lastname">Last Name </label>
              <input className="formField"  type="text" id="lastname" name = "lastname" placeholder ="Last Name" onChange= {this.handlechange}/>
            </div>


            <div className="formField">
              <label htmlFor="addressline1">Address </label>
              <input className="formField" type ="text" id="addressline1" name="addressline1" placeholder ="Address Line1" onChange= {this.handlechange}/>
            </div>

            <div className="formField">
              <label htmlFor="town">Town </label>
              <input className="formField" type ="text" id="town" name="town" placeholder ="Town" onChange= {this.handlechange}/>
            </div>

          <div className="formField">
              <label htmlFor="postcode">Post Code </label>
              <input className="formField" id="postcode" type ="text" name="postcode" placeholder ="Postcode" onChange= {this.handlechange}/>
          </div>

          <div className="formField">
              <label htmlFor="email">Email </label>
              <input className="formField" id="email" type ="email" name="email" placeholder ="Email" onChange= {this.handlechange}/>
          </div>

          <div className="formField">
              <label htmlFor="phone">Phone </label>
              <input className="formField" id="phone" type ="number" name="phone" placeholder ="Phone" onChange= {this.handlechange}/>
          </div>

          <div className="formField">
              <label htmlFor="position">Position </label>
              <input className="formField" type="text" name = "position" placeholder ="Position" onChange= {this.handlechange}/>

          </div>

          <div className="buttonField">
            <button className="buttonControl" type="submit" onSubmit = {this.handleSubmit}>Save</button>
          </div>
        </form>
      </div>
      </>
    );
  }

}


export default StaffForm;
