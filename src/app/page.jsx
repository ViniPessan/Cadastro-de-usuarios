import Link from "next/link";
import styles from "./style.module.css"
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function Home() {
  return (
       <div className={styles.homeBackground}>
        <Header/>
      <div className=" flex flex-col justify-center items-center text-black pb-20 ">
        <h1 className="font-bold text-6xl text-white pb-10">Bem-vindo invocador!</h1>
        <div className={styles.cardHome}>
          <div className="p-5">
            <p className="text-center p-2 font-semibold text-3xl">O que é League of legends?</p>
            <p>League of Legends é um jogo de estratégia em que duas equipes de cinco poderosos Campeões 
             se enfrentam para destruir a base uma da outra. Escolha entre mais de 140 Campeões para realizar 
            jogadas épicas, assegurar abates e destruir torres conforme você luta até a vitória.
           </p>
          </div>
        <div className="p-5">
        <p className="p-2 text-center font-semibold text-3xl">Abra caminho!</p>
        <p>Sua equipe precisa avançar por pelo menos uma rota para chegar ao Nexus inimigo, contendo em 
          seu caminho estruturas defensivas chamadas de torres e inibidores. Cada rota tem três torres e 
          um inibidor, e cada Nexus é protegido por duas torres.
          </p>
        </div>  
        <div className="flex justify-center items-center">
          <Link href="/form">
            <button className="font-bold bg-green-500 mt-8 px-4 py-3 rounded-lg hover:bg-green-600">Jogue agora</button>
            </Link>
        </div>
        </div>
      </div>
      <Footer/>
       </div>   
  )
}
