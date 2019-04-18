
import React, {Component} from 'react';
import Requests from '../helpers/Requests.js'

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
        <h3>Create Staff Member</h3>
          <div className="">
            <form onSubmit ={this.handleSubmit}>

              <div className="field">
                <div className="inputLabel">
                  <label htmlFor="firstname">First Name </label>
                </div>
                  <div className="inputField">
                    <input  required type="text" id ="firstname" name = "firstname" placeholder ="First Name" onChange= {this.handlechange}/>
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
                    <label htmlFor="postcode">Postcode </label>
                  </div>
                    <div className="inputField">
                      <input type ="text" id="postcode" name="postcode" placeholder ="Postcode" onChange= {this.handlechange}/>
                    </div>
                  </div>

                  <div className="field">
                    <div className="inputLabel">
                      <label htmlFor="email">Email </label>
                    </div>
                      <div className="inputField">
                        <input type ="email" id="email" name="email" placeholder ="Email" onChange= {this.handlechange}/>
                      </div>
                  </div>

                  <div className="field">
                    <div className="inputLabel">
                      <label htmlFor="phone">Phone </label>
                    </div>
                      <div className="inputField">
                        <input type ="number" id="phone" name="phone" placeholder ="Phone" onChange= {this.handlechange}/>
                      </div>
                  </div>

                  <div className="field">
                    <div className="inputLabel">
                      <label htmlFor="position">Position </label>
                    </div>
                      <div className="inputField">
                        <input type="text" id="position" name = "position" placeholder ="Position" onChange= {this.handlechange}/>
                      </div>
                  </div>

                  <button type="submit" onSubmit = {this.handleSubmit}>Save</button>
      </form>
</div>

      </>
    );
  }

}
export default StaffForm;
