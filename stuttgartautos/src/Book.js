import React from "react";
// import {image1} from'./images/interior.jpg';
import {Form,FormGroup,Label} from 'reactstrap';
export default function Book(){

    return(
<div id="book">
   
 <div id="form">
 <Form >
     <h1>Request for assitance/Booking</h1>
  <p>Please fill  with the required information</p>

  <form action="#">
    <fieldset>
      <label for="name">Enter Your First Name:
        <input type="text" name="first-name" required />
      </label>
      <label for="last-name">Enter Your Last Name: <input type="text" name="last-name" required /></label>
      <label for="email">Enter Your Email: <input type="email" name="email" required />
      </label>
      <label for="number">Phone number :
        <input type="number" name="phone"  required /></label>
    </fieldset>
    <fieldset>
      <label for="file">Upload the  car picture: <input type="file" name="file" /></label>
      <label for="age">location  (probably your exact map geo map):
        <input /></label>
      <label for="referrer">How can we help you?
        <select name="need">
          <option value="">(select one)</option>
          <option value="1">Tow and repair</option>
          <option value="2">Facebeat</option>
          <option value="3">Full body work</option>
          <option value="4">shocks</option>
        </select>
      </label>
    </fieldset>
    <input type="submit" value="Submit" />
  </form>
   
 </Form>
 </div>
    
</div>
    )
}