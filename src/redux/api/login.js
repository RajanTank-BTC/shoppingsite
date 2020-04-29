import client from './client'
import axios from 'axios'

const loginUser = (body) => {
  return client.post('/login', body)
}

const registerUser = (body) => {
  return client.post('/register', body)
}

export { loginUser, registerUser } 