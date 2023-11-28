import { UserContext } from "@/context/UsersContext"
import { useContext } from "react"

export default function DeleteBtn ({id, name}){
  
  const {deleteUser} = useContext(UserContext)


  const handleDelete = () =>{
    if(confirm(`Tem certeza que deseja excluir ${name}?`)){
      deleteUser(id)
      
    }
  }

  return(
    <button onClick={handleDelete} className="p-2 bg-red-500 rounded-lg hover:bg-red-600">Excluir</button>
  )
}