import Form from "@/components/Form";
import Header from "@/components/Header";
import styles from"./style.module.css"
import Footer from "@/components/Footer";

export default function registerUser(){
  return(
    <div className={styles.formBackground}>
    <Header/>
    <div className="flex flex-col items-center justify-center">
    <div className={`${styles.card} flex flex-col items-center justify-center`}>   
    <h1 className="text-4xl font-bold text-center p-5">Cadastre-se!</h1>
    <h2 className="text-lg text-center font-semibold pb-5">Preencha as informações abaixo com os seus dados.</h2>
    <Form/>
    </div>
    </div>
    <div className="pt-5">
    <Footer/>
    </div>
    </div>

  )
}