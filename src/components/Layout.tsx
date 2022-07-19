import React from 'react'
import Navbar from './Navbar'

export default function Layout(children: any ) {
  return (
    <div className="Layout">
        <Navbar />
        <div className="content">
            { children }
        </div>
        <footer>
            <p>Redes Sociales</p>
        </footer>
    </div>
  )
}
