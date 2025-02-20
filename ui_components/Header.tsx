'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const Herader = () => {

  const [open,isOpen]=useState(false)

  const handleOpen = () =>{
    isOpen((prev)=>!prev)
  }

  console.log(open)

const header__style:React.CSSProperties={
  backgroundColor:'rgba(0,0,0,.5)',
  padding:'10px',
  display:'flex',
  color:'white',
  justifyContent:'space-between',
  flexDirection:'column',
  fontSize:'1.4em',
  alignItems:'center',
  textAlign:'center',
  justifyItems:'center',
  width:'80%',
  marginInline:'auto',
  gap:'20px'
  // backgroundColor:'blue'

}
const hStyle :React.CSSProperties={
  display:'flex',
  justifyContent:'space-between',
  fontSize:'1.3em',
  backgroundColor:'black',
  color:'white',
  paddingInline:'10px',
  paddingBlock:'10px',
}

const menuStyle:React.CSSProperties={
  // outline:'1px solid redirect',
  // border:'2px solid red',
  boxShadow:' 2px 2px 4px ',
  borderRadius:'10px',
  padding:'4px',
  fontWeight:'bolder',
}


  return (
    <header  >
     <div style={hStyle}>
     <h3 style={menuStyle}>Imperial Autos</h3>
      <menu style={menuStyle}>
        <button onClick={handleOpen}>
          {open?'close':'Menu'} 
        </button>
      </menu>
     </div>
      {
        open &&
        (
          <nav style={header__style}>
            <Link href={'./'}>Home</Link>
            <Link href={'./'}>Rentals</Link>
            <Link href={'./'}>Buy 'n Drive</Link>
            <Link href={'./'}>Logistics</Link>
            <Link href={'./'}>Repairs & Maintenance</Link>
            <Link href={'./'}>Car parts & accessories</Link>
          </nav>
        )
      }
    </header>
  )
}

export default Herader