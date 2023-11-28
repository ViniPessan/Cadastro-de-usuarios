"use client"

import { useContext } from "react"
import Form from "../../../components/Form"
import styles from"./style.module.css"
import { UserContext } from "@/context/UsersContext"
import Header from "@/components/Header"
import Footer from "@/components/Footer"


export default function UpadateUser({params}){

  const { users } = useContext(UserContext)
  
  const userId = +params.userId

  const userToUpdate = users.find((user) => user.id === +userId)
  
  return (
    <div className={styles.updateBackground}>
      <div>
      <Header/>
      <div className="flex items-center justify-center">
      <div className={`${styles.card} items-center flex aling-center justify-center flex-col`}>
      <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold p-8">Atualizar usuários</h1>  
      <Form userToUpdate={userToUpdate}/>
      </div>
      </div>
      </div>
      <div className="p-5">
      <Footer/> 
      </div>  
      </div>
      
    </div>
  )
}