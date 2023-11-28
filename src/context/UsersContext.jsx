import { createContext, useState } from "react"

export const UserContext = createContext()

export function UserContextProvider({children}){
  const [users, setUsers] = useState(() => {

    const usersData = localStorage.getItem('users-list')
    if (!usersData) return []
  
    const users = JSON.parse(usersData)
  
    return users
  })

  const addUser = ((user) => {
    setUsers((currentState) =>{
      const updatedUser = [user, ...currentState]
      localStorage.setItem('users-list', JSON.stringify(updatedUser))
      return updatedUser
    })
  }) 

  const updateUser = (userId, newAtributes) =>{
    setUsers((currentState) =>{
      const userIndex = currentState.findIndex(user => user.id === +userId)
      const updatedUser = [...currentState]
      Object.assign(updatedUser[userIndex],  newAtributes)
      localStorage.setItem("users-list", JSON.stringify(updatedUser))
      return updatedUser
    })

  }

  const deleteUser = (userId) =>{
    setUsers(currentState => {
    const updatedUser = currentState.filter(user => user.id !== userId)
    localStorage.setItem('users-list', JSON.stringify(updatedUser))
    return updatedUser
    })
  }
  

  const userFunc = {
    users, 
    addUser,
    deleteUser,
    updateUser
  }

  return(
    <UserContext.Provider value={userFunc}>
      {children}
    </UserContext.Provider>
  )

}