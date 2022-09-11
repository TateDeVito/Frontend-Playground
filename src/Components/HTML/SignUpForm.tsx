// 10/10 tests passed
// Task:
// Implement a sign up form with the correct labels and inputs, and a Sign Up button that allows you
// to submit the form:

// Keys:
//  - Understand that within a form, you can make certain fields "required"
//  - You can also add label tags around inputs to add a label to those fields

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './SignUpForm.css';

const signUpForm =
  <>
    <h2>Sign Up Form</h2>
    <Card variant='outlined' sx={{ minWidth: 275, height: 620, marginBottom: 20 }}>
      <CardContent>
      <div>
        <h3>Task</h3>
        <p><i>Implement a sign up form with the correct labels and inputs, and a Sign Up button.</i></p>
        <h3>Keys</h3>
        <ul>
          <li>Understand that within a form, you can make certain fields "required"</li>
          <li>You can also add label tags around inputs to add a label to those fields</li>
        </ul>
      </div>
      <h3>HTML Answer Component</h3>
  <form style={{ backgroundColor: "lightgrey"}}>
    <div>
      <label>Username: 
        <input type="text" required />  
      </label> 
      <label>Password: 
        <input type="password" required />
      </label> 
      <label>Email: 
        <input type="email" required />
      </label> 
    </div>
    <div>
      <label>Phone Number: 
        <input type="tel" />  
      </label> 
      <label>Date of Birth: 
        <input type="date" />
      </label> 
      <label>I agree to the TOS 
        <input type="checkbox" required/>
      </label> 
        </div>
        <div>
          <button value="Sign Up" type="submit">Sign Up</button>
        </div>
      </form>
    </CardContent>
    </Card>
  </>

export default function SignUpForm() {
  return signUpForm;
}
