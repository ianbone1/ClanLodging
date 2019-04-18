import React, {Component} from 'react';
import Requests from '../helpers/Requests.js'
import './InputForm.css'

class GuestForm extends Component {
  constructor(props){
    super(props);
    this.state = {

      firstname: "",
      lastname: "",
      addressline1: "",
      town: "",
      postcode: "",
      email:"",
      phone:""
    }
    this.handlechange = this.handlechange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlechange (event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    const newGuest = this.state;
    console.log(newGuest);
    const request = new Requests();
    request.post('/api/guests', this.state)
    this.props.handleNewGuest(this.state);
    this.setState({
          firstname: "",
          lastname: "",
          addressline1: "",
          town: "",
          postcode: "",
          email:"",
          phone:""})
  }


  render(){

    return (
      <>
      <h3>Create Guest</h3>
      <div className="inputForm">
        <form onSubmit ={this.handleSubmit}>

          <div className="field">
            <div className="inputLabel">
              <label htmlFor="firstname">First Name </label>
            </div>
            <div className="inputField">
              <input  required type="text" id="firstname" name = "firstname" placeholder ="First Name" onChange= {this.handlechange}/>
            </div>
          </div>

          <div className="field">
            <div className="inputLabel">
              <label htmlFor="lastname">Last Name </label>
            </div>
            <div className="inputField">
              <input type="text" id="lastname" name = "lastname" placeholder ="Last Name" onChange= {this.handlechange}/>
            </div>
          </div>

          <div className="field">
            <div className="inputLabel">
              <label htmlFor="addressline1">Address </label>
            </div>
            <div className="inputField">
              <input type ="text" id="addressline1" name="addressline1" placeholder ="Address Line1" onChange= {this.handlechange}/>
            </div>
          </div>

          <div className="field">
            <div className="inputLabel">
              <label htmlFor="town">Town </label>
            </div>
            <div className="inputField">
              <input type ="text" id="town" name="town" placeholder ="Town" onChange= {this.handlechange}/>
            </div>
          </div>

          <div className="field">
            <div className="inputLabel">
              <label htmlFor="postcode">Post Code </label>
            </div>
            <div className="inputField">
              <input id="postcode" type ="text" name="postcode" placeholder ="Postcode" onChange= {this.handlechange}/>
            </div>
          </div>

          <div className="field">
            <div className="inputLabel">
              <label htmlFor="email">Email </label>
            </div>
            <div className="inputField">
              <input id="email" type ="email" name="email" placeholder ="Email" onChange= {this.handlechange}/>
            </div>
          </div>

          <div className="field">
            <div className="inputLabel">
              <label htmlFor="phone">Phone </label>
            </div>
            <div className="inputField">
              <input id="phone" type ="number" name="phone" placeholder ="Phone" onChange= {this.handlechange}/>
            </div>
          </div>

          <div className="field">
            <button type="submit" onSubmit = {this.handleSubmit}>Save</button>
          </div>
      </form>
      </div>

      </>
    );
  }

}
export default GuestForm;
