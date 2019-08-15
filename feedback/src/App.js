import React from 'react';
import { sendFeedback } from './api/slack'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", feedback: "", dsn: "", commercial: "" }
  }

  handleNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  handleEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  handleDSNChange = (event) => {
    this.setState({dsn: event.target.value})
  }

  handleCommercialChange = (event) => {
    this.setState({commercial: event.target.value})
  }

  handleFeedbackChange = (event) => {
    this.setState({feedback: event.target.value})
  }


  handleSubmit = async () => {
    await sendFeedback(this.state.name, this.state.email, this.state.dsn, this.state.commercial, this.state.feedback);
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Name (optional)
          <input type="text" value={this.state.name} onChange={this.handleNameChange}/>
        </label>
        <label>
          Email Address (optional)
          <input type="text" value={this.state.email} onChange={this.handleEmailChange}/>
        </label>
        <label>
          DSN # (optional)
          <input type="text" value={this.state.dsn} onChange={this.handleDSNChange}/>
        </label>
        <label>
          Commercial # (optional)
          <input type="text" value={this.state.commercial} onChange={this.handleCommercialChange}/>
        </label>
        <label>
          Feedback (required)
          <textarea type="text" value={this.state.feedback} onChange={this.handleFeedbackChange} required/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    )
  };
}

export default App;
