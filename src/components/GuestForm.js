import React, {Component} from 'react';

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
  }

handlechange (event) {
  this.setState({[event.target.name]: event.target.value})
}


render(){

  return (
    <div>
      <form >
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
