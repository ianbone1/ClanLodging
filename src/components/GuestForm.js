import React, {Component} from 'react';

class GuestForm extends Component {


render(){

  return (
    <div>
      <form >
      <input type="text" placeholder = "FirstName"/>
      <input type="text" placeholder = "LastName"/>
      <input type ="text" placeholder="addressLine1"/>
      <input type ="text" placeholder="Town"/>
      <input type ="text" placeholder="Postcode"/>
      <input type ="text" placeholder="Email"/>
      <input type ="text" placeholder="Phone Number"/>
      <button type="submit">Save</button>
      </form>

    </div>
  );
}

}
export default GuestForm;
