// api
import { getItems, addItem } from "./api/items"
// react
import { useState } from "react"
// react query
import { useQueryClient, useQuery, useMutation } from "react-query"

const App = () => {
  const [title, setTitle] = useState("")

  // access the client
  const queryClient = useQueryClient()

  const items = useQuery('items', getItems)

  const mutation = useMutation(addItem, {
    onSuccess: () => {
      queryClient.invalidateQueries('items')
    }
  })

  const useAddItem = (e) => {
    e.preventDefault()
    mutation.mutate({ title })
    setTitle("")
  }

  if(items.status === "loading") return <div className="message">Loading...</div>
  if(items.status === "error") return <div className="message">Error!</div>

  return (
    <main>
      <form onSubmit={useAddItem}>
        <input type="text" placeholder="Title" value={title} onChange={(e)=>{setTitle(e.target.value)}} />
      <button className="btn">Add Item</button>
      </form>
      <div className="items">
        {
          items.data.map((item, i) => (
            <div className="item" key={i}>{ item.title }</div>
          ))
        }
      </div>
    </main>
  )
}
 
export default App