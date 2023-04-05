// axios
import axios from "axios"

export const getItems = async () => {
  const data = await axios.get(`http://localhost:8080/items`)
    .then(res => res.data.reverse())
  return data
}

export const addItem = async (item) => {
  await axios.post(`http://localhost:8080/items`, item)
}