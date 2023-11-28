"use client"
import styles from"./style.module.css"
import { useContext, useRef, useState } from "react"
import { UserContext } from '../context/UsersContext';


export default function Form({userToUpdate}){

  const { addUser, updateUser  } = useContext(UserContext);

const defaultUser = {
  id: Math.floor(Math.random() * 1000000),
  email: "",
  username: "",
  password: "",
  route: "",
  championFav: ""
}

const [user, setUser] = useState(userToUpdate ? userToUpdate : defaultUser)
const inputRef = useRef(null)

const handleChange = (ev) => {
  setUser(currentState => {
    return {
      ...currentState, 
      [ev.target.name]: ev.target.value
    }
  })
}

const handleSubmit = (ev) =>{
  ev.preventDefault()
  try {
    if (userToUpdate){
      updateUser(userToUpdate.id, user)
      alert(`${user.username} foi atualizado com sucesso!`)
    } else {
      addUser(user)
      setUser(defaultUser)
      alert(`${user.username} cadastrado com sucesso!`)
    }
 
  } catch (err) {
    console.log("Ops... Algo deu errado!")
  } finally{
    inputRef.current.focus()
  }
}
return(
  
 <div>
    <div className=" flex flex-col items-center px-24 gap-5">
      <div className={`${styles.card} text-center`}>
        <form onSubmit={handleSubmit} className="flex flex-col text-left font-semibold">
          <label htmlFor="email" className="pb-1">Email</label>
          <input
           className="border border-black mb-3" 
           type="text" 
           name="email" 
           id="email" 
           required
           ref={inputRef}
           value={user.email}
           onChange={handleChange}/>
          <label htmlFor="username" className="pb-1">Nome de usuário</label>
          <input 
          className="border border-black mb-3" 
          type="text" 
          name="username" 
          id="username" 
          required
          value={user.username}
          onChange={handleChange}/>
          <label htmlFor="password" className="pb-1">Senha</label>
          <input 
          className="border border-black mb-3" 
          type="password" 
          name="password" 
          id="password" 
          required
          value={user.password}
          onChange={handleChange}/>
          <label htmlFor="route" className="pb-1">Rota favorita</label>
          <select 
          name="route" 
          id="route" 
          className="border border-black mb-3"
          value={user.route}
          onChange={handleChange}>
          <option value="">Selecione uma rota...</option>
            <option value="Rota do topo">Rota do topo</option>
            <option value="Caçador">Caçador</option>
            <option value="Rota do meio">Rota do meio</option>
            <option value="Atirador">Atirador</option>
            <option value="Suporte">Suporte</option>
          </select>
          <label htmlFor="championFav" className="pb-1">Campeão favorito</label>
          <input 
          className="border border-black mb-3" 
          type="text" 
          name="championFav" 
          id="championFav" 
          value={user.championFav}
          onChange={handleChange}/>
          <div className="flex flex-end">
            <button 
            type="submit" 
            className={`${styles.button} ml-auto font-bold bg-green-500 mt-8 px-4 py-3 rounded-lg hover:bg-green-600 `}
            >Salvar
            </button>
          </div>  
        </form>
     </div>
   </div>
 </div>
 )
}
