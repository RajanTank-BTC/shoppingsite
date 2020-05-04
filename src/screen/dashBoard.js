import React from 'react'
import { Container, Link } from '@material-ui/core'

class DashBoard extends React.Component {
  render() {
    return (
      <Container>
        <div style={{ alignItems: "center", justifyContent: 'center', textAlign: 'center', display: 'flex' }}>
          <Link href='/categories'>
            Category
          </Link>

          <Link href='/item'>
            Item
            </Link>
        </div>
      </Container>
    )
  }
}

export default DashBoard