"use client"

import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import { useState } from 'react'

import { UserContextProvider } from '@/context/UsersContext'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {            Com o use client não é possivel utilizar assim
//   title: 'League of legends',
//   description: 'O MOBA mais jogado do mundo.',
// }


export default function RootLayout({ children }) {
  return (
    <UserContextProvider>
      <html lang="pt-BR">
      {/*  fazer os metadados manualmente por conta do use client */}
      <head> 
      <title>League of legends</title>
      <meta name="description" content="O MOBA mais jogado do mundo." />
      </head>
        <body className={inter.className}>
          {children}
        </body>
      </html>
    </UserContextProvider>
  )
}
