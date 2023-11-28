import Link from "next/link";
import Image from 'next/image';

export default function Header(){
  return (
    <div>
      <header className='flex items-center justify-between w-full py-3 px-3 text-white'>
        <Link href="/"><Image src="/img/logo.png" alt="League of Legends" className='w-42 h-20' width={168} height={80}/></Link>
        <nav className='flex gap-10'>
          <Link href="/" className="hover:text-gray-300">Início</Link>
          <Link href="/form" className="hover:text-gray-300">Cadastrar</Link>
          <Link href="/users" className="hover:text-gray-300">Usuários</Link>
        </nav>
      </header>
    </div>
  )
}