import React from 'react'
import { Container, Input, Button } from '@material-ui/core'
import { addItem } from '../redux/api/item'

class ItemScreen extends React.Component {


  state = {
    name: '',
    desciption: '',
    price: '',
    quantity: '',
    file: null
  }


  handleChangeValue = (value, name) => {
    this.setState({
      [name]: value
    })
  }
  handleChangeFile = (e) => {
    console.log(e.target.files)
    this.setState({
      file: e.target.files[0]
    })
  }

  handleSubmit = () => {
    const { name, desciption, price, quantity, file } = this.state
    const formData = new FormData();
    formData.append("name", name)
    formData.append("description", desciption)
    formData.append("price", price)
    formData.append("quantity", quantity)
    formData.append("fileName", file)
    addItem(formData).then(res => {
      console.log(res)
    }).catch(error => {
      console.log(error)
    })
  }

  render() {
    const { name, description, price, quantity, file } = this.state
    console.log(file);
    return (
      <Container>
        <div>
          <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', marginTop: 10 }}>
            <label for="">Item name</label>
            <Input
              placeholder="Name"
              value={name}
              onChange={(e) => this.handleChangeValue(e.target.value, "name")}
            />
          </div>
          <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', marginTop: 10 }}>
            <label for="">Item description</label>
            <Input
              placeholder="Description"
              value={description}
              onChange={(e) => this.handleChangeValue(e.target.value, "desciption")}
            />
          </div>
          <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', marginTop: 10 }}>
            <label for="">Item Price</label>
            <Input
              placeholder="Price"
              value={price}
              onChange={(e) => this.handleChangeValue(e.target.value, "price")}
            />
          </div>
          <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', marginTop: 10 }}>
            <label for="">Item Quantity</label>
            <Input
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => this.handleChangeValue(e.target.value, "quantity")}
            />
          </div>
          <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', marginTop: 10 }}>
            <label for="">Upload image</label>
            <input
              type="file"
              placeholder="image"
              // value={file}
              onChange={(e) => this.handleChangeFile(e)}
            />
          </div>

          <Button color="primary" onClick={() => this.handleSubmit()}>Submit</Button>
        </div>
      </Container>
    )
  }
}

export default ItemScreen