// Code ControlledInput Component Here
import React, {Component} from 'react'

export default class Form extends Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  render(){
    return(
      <form>
        <input
          type="input"
          name="firstname"
          onChange={event => this.handleChange(event)}
          value={this.state.firstName} />
        <input
          type="text"
          name="lastname"
          onChange={event => this.handleChange(event)}
          value={this.state.lastName} />
      </form>
    )
  }
}
