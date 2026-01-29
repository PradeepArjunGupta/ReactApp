import React from 'react'
import ContactNav from '../components/navbars/ContactNav'
import MenuBar from '../components/navbars/MenuBar'

export default function Home() {
  return (
    <div>
      <header>
        <ContactNav/>
        <MenuBar title="FSD Fooder"  />
      </header>
    </div>
  )
}