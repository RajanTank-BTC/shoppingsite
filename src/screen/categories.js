import React from 'react'
import { Input, Button, ListItem } from '@material-ui/core'
import { addCategories, categoiresList } from '../redux/api/categoties'
import '../styles.css'
class Categories extends React.Component {

  state = {
    name: '',
    categoties: []
  }

  componentDidMount() {
    this.fetchCate()
  }

  fetchCate = () => {
    categoiresList().then(res => {
      console.log(res)
      if (res.status == 200) {
        this.setState({
          categoties: res.data.categories
        })
      }
    })
  }

  handleValueChange = (value, name) => {
    this.setState({
      [name]: value
    })
  }

  submitCategories = () => {
    addCategories({ name: this.state.name }).then(res => {
      console.log(res)
      this.fetchCate()
      this.setState({ name: '' })
    }).catch(error => {
      if (error.response) {
        alert(error.response.data.error)
      }
      console.log(error.response)
    })
  }

  render() {
    const { name, categoties } = this.state
    return (
      <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
        <div>
          <ListItem>
            <Input
              placeholder={"Categories"}
              value={name}
              onChange={(e) => this.handleValueChange(e.target.value, "name")}
            />
          </ListItem>
          <Button style={{ margin: 20, backgroundColor: 'blue' }} onClick={() => this.submitCategories()}>Add Categories</Button>
        </div>
        <div>

          {categoties.length > 0 && <div>
            <table>
              <tbody>
                <tr>
                  <td>
                    name
                </td>
                  <td>
                    action
                </td>
                </tr>
                {categoties.map(cate => {
                  return (
                    <tr>
                      <td>{cate.name}</td>
                      <td><Button>Delete</Button></td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>}
        </div>
      </div>
    )
  }
}

export default Categories