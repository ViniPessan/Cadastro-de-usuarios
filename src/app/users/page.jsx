"use client"

import Footer from "../../components/Footer"
import Header from "../../components/Header"
import styles from"./style.module.css"
import Form from "../../components/Form"
import { useContext, useState } from "react"
import { UserContext } from "@/context/UsersContext"
import Link from "next/link"
import DeleteBtn from "@/components/DeleteBtn"


export default function Users(){
  const {users} = useContext(UserContext)

  const [userToAtt, setUserToAtt] = useState(null)

  const handleUpdate = (user) =>{
    setUserToAtt(user)
  }

  return(
    <div className={`${styles.usersBackground} flex flex-col min-h-screen`}>
      <Header/>
      <div className="flex justify-center my-10 mb-20 p-5">
      <div className={`${styles.card} flex flex-col items-center`}>
      <h1 className="text-4xl font-semibold p-5 underline">Lista de usuários</h1>
      <div className="">
      <table className="">
        <thead className="">
          <tr>
            <th className="w-1/10 p-2">ID</th>
            <th className="w-3/10 p-2">Email</th>
            <th className="w-2/10 p-2">Nome de usuário</th>
            <th className="w-2/10 p-2">Rota favorita</th>
            <th className="w-2/10 p-2">Campeão Favorito</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td className="p-2 text-center text-xl font-bold" colSpan="6">
                <p className="mb-2 ">Nenhum usuário foi encontrado :(</p>
                <p>Por favor, considere cadastrar um usuário primeiro!</p>
              </td>
            </tr>
            ) : (
          users.map((user)=>(
            <tr key={user.id}>
            <td className="p-2 text-center text-lg">{user.id}</td>
            <td className="p-2 text-center text-lg">{user.email}</td>
            <td className="p-2 text-center text-lg">{user.username}</td>
            <td className="p-2 text-center text-lg">{user.route}</td>
            <td className="p-2 text-center text-lg">{user.championFav}</td>
            <td className="p-2">
            <Link className="p-3 m-5 bg-green-500 rounded-lg hover:bg-green-600" href={`/updateUser/${user.id}`}>Atualizar</Link>  
            <DeleteBtn id={user.id} name={user.username}/>
            </td>
            </tr>
              )) 
            )}
        </tbody>
      </table>
      </div>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

