import React from 'react';
import { Input, ListItem, Button } from '@material-ui/core'
import { registerUser } from '../redux/api/login'

class Register extends React.Component {

  state = {
    name: '',
    email: '',
    password: ''
  }
  handleInputChange = (value, name) => {
    this.setState({
      [name]: value
    })
  }

  handleSubmit = async () => {
    let body = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }
    registerUser(body).then(res => {
      console.log(res)
      if (res.status === 200) {
        alert(res.data.message)
        this.props.history.push('./login')
      }
    }).catch(err => {

    })
  }

  render() {
    const { name, email, password } = this.state
    return (
      <div className="App" style={{ textAlign: 'center', justifyContent: 'center', display: 'flex' }}>
        <div style={{ backgroundColor: 'lightgrey', margin: 30, padding: 40, borderRadius: 20 }}>
          <ListItem>
            <Input
              placeholder="name"
              onChange={(event) => this.handleInputChange(event.target.value, 'name')}
              value={name}
            />
          </ListItem>
          <ListItem>
            <Input
              placeholder="email"
              onChange={(event) => this.handleInputChange(event.target.value, 'email')}
              value={email}
            />
          </ListItem>

          <ListItem>
            <Input
              placeholder="password"
              onChange={(event) => this.handleInputChange(event.target.value, 'password')}
              value={password}
            />
          </ListItem>
          <div style={{ margin: 10 }}>
            <Button color="default" style={{ backgroundColor: 'blue' }} onClick={() => this.handleSubmit()} >submit</Button>
          </div>
          <a href="/login" style={{ textDecoration: 'none' }}> Already Register please login</a>
        </div>
      </div>
    );
  }
}

export default Register;
