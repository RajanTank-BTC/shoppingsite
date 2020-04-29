import React from 'react'
import { ListItem, Input, Container, Button } from '@material-ui/core'
import { loginUser } from '../redux/api/login'

class Login extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleValueChange = (value, name) => {
    this.setState({
      [name]: value
    })
  }

  handleSubmit = () => {
    loginUser(this.state).then(res => {
      console.log(res)
      if (res.status == 200) {
        localStorage.setItem("token", res.data.token)
        this.props.history.push('/categories')
      }
    })
      .catch(err => {
        if (err.response) {
          alert("error:" + err.response.data.error)
        }
        console.log(err.response)
      })
  }


  render() {
    const { email, password } = this.state
    return (
      <div style={{ textAlign: 'center', justifyContent: 'center', display: 'flex' }}>
        <div style={{ backgroundColor: 'lightgrey', margin: 30, padding: 40, borderRadius: 20 }} >
          <ListItem>
            <Input
              placeholder="email"
              value={email}
              onChange={(e) => this.handleValueChange(e.target.value, "email")}
            />
          </ListItem>
          <ListItem>
            <Input
              placeholder="password"
              value={password}
              onChange={(e) => this.handleValueChange(e.target.value, "password")}
            />
          </ListItem>
          <div style={{ margin: 10 }}>
            <Button color="default" style={{ backgroundColor: 'blue' }} onClick={() => this.handleSubmit()} >submit</Button>
          </div>
          No account? <a href="/" style={{ textDecoration: 'none' }}>  Create account</a>
        </div>
      </div>
    )
  }
}

export default Login