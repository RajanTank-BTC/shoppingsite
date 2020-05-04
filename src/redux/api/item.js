import client from './client'
import axios from 'axios'

const addItem = (data) => {
  return axios({
    method: "post",
    url: `http://localhost:8000/add-item`,
    data,
    config: { headers: { "Content-Type": "multipart/form-data" } }
  });
}

export { addItem } 