import React, {Component} from 'react';
import Requests from '../helpers/Requests.js'

class GuestForm extends Component {
  constructor(props){
    super(props);
    this.state = {

      firstName: "",
      lastName: "",
      addressLine1: "",
      town: "",
      postCode: "",
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
    request.post('guests', this.state)
  }


  render(){

    return (
      <div>
      <form onSubmit ={this.handleSubmit}>
      <input  required type="text" name = "firstName" placeholder ="First Name" onChange= {this.handlechange}/>
      <input type="text" name = "lastName" placeholder ="Last Name" onChange= {this.handlechange}/>
      <input type ="text" name="addressLine1" placeholder ="Address Line1" onChange= {this.handlechange}/>
      <input type ="text" name="town" placeholder ="Town" onChange= {this.handlechange}/>
      <input type ="text" name="postCode" placeholder ="Postcode" onChange= {this.handlechange}/>
      <input type ="email" name="email" placeholder ="Email" onChange= {this.handlechange}/>
      <input type ="number" name="phone" placeholder ="Phone" onChange= {this.handlechange}/>
      <button type="submit" onSubmit = {this.handleSubmit}>Save</button>
      </form>

      </div>
    );
  }

}
export default GuestForm;
