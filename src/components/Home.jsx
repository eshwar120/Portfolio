import React from 'react'
import Header from './Header'
import Main from './Main'
import Projects from './Projects'
import { UserContextProvider } from '../UserContext'

export default function Home() {
  return (
    <div>
      {/* <UserContextProvider> */}
        <Header />
        <Main />
        <Projects />
      {/* </UserContextProvider> */}
    </div>
  )
}
