import React from "react";

class SubscriptionForm extends React.Component {
   state = {
    email: "",
    isAgreewithTerms: false,
   };

handleEmail = (event) => {
    this.setState({ email: event.target.value });
}

handleCheckbox = (event) => {
    this.setState({ isAgreewithTerms: event.target.checked })
}

handleSubmit = () => {
    const isValidEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email.toLocaleLowerCase())
    if(!isValidEmail){
        alert("Please enter a valid email address")
    }
     this.setState({
        email: '',
        isAgreewithTerms: false,
     })
}

   render() {
    const { isAgreewithTerms, email } = this.state;
    return (
      <div>
        <input 
          type="email" 
          name="email"
          placeholder="email"
          value={email}
          onChange={this.handleEmail}
        />
        <br />
        <label>
          <input 
            type="checkbox" 
            name="isAgreewithTerms"
            checked={isAgreewithTerms}
            onChange={this.handleCheckbox}
          />
          I agree with the terms
        </label>
        <br />
        <button onClick={this.handleSubmit}>Send</button>
      </div>
    );
   } 
}

export {SubscriptionForm};