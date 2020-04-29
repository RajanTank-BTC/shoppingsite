import client from './client'

const addCategories = (body) => {
  return client.post('/add-categoires', body)
}

const categoiresList = () => {
  return client.get('/categories-list')
}
export { addCategories, categoiresList } 