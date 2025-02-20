import React, { CSSProperties } from 'react'

const Hero = () => {
    const hero__style:React.CSSProperties={
        backgroundColor:'red',
        // height:'50vh',
        backgroundImage:'url(./hero.png)',
        backgroundPosition:'center right ',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontSize:'1.2em',
        flexDirection:'column',
        position:'relative',
    }
    const h1__style:CSSProperties={
        fontSize:'2em',
        textAlign:'center',
        color:'white',
        textShadow:'2px 1px red',

        
    }
    const hero__text:React.CSSProperties={
        backgroundColor:'rgba(0,0,0,.6)',
        // outline:'2px solid red',
        width:'100%',
        // height:'35vh',
        padding:'0 50px', 
        // transform:'translateX(32px)'
        textAlign:'center',
        display:'flex',
        flexDirection:'column',
        gap:'20px',
        color:'white',
        paddingTop:'30px',
    }
    const cta:React.CSSProperties={
        border:'none',
        backgroundColor:'rgba(67,4,2,1.2)',
        // outline:'1px solid red',
        // position:'absolute',
        bottom:-25,
        marginBlock:'20px',
        transform:'translatey(30px)',
        fontSize:'1.2em',
        height:'60px',
        borderRadius:'8px',
        padding:'5px',
        left:'10px',
        boxShadow:' 0 0 4px 2px rgb(73,21,2)',
        alignSelf:'start',
        color:'white',
        marginLeft:'10px',
    }
  return (
    <section style={hero__style} className='mx-3'>
        <div  className="text" style={hero__text}>
            <h1 style={h1__style}>
                Imperial Autos
            </h1>
            <p>
            Find Your Dream Car at Imperial Autos. 
             Discover an unparalleled selection of luxury, 
            performance, and classic automobiles. 
            Your perfect ride awaits.
            </p>
        </div>

        <button style={cta}>Explore Now</button>
    </section>
  )
}

export default Hero